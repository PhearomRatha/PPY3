<template>
  <div class="w-screen blue h-auto bg-white p-10">
    <h2 class="text-3xl font-bold mb-6">វគ្គសិក្សា</h2>
    
    <section class="grid md:grid-cols-4 grid-cols-1 lg:grid-cols-4 gap-10">
      <article
        v-for="course in coursesDetails"
        :key="course.id"
        :class="course.bgColor"
        :id="course.id"
        class="p-5 rounded-md text-center"
      >
        <p class=" rounded-sm text-white bg-green-500 w-[55px] py-[2.5px] mt-[-15px] ml-[-15px]">free</p>
        <h3 class="text-2xl font-bold mb-2">{{ course.programming_lng }}</h3>

        <p class="mb-4 text-sm font-semibold">A programming language</p>
        <div class="flex flex-wrap w-40  text-[8px] gap-2 m-[10px_50px] text-center items-center">
          <div v-for="(feature, index) in features" :key="feature.text" class="flex items-center font-bold ">
            <span v-html="feature.icon" class="text-base"></span>
            <p> {{ course.featureCounts[index] }} {{ feature.text }}</p>
          </div>
        </div>

        <button @click="$router.push(`/detail_course/${course.id}`)" class="bg-black cursor-pointer text-white px-3 py-2 text-sm rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
          >
          ចាប់ផ្តើមរៀន
        </button>
      </article>
    </section>
  </div>
</template>

<script>
import { useCourses } from '@/stores/courses';

export default {
  data() {
    return {
      useCourses: useCourses(),
      coursesDetails: [],
      features: []
    };
  },
  methods: {
    
      updateFeatureCounts() {
    this.coursesDetails = this.coursesDetails.map(course => {
      const courseContent = this.useCourses.getCourseDetailsChapter.filter(
        content => content.courseId === course.id
      );

      const chapterCount = courseContent.length;
      let lessonCount = 0;
      let quizCount = 0;
      
      courseContent.forEach(chapter => {
    
        if (chapter.lesson_1) lessonCount++;
        if (chapter.lesson_2) lessonCount++;  
        if (chapter.quiz.quiz_title_1) quizCount++;
        if (chapter.quiz.quiz_title_2) quizCount++;  
      });

      course.featureCounts = [chapterCount, lessonCount, quizCount, 0];
      return course;
    });
  }
  },
  
  created() {
    this.coursesDetails = this.useCourses.getCoursesDetails;
    this.features = this.useCourses.getFeatures;
    this.updateFeatureCounts();
  }
};
</script>