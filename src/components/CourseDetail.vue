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
          <!-- <h1 class="ml-auto mr-3 text-[15px]">{{remainingTime}}min</h1> -->
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
          <!-- <h1 class="ml-auto mr-3 text-[15px]">{{remainingTime}}min</h1> -->

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
          <!-- <h1 class="ml-auto mr-3 text-[15px]">{{remainingTime}}min</h1> -->
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


        <!-- Quiz Section (Visible Before Submission) -->
        <section v-if="isshowQuizVisible && !isQuizSubmitted" class="w-full h-[500px]">
          <div class="flex justify-between">
            <h1 class="text-lg font-bold">Quiz</h1>
            <p class="text-lg font-bold">
              {{ activeItem === 'quiz_1' ? displayTime : getDefaultTime('quiz_1') }} min
            </p>
          </div>

          <div class="indent-5" v-for="(quiz, index) in currentChapter?.quiz.questionsAnswers" :key="quiz.correct_ans">
            <div class="mt-3 h-auto shadow-lg bg-white p-2">

              <!-- Question Title and Score -->
              <div class="flex">
                <h1 class="text-lg font-bold">{{ quiz.title }}</h1>
                <p class="text-lg font-bold mt-3">{{ quiz.score }}pt</p>

              </div>




              <!-- Answer Choices -->
              <div v-for="(ans, ansIndex) in quiz.answers" :key="ansIndex">
                <label>
                  <input class="w-[1.2rem] h-[1.2rem] mt-3" type="radio" :name="`quiz-${index}`" :value="ans"
                    v-model="quiz.selectedAnswer" />
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

            <div v-for="(quiz, index) in currentChapter?.quiz.questionsAnswers" :key="index">
              <div class="mt-3 h-auto shadow-lg bg-white p-5">
                <div class="flex">
                  <h1 class="text-lg font-bold">{{ quiz.title }}</h1>
                  <p class="text-lg font-bold mt-3">{{ quiz.score }}pt</p>
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
          <div class="bg-green-700 w-full h-1/4 text-center  text-white">
            <p class="text-lg font-bold mt-3">{{ resultMessage }}</p>
            <p class="text-lg font-bold mt-3">Your Score: {{ totalScore }} / {{ totalPossibleScore }} points</p>
          </div>
        </section>
        <section v-if="isshowQuiz_2Visible" class="w-full h-[500px]">
          <div class="flex justify-between">
            <h1 class="text-lg font-bold">Quiz</h1>

            <!-- <p class="text-lg font-bold">{{ currentChapter?.quiz.time_quiz_2 }}</p> -->
            <p class="text-lg font-bold">{{ activeItem === 'quiz_2' ? displayTime : getDefaultTime('quiz_2') }}min</p>
          </div>
          <div class="indent-5" v-for="(quiz, index) in currentChapter?.quiz.questionsAnswers_quiz_2"
            :key="quiz.correct_ans">
            <div class="mt-3 h-auto shadow-lg bg-white p-2">
              <div class="flex">
                <h1 class="text-lg font-bold">{{ quiz.title }}</h1>
                <p class="text-lg font-bold mt-3">{{ quiz.score }}pt</p>
              </div>
              <div v-for="(ans, ansIndex) in quiz.answers" :key="ansIndex">
                <label>
                  <input class="w-[1.2rem] h-[1.2rem] mt-3" type="radio" :name="`quiz-${index}`" :value="ans"
                    v-model="quiz.selectedAnswer" />
                  {{ ans }}
                </label>
              </div>
            </div>
          </div>
          <button class="bg-green-800 text-white px-10 py-3 ml-[85%] rounded-lg my-3 hover:bg-green-500">Submit</button>
        </section>

      </div>
    </main>

  </section>
</template>

<script>
import { useCourses } from '@/stores/courses';

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
      totalPossibleScore: 0,
    };
  },
  computed: {
    totalPossibleScore() {
      return this.currentChapter?.quiz?.questionsAnswers.reduce((sum, quiz) => sum + (quiz.score || 0), 0);
    },
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
    showLesson() {
      this.isshowLessonVisible = true;
      this.isshowQuizVisible = false;
      this.isshowLesson_2Visible = false;
      this.isshowQuiz_2Visible = false;
      this.isQuizSubmitted = false;
      this.activeItem = "lesson_1";
      this.startCountdown(this.getDefaultTime("lesson_1"));
    },
    showQuiz() {
      this.isshowLessonVisible = false;
      this.isshowQuizVisible = true;
      this.isQuizSubmitted = false;
      this.isshowLesson_2Visible = false;
      this.isshowQuiz_2Visible = false;
      this.activeItem = "quiz_1";
      this.startCountdown(this.getDefaultTime("quiz_1"));
    },
    showLesson_2() {
      this.isshowLessonVisible = false;
      this.isshowQuizVisible = false;
      this.isQuizSubmitted = false;
      this.isshowLesson_2Visible = true;
      this.isshowQuiz_2Visible = false;
      this.activeItem = "lesson_2";
      this.startCountdown(this.getDefaultTime("lesson_2"));
    },
    showQuiz_2() {
      this.isshowLessonVisible = false;
      this.isshowQuizVisible = false;
      this.isshowLesson_2Visible = false;
      this.isshowQuiz_2Visible = true;
      this.activeItem = "quiz_2";
      this.isQuizSubmitted = false;
      this.startCountdown(this.getDefaultTime("quiz_2"));
    },
    findChapterByCourseId() {
      this.courseDetailsChapter = this.useCourses.getCourseDetailsChapter.filter(
        (chapter) => chapter.courseId === this.courseId
      );
    },

    submitQuiz() {

      this.totalScore = 0;
      this.missingAnswers = {};
      let totalPossibleScore = 0;

      if (!this.currentChapter?.quiz.questionsAnswers) {
        console.error("Quiz data is missing!");
        return;
      }

      this.currentChapter.quiz.questionsAnswers.forEach((quiz, index) => {
        if (!quiz.selectedAnswer) {
          this.missingAnswers[index] = "Please choose an answer!";
        } else {
          delete this.missingAnswers[index];
          if (quiz.selectedAnswer === quiz.correct_ans) {
            this.totalScore += quiz.score;
          }
          totalPossibleScore += quiz.score;
        }
      });

      this.totalPossibleScore = totalPossibleScore;


      const percentage = (this.totalScore / totalPossibleScore) * 100;
      console.log(percentage);


      if (percentage === 100) {
        this.resultMessage = "Congratulations! 🎉 Finally, you passed it! Well done!";
      } else if (percentage >= 50) {
        this.resultMessage = "Keep going, dear! You're doing great!";
      } else if (percentage >= 25) {
        this.resultMessage = "That's okay! Try again next time!  You can do it!";
      } else {
        this.resultMessage = "Don't give up! Keep trying!  You'll get it soon!";
      }

      if (Object.keys(this.missingAnswers).length > 0) {
        return;
      }

      this.isQuizSubmitted = true;
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
        this.remainingTime = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      }, 1000);
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
  },



  computed: {
    currentCourse() {
      return this.coursesDetails.find((course) => course.id === this.courseId);
    },
    currentChapter() {
      return this.courseDetailsChapter[0] || null;
    },
    displayTime() {

      if (this.activeItem) {
        return this.remainingTime;
      } else {
        return this.getDefaultTime(this.activeItem);
      }
    },
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
};
</script>