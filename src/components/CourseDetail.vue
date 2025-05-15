<template>
  <section class="w-screen flex fixed">
    <aside class="w-[25%] ml-2 h-screen sticky top-0 overflow-y-auto scroll-smooth">
      <div class="rounded-lg py-[10px] shadow-lg mt-10">
        <h2 class="font-bold p-5  text-lg  indent-5 text-black">ជំពូក</h2>
        <div class="bg-green-800 rounded-lg py-[10px] mr-5 flex items-center gap-5 mt-5">
          <span>
            <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="#000"
                d="M202.24 74C166.11 56.75  115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61" />
            </svg>
          </span>
          <h3>{{ currentChapter?.chapter_title }}</h3>
        </div>
        <section @click="showLesson" :class="{ 'border-2 border-red-500': isshowLessonVisible }"
          class="mt-2 bg-blue-200 rounded-lg mr-3 h-[45px] flex items-center gap-5">
          <span>
            <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="#000"
                d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61" />
            </svg>
          </span>
          <h1 class="cursor-pointer text-[13px] ">{{ currentChapter?.lesson_1.title }}</h1>
          <h1 class="ml-auto mr-5 text-[15px]"> {{ activeItem === 'lesson_1' ? displayTime : getDefaultTime('lesson_1')
          }}min</h1>
          <!-- <h1 class="ml-auto mr-3 text-[15px]">{{remainingTime}}min</h1> -->

        </section>
        <section @click="showQuiz" :class="{ 'border-2 border-red-500': isshowQuizVisible }"
          class="mr-4 bg-yellow-200 rounded-lg h-[45px] flex items-center gap-5 mt-2">
          <span>
            <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="#000"
                d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61" />
            </svg>
          </span>
          <h1 class="text-[15px]">{{ currentChapter?.quiz.quiz_title_1 }}</h1>
          <h1 class="ml-auto mr-5 text-[15px]">
            {{ activeItem === 'quiz_1' ? displayTime : getDefaultTime('quiz_1') }} min
          </h1>

        </section>
        <section @click="showLesson_2" :class="{ 'border-2 border-red-500': isshowLesson_2Visible }"
          class="mt-2 bg-blue-200 rounded-lg mr-3 h-[45px] flex items-center gap-5">
          <span>
            <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="#000"
                d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61" />
            </svg>
          </span>
          <h1 class="cursor-pointer text-[13px] ">{{ currentChapter?.lesson_2.title }}</h1>
          <h1 class="ml-auto mr-5 text-[15px]">{{ activeItem === 'lesson_2' ? displayTime : getDefaultTime('lesson_2')
          }}min</h1>


        </section>
        <section @click="showQuiz_2" :class="{ 'border-2 border-red-500': isshowQuiz_2Visible }"
          class="mr-4 bg-yellow-200 rounded-lg h-[45px] flex items-center gap-5 mt-2">
          <span>
            <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="#000"
                d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61" />
            </svg>
          </span>
          <h1 class="text-[15px]">{{ currentChapter?.quiz.quiz_title_2 }}</h1>
          <h1 class="ml-auto mr-3 text-[15px]">
            {{ activeItem === 'quiz_2' ? displayTime : getDefaultTime('quiz_2') }} min
          </h1>

        </section>
      </div>
    </aside>

    <main class="w-[75%] h-screen relative bg-blue-200">
      <div class="sticky bg-purple-800 text-white mb-3 z-10 h-[80px] mt-[-12px]">
        <h1 class="indent-5 text-xl font-bold leading-[50px]">រៀនអំពី {{ currentCourse?.title }} programming</h1>
        <p class="indent-8 text-lg leading-[5px]">{{ currentChapter?.chapter_title }}</p>
      </div>

      <div class="overflow-y-auto px-4 scroll-smooth bg-blue-200 h-[400px]">
        <div v-if="isshowLessonVisible" class="pr-[10px] pl-[1px]">
          <div class="w-full rounded-md">
            <iframe class="w-full h-[300px]" :src="currentChapter?.lesson_1.vdo_url" frameborder="0"></iframe>
          </div>
          <div class="w-full bg-white h-full rounded-lg mb-5">
            <h1 class="text-lg font-bold indent-5 leading-[50px]">{{ currentChapter?.lesson_1.title }}</h1>
            <p class="indent-[30px] leading-[30px] text-center">{{ currentChapter?.lesson_1.discription }}</p>

          </div>

        </div>
        <div v-if="isshowLesson_2Visible" class="pr-[10px] pl-[1px]">
          <div class="w-full rounded-md">
            <iframe class="w-full h-[300px]" :src="currentChapter?.lesson_2.vdo_url" frameborder="0"></iframe>
          </div>
          <div class="w-full bg-white h-auto rounded-lg mb-3">
            <h1 class="text-lg font-bold indent-5 leading-[50px]">{{ currentChapter?.lesson_2.title }}</h1>
            <p class="indent-[30px] leading-[30px] text-center">{{ currentChapter?.lesson_2.discription }}</p>

          </div>

        </div>
        <!-- Combined Quiz Section for both Quiz 1 and Quiz 2 -->
        <section v-if="(isshowQuizVisible || isshowQuiz_2Visible) && !isQuizSubmitted" class="w-full h-[500px]">
          <div class="flex justify-between">
            <h1 class="text-lg font-bold">Quiz</h1>
            <p class="text-lg font-bold">

              {{ displayTime }} min

            </p>
          </div>

          <!-- Dynamic quiz questions based on activeItem -->
          <div class="indent-5" v-for="(quiz, index) in activeItem === 'quiz_1'
            ? currentChapter?.quiz.questionsAnswers
            : currentChapter?.quiz.questionsAnswers_quiz_2" :key="quiz.correct_ans + index">
            <div class="mt-3 h-auto shadow-lg bg-white p-2">
              <!-- Question Title and Score -->
              <div class="flex">
                <h1 class="text-lg font-bold">{{ quiz.title }}</h1>
                <p class="text-lg font-bold ">({{ quiz.score }}pt)</p>
              </div>

              <!-- Answer Choices -->
            <div v-for="(ans, ansIndex) in quiz.answers" :key="ansIndex">
  <label>
    <input
      class="w-[1.2rem] h-[1.2rem] mt-3"
      type="radio"
      :name="`quiz-${activeItem}-${index}`"
      :value="ans"
      v-model="quiz.selectedAnswer"
      @change="selectAnswer(index, ans)" 
    />
    {{ ans }}
  </label>
