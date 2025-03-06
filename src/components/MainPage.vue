<script>
export default {
  emits: ["word-captured"], 
  data() {
    return {
      words: ["HTML", "CSS", "JAVASCRIPT", "Vue.js", "React", "PYTHON", "JAVA", "C", "C++", "BOOTSTRAP"],
      currentWordIndex: 0,
      currentLetterIndex: 0,
      displayWord: "",
    };
  },
  methods: {
    startWordCycle() {
      setInterval(() => {
        const currentWord = this.words[this.currentWordIndex];
        if (this.currentLetterIndex < currentWord.length) {
          this.displayWord += currentWord[this.currentLetterIndex];
          this.currentLetterIndex++;
          // Emit the current displayWord to App.vue
          this.$emit("word-captured", this.displayWord);
          // console.log("Emitted word:",this.words);

        } else {
          this.displayWord = "";
          this.currentLetterIndex = 0;
          this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        }
      }, 500);
    },
  },
  mounted() {
    this.startWordCycle(); 
  },
};
</script>

<template>
  <div class="homepage relative z-[-999] w-screen h-screen ">
    <a href="#" class="relative">
      <img src="../assets/HomePage.png" alt="Homepage" class="w-full h-[37rem]" />
    </a>
    <section class="absolute top-[18%] left-[30%] text-6xl space-x-[1rem]">
      <div class="w-[70%] h-[5rem]">
        <p class="text-white">Learn</p>
        <div class="indent-[12rem] mt-[-2.2rem] text-5xl text-green-700">
          <p class="">code</p>
          <p class="indent-[20rem] mt-[-2.6rem] text-4xl">{{ displayWord }}</p>
        </div>
      </div>
      <p class="text-lg mt-[10px] text-gray-500">WITH THE WORLD'S LARGEST WEB DEVELOPER SITE</p>
    </section>
    <section class="absolute top-[40%] left-[35%] flex items-center mt-[-3rem]">
      <!-- Input Field -->
     <div class="flex flex-wrap ">
      <input
        class="py-[3px] px-12 rounded-t-3xl rounded-l-3xl rounded-b-3xl border-r-2 border-gray-300 outline-none"
        type="text"
        placeholder="Search..."
      />
 
      <div class="bg-green-800 flex items-center justify-end py-2 px-3 rounded-r-3xl ml-[-25px]">
        <!-- Search Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <circle cx="10" cy="10" r="7" />
            <path d="m15 15l6 6" />
          </g>
        </svg>
      </div>
     
     </div>
     <p class="mt-[8rem] text-lg ml-[-20rem] text-gray-300">Not sure where to begin ?</p>
    </section>
  </div>
</template>

<style >
.homepage img {
  object-fit: cover;
}
</style>
