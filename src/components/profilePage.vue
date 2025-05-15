<template>
  <div class="bg-gray-50 font-sans">
    <div class="container mx-auto px-4 py-8">

      <!-- Profile Header -->
      <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 mb-8 relative">
        <div class="flex flex-col md:flex-row items-center">
          <div class="relative mb-4 md:mb-0 md:mr-6">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" class="profile-pic rounded-full" />
            <span class="absolute bottom-0 right-0 bg-green-500 rounded-full w-5 h-5 border-2 border-white"></span>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-2xl font-bold text-white">Sarah Johnson</h1>
          </div>
          <div class="mt-4 md:mt-0">
            <button
              class="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              <i class="fas fa-cog mr-2"></i> Edit Profile
            </button>
          </div>
        </div>
      </div>

      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Student Profit Dashboard</h1>
      </header>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500">Completed Courses</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ completedCourses.length }}</h3>
            </div>
            <div class="bg-green-100 p-3 rounded-full">
              <i class="fas fa-check-circle text-green-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs Navigation -->
      <div class="flex border-b border-gray-200 mb-6">
        <button
          @click="setFilter('all')"
          :class="{ 'tab-active': activeFilter === 'all' }"
          class="px-4 py-2 mr-2 text-sm font-medium"
        >
          All Courses
        </button>
        <button
          @click="setFilter('completed')"
          :class="{ 'tab-active': activeFilter === 'completed' }"
          class="px-4 py-2 mr-2 text-sm font-medium text-gray-500 hover:text-indigo-600"
        >
          Completed
        </button>
        <button
          @click="setFilter('pending')"
          :class="{ 'tab-active': activeFilter === 'pending' }"
          class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600"
        >
          Pending
        </button>
      </div>

      <!-- Search and Filter -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-6">
        <div class="relative w-full md:w-64 mb-4 md:mb-0">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search courses..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
        <div class="flex space-x-2">
          <select
            v-model="sortBy"
            class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>

            <option value="completion-date">Completion Date</option>
          </select>
      
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredCourses.length === 0" class="text-center py-12">
        <i class="fas fa-book-open text-4xl text-gray-300 mb-4"></i>
        <h3 class="text-lg font-medium text-gray-500">
          No {{ activeFilter === 'all' ? '' : activeFilter }} courses found
        </h3>
        <p class="text-gray-400 mt-1">
          {{ activeFilter === 'completed' ? 'Complete some courses to see them here' : 'You have no pending courses at the moment' }}
        </p>
      </div>

      <!-- Course/Quiz Cards -->
      <div v-else class="grid grid-cols-1 gap-6">
        <div
          v-for="item in filteredCourses"
          :key="item.id || item.date + item.time"
          class="course-card bg-white rounded-lg shadow overflow-hidden transition-all duration-200 relative"
        >
          <!-- DELETE BUTTON -->
          <button
            @click.stop="deleteResult(item)"
            class="text-red-500 w-[3rem]  hover:text-red-700 font-bold text-xl leading-none absolute top-3 right-3"
            aria-label="Delete Result"
          >
            &times;
          </button>

          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/4 h-48 md:h-auto flex items-center justify-center bg-gray-100">
              <img src="https://i.pinimg.com/736x/e4/3b/30/e43b30464e7f8dfd8af62ab84909f436.jpg" alt="">
            </div>
            <div class="p-6 w-full md:w-3/4">
              <div class="justify-between items-start flex-wrap gap-2">
                <p class="text-sm text-gray-500 mb-1"><strong>{{ item.chapterTitle || 'N/A' }}</strong></p>
                <p class="text-sm text-gray-500 mb-1"><strong>{{ item.lessonTitle || 'N/A' }}</strong></p>
                <p class="text-sm text-gray-500 mb-3"><strong>{{ item.quizTitle || 'N/A' }}</strong></p>

              
              </div>

              <!-- QUIZ SCORE & PROGRESS BAR -->
              <div v-if="item.quizTitle" class="mt-4">
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">Quiz Score</span>
                  <span class="text-sm font-medium text-gray-700">
                    {{ item.score }} / {{ item.totalPossibleScore }} ({{ item.percentage }}%)
                  </span>
                </div>
                <div class="progress-bar h-2 bg-gray-200 rounded-full">
                  <div
                    :class="{
                      'bg-green-500': item.status === 'completed',
                      'bg-yellow-500': item.status === 'pending'
                    }"
                    class="h-2 rounded-full"
                    :style="`width: ${item.percentage}%`"
                  ></div>
                </div>

                <!-- DATE & TIME DETAILS -->
                <div class="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <i class="fas fa-calendar-alt mr-1 text-gray-500"></i>
                    <span class="text-gray-600">{{ item.date }}</span>
                  </div>
                  <div>
                    <i class="fas fa-clock mr-1 text-gray-500"></i>
                    <span class="text-gray-600">{{ item.time }}</span>
                  </div>
                  <div>
                    <i class="fas fa-stopwatch mr-1 text-gray-500"></i>
                    <span class="text-gray-600">Time: {{ item.timeTaken }}</span>
                  </div>
              
                </div>
              </div>

              <!-- VIEW DETAILS BUTTON -->
              <div class="mt-4 flex justify-end">
                
                 <button @click="viewDetails(item)"

                  class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { useQuizStore } from '@/stores/quizStore';