</div>


              <p v-if="missingAnswers[index]" class="text-red-600 font-bold mt-2">
                {{ missingAnswers[index] }}
              </p>
            </div>
          </div>

          <button @click="submitQuiz"
            class="bg-green-800 text-white px-10 py-3 ml-[85%] rounded-lg my-3 hover:bg-green-500">
            Submit
          </button>
        </section>


        <section v-if="isQuizSubmitted">
          <h2 class="text-lg font-bold text-center">Quiz Results</h2>
          <div class="mt-6">
            <div v-for="(quiz, index) in (activeItem === 'quiz_1'
              ? currentChapter?.quiz.questionsAnswers
              : currentChapter?.quiz.questionsAnswers_quiz_2)" :key="index">

              <div class="mt-3 h-auto shadow-lg bg-white p-5">
                <div class="flex">
                  <h1 class="text-lg font-bold">{{ quiz.title }}</h1>
                  <p class="text-lg font-bold ml-5">( {{ quiz.score }}pt)</p>
                </div>
                <div v-for="(ans, ansIndex) in quiz.answers" :key="ansIndex">
                  <label class="leading-10">
                    <span :class="{
                      'text-green-600': ans === quiz.correct_ans,
                      'text-red-600': ans === quiz.selectedAnswer && ans !== quiz.correct_ans
                    }">
                      {{ ans }}
                      <span v-if="ans === quiz.correct_ans">(Correct Answer)</span>
                      <span v-if="ans === quiz.selectedAnswer && ans !== quiz.correct_ans">(Your Answer)</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-green-700 w-full h-1/4 text-center text-white">
            <p class="text-lg font-bold mt-3">{{ resultMessage }}</p>
            <p class="text-lg font-bold mt-3">You got: {{ totalScore }} / {{ totalPossibleScore }} points</p>
            <p class="text-lg font-bold mt-3" v-if="quizResults.timeTaken">Time Taken: {{ quizResults.timeTaken }}</p>
              <p class="text-lg font-bold mt-3" v-if="quizResults.submittedAt">Submitted At: {{ quizResults.submittedAt }}</p>
          </div>
        </section>





      </div>
    </main>

  </section>
