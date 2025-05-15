import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quizStore', {
  state: () => ({
    results: JSON.parse(localStorage.getItem('quizResults')) || [],
  }),
  actions: {
    saveResult(result) {
      // Check if this result already exists (based on courseId, chapterTitle, quizTitle, and date)
      const existingIndex = this.results.findIndex(r => 
        r.courseId === result.courseId &&
        r.chapterTitle === result.chapterTitle &&
        r.quizTitle === result.quizTitle &&
        r.date === result.date
      );
      
      if (existingIndex >= 0) {
        // Update existing result
        this.results[existingIndex] = result;
      } else {
        // Add new result
        this.results.unshift(result);
      }
      
      // Save to localStorage
      localStorage.setItem('quizResults', JSON.stringify(this.results));
    },
    loadResults() {
      this.results = JSON.parse(localStorage.getItem('quizResults')) || [];
    },
    deleteResult(index) {
      this.results.splice(index, 1);
      localStorage.setItem('quizResults', JSON.stringify(this.results));
    },
    clearResults() {
      this.results = [];
      localStorage.removeItem('quizResults');
    }
  },
  getters: {
    completedResults: (state) => state.results.filter(r => r.status === 'completed'),
    pendingResults: (state) => state.results.filter(r => r.status === 'pending'),
  }
});