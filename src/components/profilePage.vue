<template>
  <div class="bg-gray-50 font-sans">
    <div class="container mx-auto px-4 py-8">
      
      <!-- Profile Header -->
      <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 mb-8 relative">
        <div class="flex flex-col md:flex-row items-center">
          <div class="relative mb-4 md:mb-0 md:mr-6">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" class="profile-pic rounded-full">
            <span class="absolute bottom-0 right-0 bg-green-500 rounded-full w-5 h-5 border-2 border-white"></span>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-2xl font-bold text-white">Sarah Johnson</h1>
     
         
          </div>
          <div class="mt-4 md:mt-0">
            <button class="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
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
        <button @click="setFilter('all')" :class="{ 'tab-active': activeFilter === 'all' }"
          class="px-4 py-2 mr-2 text-sm font-medium">
          All Courses
        </button>
        <button @click="setFilter('completed')" :class="{ 'tab-active': activeFilter === 'completed' }"
          class="px-4 py-2 mr-2 text-sm font-medium text-gray-500 hover:text-indigo-600">
          Completed
        </button>
        <button @click="setFilter('pending')" :class="{ 'tab-active': activeFilter === 'pending' }"
          class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">
          Pending
        </button>
      </div>

      <!-- Search and Filter -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-6">
        <div class="relative w-full md:w-64 mb-4 md:mb-0">
          <input v-model="searchQuery" type="text" placeholder="Search courses..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
        <div class="flex space-x-2">
          <select v-model="sortBy"
            class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="highest-earnings">Highest Earnings</option>
            <option value="completion-date">Completion Date</option>
          </select>
          <select v-model="categoryFilter"
            class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="all">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
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
        <div v-for="item in filteredCourses" :key="item.id || item.date + item.time"
          class="course-card bg-white rounded-lg shadow overflow-hidden transition-all duration-200">
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/4 h-48 md:h-auto flex items-center justify-center bg-gray-100">
              <i class="fas fa-question-circle text-4xl text-indigo-500" v-if="item.quizTitle"></i>
              <i class="fas fa-book text-4xl text-blue-500" v-else></i>
            </div>
            <div class="p-6 w-full md:w-3/4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-1">
                    {{ item.quizTitle || item.lessonTitle || 'Quiz Result' }}
                  </h3>
                  <p class="text-gray-600">
                    {{ item.courseTitle }} - {{ item.chapterTitle }}
                  </p>
                </div>
                <span :class="{
                  'bg-green-100 text-green-800': item.status === 'completed',
                  'bg-yellow-100 text-yellow-800': item.status === 'pending'
                }" class="text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {{ item.status === 'completed' ? 'Completed' : 'In Progress' }}
                </span>
              </div>

              <div v-if="item.quizTitle" class="mt-4">
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">Quiz Score</span>
                  <span class="text-sm font-medium text-gray-700">
                    {{ item.score }} / {{ item.totalPossibleScore }} ({{ item.percentage }}%)
                  </span>
                </div>
                <div class="progress-bar h-2 bg-gray-200 rounded-full">
                  <div :class="{
                    'bg-green-500': item.status === 'completed',
                    'bg-yellow-500': item.status === 'pending'
                  }" class="h-2 rounded-full" :style="`width: ${item.percentage}%`"></div>
                </div>
                <div class="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div><i class="fas fa-calendar-alt mr-1 text-gray-500"></i><span class="text-gray-600">{{ item.date }}</span></div>
                  <div><i class="fas fa-clock mr-1 text-gray-500"></i><span class="text-gray-600">{{ item.time }}</span></div>
                  <div><i class="fas fa-stopwatch mr-1 text-gray-500"></i><span class="text-gray-600">Time: {{ item.timeTaken }}</span></div>
                  <div><i class="fas fa-chart-bar mr-1 text-gray-500"></i><span class="text-gray-600">Status: {{ item.status }}</span></div>
                </div>
              </div>

              <div class="mt-4 flex justify-end">
                <button 
                  @click="viewDetails(item)"
                  class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
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
      return this.quizStore.results.filter(item => item.status === 'completed');
    },
    filteredCourses() {
      let results = [...this.quizStore.results];

      if (this.activeFilter !== 'all') {
        results = results.filter(item => item.status === this.activeFilter);
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        results = results.filter(item =>
          (item.courseTitle?.toLowerCase().includes(query) ||
            item.chapterTitle?.toLowerCase().includes(query) ||
            item.quizTitle?.toLowerCase().includes(query))
        );
      }

      if (this.categoryFilter !== 'all') {
        results = results.filter(item => item.category === this.categoryFilter);
      }

      switch (this.sortBy) {
        case 'newest':
          results.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));
          break;
        case 'oldest':
          results.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
          break;
        case 'highest-earnings':
          results.sort((a, b) => (b.score / b.totalPossibleScore) - (a.score / a.totalPossibleScore));
          break;
      }

      return results;
    }
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;
    },
    viewDetails(quizResult) {
      this.$router.push({
        name: 'CourseDetail',
        params: { courseId: quizResult.courseId },
        query: { highlightQuiz: quizResult.quizTitle }
      });
    }
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