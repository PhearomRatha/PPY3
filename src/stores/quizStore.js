import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    results: JSON.parse(localStorage.getItem('quizResults') || '[]')
  }),
  actions: {
    saveResult(result) {
      this.results.push(result);
      localStorage.setItem('quizResults', JSON.stringify(this.results));
    },
    getResultsByCourse(courseId) {
      return this.results.filter(result => result.courseId === courseId);
    }
  }
});