</template>

<script>
import { useCourses } from '@/stores/courses';
import { useQuizStore } from '@/stores/quizStore';

export default {
  data() {
    return {
      useCourses: useCourses(),
      courseId: this.$route.params.courseId,
      coursesDetails: [],
      courseDetailsChapter: [],
      isshowLessonVisible: true,
      isshowQuizVisible: false,
      isshowLesson_2Visible: false,
      isshowQuiz_2Visible: false,
      isQuizSubmitted: false,
      missingAnswers: {},
      totalScore: 0,
      remainingTime: "",
      timer: null,
      activeItem: null,
      quizStartTime: null,
      resultMessage: "",
      quizTimeStopped: false,
        userAnswers: [],
      quizResults: {
        timeTaken: null,
        submittedAt: null,
      }
    };
  },

  computed: {
    displayTime() {
      if (this.remainingTime !== "00:00") {
        return this.remainingTime;
      }
      return this.getDefaultTime(this.activeItem);
    },

    currentCourse() {
      return this.coursesDetails.find(course => course.id === this.courseId);
    },

    currentChapter() {
      return this.courseDetailsChapter[0] || null;
    },

    totalPossibleScore() {
      return this.currentChapter?.quiz?.questionsAnswers?.reduce((sum, quiz) => sum + (quiz.score || 0), 0) || 0;
    }
  },

  watch: {
    '$route.params.courseId'(newId) {
      this.courseId = newId;
      this.findChapterByCourseId();
    },
  },

  created() {
    this.coursesDetails = this.useCourses.getCoursesDetails;
    this.findChapterByCourseId();
  },

  mounted() {
    if (this.activeItem) {
      this.startCountdown(this.getDefaultTime(this.activeItem));
    }
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },

  methods: {
    findChapterByCourseId() {
      this.courseDetailsChapter = this.useCourses.getCourseDetailsChapter.filter(
        chapter => chapter.courseId === this.courseId
      );
    },

    showLesson() {
      this.setViewStates(true, false, false, false, "lesson_1");
    },

    showQuiz() {
      this.setViewStates(false, true, false, false, "quiz_1");
      this.quizStartTime = new Date();
    },

    showLesson_2() {
      this.setViewStates(false, false, true, false, "lesson_2");
    },

    showQuiz_2() {
      this.setViewStates(false, false, false, true, "quiz_2");
      this.quizStartTime = new Date();
    },

    setViewStates(lesson1, quiz1, lesson2, quiz2, item) {
      this.isshowLessonVisible = lesson1;
      this.isshowQuizVisible = quiz1;
      this.isshowLesson_2Visible = lesson2;
      this.isshowQuiz_2Visible = quiz2;
      this.isQuizSubmitted = false;
      this.activeItem = item;
      this.startCountdown(this.getDefaultTime(item));
    },

    getDefaultTime(item) {
      switch (item) {
        case "lesson_1":
          return this.currentChapter?.lesson_1.time || "00:00";
        case "quiz_1":
          return this.currentChapter?.quiz.time_quiz_1 || "00:00";
        case "lesson_2":
          return this.currentChapter?.lesson_2.time || "00:00";
        case "quiz_2":
          return this.currentChapter?.quiz.time_quiz_2 || "00:00";
        default:
          return "00:00";
      }
    },

    startCountdown(time) {
      clearInterval(this.timer);

      let [minutes, seconds] = time.split(":").map(Number);

      this.timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(this.timer);
          this.remainingTime = "00:00";
          return;
        }
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        this.remainingTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      }, 1000);
    },

    calculateTimeTaken(startTime, endTime) {
      const diffInSeconds = Math.floor((endTime - startTime) / 1000);
      const minutes = Math.floor(diffInSeconds / 60);
      const seconds = diffInSeconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },

   selectAnswer(questionIndex, selectedOption) {
    const question = this.activeItem === "quiz_1"
      ? this.currentChapter.quiz.questionsAnswers[questionIndex]
      : this.currentChapter.quiz.questionsAnswers_quiz_2[questionIndex];

    // Save selected answer inside question object (optional)
    question.selectedAnswer = selectedOption;

    // Check if this question already exists in userAnswers, update or add
    const existingIndex = this.userAnswers.findIndex(ans => ans.questionIndex === questionIndex);
    if (existingIndex >= 0) {
      this.userAnswers[existingIndex].selectedOption = selectedOption;
    } else {
      this.userAnswers.push({
        questionIndex,
        question: question.title,
        selectedOption,
        correctAnswer: question.correct_ans,
      });
    }
  },