export default {
  data() {
    return {
      activeFilter: 'all',
      searchQuery: '',
      sortBy: 'newest',
      categoryFilter: 'all',
    };
  },
  setup() {
    const quizStore = useQuizStore();
    return { quizStore };
  },
  computed: {
    completedCourses() {
      return this.quizStore.completedResults;
    },
    filteredCourses() {
      let results = [...this.quizStore.results];

      if (this.activeFilter !== 'all') {
        results = this.activeFilter === 'completed' 
          ? this.quizStore.completedResults 
          : this.quizStore.pendingResults;
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        results = results.filter(item =>
          (item.courseTitle?.toLowerCase().includes(query) ||
            item.chapterTitle?.toLowerCase().includes(query) ||
            item.lessonTitle?.toLowerCase().includes(query) ||
            item.quizTitle?.toLowerCase().includes(query))
        );
      }

      switch (this.sortBy) {
        case 'newest':
          results.sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateB - dateA;
          });
          break;
        case 'oldest':
          results.sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateA - dateB;
          });
          break;
        case 'highest-score':
          results.sort((a, b) => (b.score / b.totalPossibleScore) - (a.score / a.totalPossibleScore));
          break;
        case 'lowest-score':
          results.sort((a, b) => (a.score / a.totalPossibleScore) - (b.score / b.totalPossibleScore));
          break;
      }

      return results;
    }
  },
  methods: {
    deleteResult(item) {
      const index = this.quizStore.results.findIndex(result => 
        result.date === item.date && 
        result.time === item.time && 
        result.quizTitle === item.quizTitle
      );
      
      if (index !== -1) {
        this.quizStore.deleteResult(index);
      }
    },
    setFilter(filter) {
      this.activeFilter = filter;
    },
    viewDetails(item) {
    this.$router.push({
      name: 'DetailQuiz',
      query: {
        courseId: item.courseId,
        chapterTitle: item.chapterTitle,
        quizTitle: item.quizTitle
      }
    });
  
  }

    
  },
  created() {
    this.quizStore.loadResults();
  }
};
</script>

<style scoped>
.tab-active {
  color: #4f46e5;
  border-bottom: 2px solid #4f46e5;
}
</style>




<style scoped>
.progress-bar {
  height: 8px;
  border-radius: 4px;
  background-color: #e5e7eb;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.course-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.tab-active {
  border-bottom: 3px solid #4f46e5;
  color: #4f46e5;
  font-weight: 600;
}

.profile-pic {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>