<template>
  <section class="w-screen flex fixed">

    <aside class="w-[25%] ml-2 h-screen sticky top-0 overflow-y-auto scroll-smooth">

      <div class=" rounded-lg py-[10px] shadow-lg mt-10">
        <h2 clas="font-bold p-5 bg-green-800 text-lg font-bold indent-5 text-red-500">ជំពូក</h2>
        <div class="bg-green-800 rounded-lg py-[10px] mr-5 flex items-center gap-5 mt-5">
          <span>
            <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="#000"
                d="M202.24 74C166.11 56.75  115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61" />
            </svg>
          </span>
          <h3>{{ courseDetailsChapter[0].chapter_title }}</h3>
        </div>
        <section @click="showLesson" :class="{ 'border-2 border-red-500': isshowLessonVisible }"
          class="mt-2 bg-blue-200 rounded-lg mr-3 h-[45px] flex items-center gap-5">
          <span>
            <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="#000"
                d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61" />
            </svg>
          </span>
          <h1 class="cursor-pointer text-[13px]">{{ courseDetailsChapter[0].lesson_1.title }}</h1>
          <h1 class="ml-auto mr-3 text-[15px]">{{ courseDetailsChapter[0].lesson_1.time }}</h1>
        </section>
        <section @click="showQuiz" :class="{ 'border-2 border-red-500': isshowQuizVisible }"
          class=" mr-4 bg-yellow-200 rounded-lg h-[45px] flex items-center gap-5 mt-2">
          <span>
            <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
              <path fill="#000"
                d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61" />
            </svg>
          </span>
          <h1 class="text-[15px]">{{ courseDetailsChapter[0].quiz.quiz_title }}</h1>
          <h1 class="ml-auto mr-3 text-[15px]">{{ courseDetailsChapter[0].quiz.time }}</h1>
        </section>
      </div>
    </aside>


    <main class="w-[75%] h-screen relative bg-blue-200">

      <div class="sticky  bg-purple-800 text-white mb-3  z-10 h-[80px] mt-[-12px] ">
        <h1 class="indent-5 text-xl font-bold leading-[50px] ">រៀនអំពី {{ courseDetailsChapter[0].courseId }}
          programming</h1>
        <p class="indent-8 text-lg leading-[5px]">{{ courseDetailsChapter[0].chapter_title }}</p>
      </div>


      <div class="overflow-y-auto  px-4 scroll-smooth  bg-blue-200 h-[400px] ">
        <div v-if="isshowLessonVisible" class="pr-[10px] pl-[1px]">
          <div class="w-full rounded-md">
            <iframe class="w-full h-[300px]" :src="courseDetailsChapter[0].lesson_1.vdo_url" frameborder="0"></iframe>
          </div>
          <div class="w-full bg-white h-auto rounded-lg mb-3">
            <h1 class="text-lg font-bold indent-5 leading-[50px]">{{ courseDetailsChapter[0].lesson_1.title }}</h1>
            <p class="indent-[30px] leading-[30px] text-center">{{ courseDetailsChapter[0].lesson_1.discription }}</p>
          </div>
        </div>

        <section v-if="isshowQuizVisible" class="w-full h-[500px]">
          <div class="flex justify-between">
            <h1 class="text-lg font-bold">Quiz</h1>
            <p class="text-lg font-bold">{{ courseDetailsChapter[0].quiz.time }}</p>
          </div>
          <div class="indent-5" v-for="(quiz, index) in courseDetailsChapter[0].quiz.questionsAnswers"
            :key="quiz.correct_ans">
            <div class="mt-3 h-auto shadow-lg bg-white p-2">
              <div class=" flex">
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
          <button
            class="bg-green-800 text-white px-10 py-3 ml-[85%] rounded-lg my-3 hover:bg-green-500 ">Submit</button>
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


    }
  },
  methods: {
    showLesson() {
      this.isshowLessonVisible = true;
      this.isshowQuizVisible = false;
    },
    showQuiz() {
      this.isshowLessonVisible = false;
      this.isshowQuizVisible = true;
    },
    findChapterByCourseId() {
      this.courseDetailsChapter = this.useCourses.getCourseDetailsChapter.filter(
        (chapter) => chapter.courseId === this.courseId);
      console.log(this.courseDetailsChapter);
    }




  },

  watch: {
    '$route.params.courseId'(newId) {
      this.courseId = newId;
      this.findChapterByCourseId();
      console.log('hi', this.courseId);
    }

  },

  computed: {
    filterdData() {
      return this.coursesDetails.filter((course) => {
        return course.id === this.courseId;

      });
      console.log('hjjjjjj', filtered);
      return filtered;
      
    }
  },
  created() {
    this.coursesDetails = this.useCourses.getCoursesDetails;
    this.courseDetailsChapter = this.useCourses.getCourseDetailsChapter;
    console.log('hi', this.courseDetailsChapter);
  }

}
</script>

<style scoped></style>