submitQuiz() {
  this.totalScore = 0;
  this.missingAnswers = {};
  const endTime = new Date();

  // Set time taken
  this.quizResults.timeTaken = this.calculateTimeTaken(this.quizStartTime, endTime);
  this.quizResults.submittedAt = endTime.toLocaleString();

  // Determine quiz source
  const allQuestions = this.activeItem === "quiz_1"
    ? this.currentChapter?.quiz.questionsAnswers
    : this.currentChapter?.quiz.questionsAnswers_quiz_2;

  if (!allQuestions) {
    console.error("Quiz data is missing!");
    return;
  }

  // Check for unanswered questions
  allQuestions.forEach((quiz, index) => {
    if (!quiz.selectedAnswer) {
      this.missingAnswers[index] = "Please choose an answer!";
    }
  });

  if (Object.keys(this.missingAnswers).length > 0) return;

  // Stop timer
  clearInterval(this.timer);

  // Calculate score
  let totalPossibleScore = 0;
  allQuestions.forEach((quiz) => {
    if (quiz.selectedAnswer === quiz.correct_ans) {
      this.totalScore += quiz.score || 0;
    }
    totalPossibleScore += quiz.score || 0;
  });

  // Calculate result
  const percentage = totalPossibleScore > 0
    ? (this.totalScore / totalPossibleScore) * 100
    : 0;

  if (percentage === 100) {
    this.resultMessage = "🎉 Congratulations! You passed with a perfect score!";
  } else if (percentage >= 50) {
    this.resultMessage = "✅ Well done! You passed the quiz!";
  } else if (percentage >= 25) {
    this.resultMessage = " Good effort! Try again to improve your score.";
  } else {
    this.resultMessage = " Keep practicing! You'll do better next time!";
  }

  this.totalPossibleScore = totalPossibleScore;
  this.isQuizSubmitted = true;

  // Save to Pinia store
  const quizStore = useQuizStore();
  
  // Determine quiz title based on activeItem
  const quizTitle = this.activeItem === 'quiz_1' 
    ? this.currentChapter?.quiz.quiz_title_1 
    : this.currentChapter?.quiz.quiz_title_2;
  
  // Determine lesson title (if applicable)
  let lessonTitle = null;
  if (this.activeItem === 'quiz_1') {
    lessonTitle = this.currentChapter?.lesson_1?.title;
  } else if (this.activeItem === 'quiz_2') {
    lessonTitle = this.currentChapter?.lesson_2?.title;
  }

  quizStore.saveResult({
    courseId: this.courseId,
    courseTitle: this.currentCourse?.title,
    chapterTitle: this.currentChapter?.chapter_title,
    lessonTitle: lessonTitle,
    quizTitle: quizTitle,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    score: this.totalScore,
    totalPossibleScore: totalPossibleScore,
    timeTaken: this.quizResults.timeTaken,
    status: percentage >= 50 ? 'completed' : 'pending',
    percentage: Math.round(percentage),
     answers: this.userAnswers,
    
  });
}
  }
};
</script>
