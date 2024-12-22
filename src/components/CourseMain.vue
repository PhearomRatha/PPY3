<template>
  <div class="w-screen blue h-auto bg-white p-10">
    <h2 class="text-3xl font-bold mb-6">Course</h2>
    <section class="grid md:grid-cols-4 grid-cols-1 lg:grid-cols-4 gap-10">
      <article
        v-for="course in coursesDetails"
        :key="course.programming_lng"
        :class="course.bgColor"
        :id="course.id"
        class="p-5 rounded-md text-center"
      >
        <p class=" rounded-sm text-white bg-green-500 w-[55px] py-[2.5px] mt-[-15px] ml-[-15px]">free</p>
        <h3 class="text-2xl font-bold mb-2">{{ course.programming_lng }}</h3>

        <p class="mb-4 text-sm font-semibold">A programming language</p>
        <div class="grid grid-cols-2 w-40 gap-2 text-[8px] justify-center m-[10px_50px] text-center items-center">
          <div v-for="item in features" :key="item.text" class="flex items-center gap-2">
            <span v-html="item.icon" class="text-base"></span>
            <p>{{ item.text }}</p>
          </div>
        </div>

        <button class="bg-black text-white px-3 py-2 text-sm rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110">
          ចាប់ផ្តើមរៀន
        </button>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coursesDetails: [
        { id: "c", bgColor: "bg-blue-200", programming_lng: "C" },
        { id: "c++", bgColor: "bg-blue-400", programming_lng: "C++" },
        { id: "python", bgColor: "bg-yellow-200", programming_lng: "Python" },
        { id: "java", bgColor: "bg-red-300", programming_lng: "Java" },
        { id: "html", bgColor: "bg-[orange]", programming_lng: "HTML" },
        { id: "css", bgColor: "bg-blue-600", programming_lng: "CSS" },
        { id: "bootstrap", bgColor: "bg-[purple]", programming_lng: "Bootstrap" },
        { id: "vue", bgColor: "bg-blue-300", programming_lng: "Tailwind" },
        { id: "javascript", bgColor: "bg-yellow-400", programming_lng: "JavaScript" },
        { id: "react", bgColor: "bg-blue-400", programming_lng: "React" },
        { id: "vue", bgColor: "bg-green-700", programming_lng: "Vue.js" },
      ],
      features: [
        {
          text: "ជំពូក",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="#000" d="M10 3q1 0 2 .76Q13 3 14 3h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-7c0 .552-.45 1-1 1s-1-.45-1-1H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v13h7V6c0-.55-.45-1-1-1m10 0h-6c-.55 0-1 .45-1 1v12h7z" />
                  </g>
                </svg> `,
        },
        {
          text: "មេរៀន",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 24 24">
                  <path fill="#000" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-8h4v2h-6V7h2z" />
                </svg>`,
        },
        {
          text: "ប្រលង",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 48 48">
                  <g fill="#000">
                    <path d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" />
                    <path fill-rule="evenodd" d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 1v3h3v-3z" clip-rule="evenodd" />
                    <path d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z" />
                    <path fill-rule="evenodd" d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm28 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l-1-1.5V20h2v15.697z" clip-rule="evenodd" />
                  </g>
                </svg>`,
        },
        {
          text: "ឯកសារ",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 24 24">
                  <path fill="#000" d="M19.903 8.586a1 1 0 0 0-.196-.293l-6-6a1 1 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a1 1 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a1 1 0 0 0-.051-.259q-.014-.048-.033-.093M16.586 8H14V5.414zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10z" />
                  <path fill="#000" d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z" />
                </svg>`,
        },
      ],
    };
  },
};
</script>

<style>

</style>
