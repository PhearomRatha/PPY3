<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Main Content -->
    <main class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Chapters List -->
      <div class="lg:col-span-1 space-y-4">
        <div
          class="bg-white rounded-xl shadow-md p-6 sticky top-4 hover:shadow-lg transition duration-500"
        >
          <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-list-ol text-indigo-500 mr-2"></i>
            {{ quizResult?.chapterTitle || 'No Chapter Title' }}
          </h3>
          <div class="space-y-3">
            <div
              class="chapter-card bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg transition duration-300 cursor-pointer transform hover:scale-[1.02]"
            >
              <div class="flex justify-between items-center mb-1">
                <h4 class="font-medium text-indigo-800">
                  {{ quizResult?.lessonTitle || 'No Lesson Title' }}
                </h4>
                <span
                  class="text-xs px-[2rem] rounded-full transform hover:scale-110 transition duration-200 bg-red-100 text-red-800"
                  :class="statusClass(score)"
                >
                  {{ statusLabel(score) }}
                </span>
              </div>
              <!-- Progress bar -->
              <div class="flex items-center mt-2">
                <div class="w-full  bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    class="h-1.5  rounded-full transition-all duration-500 "
                    :style="{ width: score + '%', background: progressBarColor(score) }"
                  ></div>
                </div>
                <span class="score-text text-xs text-gray-500 ml-2">
                  {{ score }} / 100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lessons and Quiz Answers -->
      <div class="lg:col-span-2">
        <div
          class="bg-white rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition duration-500"
        >
          <h3
            class="text-lg font-semibold text-gray-800 flex items-center mb-6"
          >
            <i class="fas fa-book-open text-indigo-500 mr-2 floating"></i>
            Your Quiz Answers
          </h3>

          <div v-if="quizResult && quizResult.answers" class="space-y-4">
            <div
              v-for="(answer, index) in quizResult.answers"
              :key="index"
              class="lesson-item border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300 transform hover:scale-[1.01] slide-in-right"
              :style="{ animationDelay: `${0.1 * index}s` }"
            >
              <p class="font-semibold mb-1">Q{{ index + 1 }}: {{ answer.question }}</p>
              <p>
                <span
                  :class="{
                    'text-green-600': answer.selectedOption === answer.correctAnswer,
                    'text-red-600': answer.selectedOption !== answer.correctAnswer
                  }"
                >
                  Your Answer: {{ answer.selectedOption }}
                </span>
              </p>
              <p class="text-blue-600">Correct Answer: {{ answer.correctAnswer }}</p>
            </div>
          </div>

          <p v-else>No answers available.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useQuizStore } from '@/stores/quizStore';

export default {
  data() {
    return {
      quizResult: null,
    };
  },
  computed: {
    // Calculate score from quizResult.answers
    score() {
      if (!this.quizResult?.answers || this.quizResult.answers.length === 0) return 0;
      const total = this.quizResult.answers.length;
      const correct = this.quizResult.answers.filter(
        (a) => a.selectedOption === a.correctAnswer
      ).length;
      // Return percentage score
      return Math.round((correct / total) * 100);
    }
  },
  methods: {
    // Return color gradient based on score
    progressBarColor(score) {
      if (score === 0) return '#ef4444'; // red
      if (score === 100) return '#22c55e'; // green
      // gradient from red to yellow to green
      return 'linear-gradient(to right, #ef4444, #facc15, #22c55e)';
    },
    // Return status label text
    statusLabel(score) {
      if (score === 0) return 'Getting Started';
      if (score === 100) return 'Excellent';
      return 'Keep trying';
    },
    // Return classes for status label
    statusClass(score) {
      if (score === 0) return 'bg-red-100 text-red-800';
      if (score === 100) return 'bg-green-100 text-green-800';
      return 'bg-yellow-100 text-yellow-800';
    },
  },
  mounted() {
    const quizStore = useQuizStore();
    quizStore.loadResults();

    const { courseId, chapterTitle, quizTitle } = this.$route.query;

    const found = quizStore.results.find(
      (r) =>
        r.courseId === courseId &&
        r.chapterTitle === chapterTitle &&
        r.quizTitle === quizTitle
    );

    if (found) {
      this.quizResult = found;

      // Animate progress bars after next tick
      this.$nextTick(() => {
        const progressBars = this.$el.querySelectorAll('.progress-bar');
        progressBars.forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 500);
        });
      });
    } else {
      console.warn('No matching result found');
    }
  },
};
</script>

<style>
@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right {
  animation-name: slide-in-right;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

.floating {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
</style>
