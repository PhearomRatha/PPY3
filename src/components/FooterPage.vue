<template>
  <footer class="w-screen">
    <div class="relative flex flex-col h-full">

      <img src="../assets/Footer.png" alt="Footer" class="w-full">

   
    <div class="absolute w-full h-full">
        <div class="flex-grow flex h-[85%] ">
    
        <div class="flex flex-col w-1/4">
            <div class="w-[20%] h-[30%] mt-3 transition-transform duration-300 ease-in-out hover:scale-125">
            <img src="../assets/alin1.png" alt="Image 1" class="w-full h-full " />
            </div>

          <div class="w-[40%] h-[25%] ml-[180px]  transition-transform duration-300 ease-in-out hover:scale-110">
            <img src="../assets/Logo.png" alt="Logo" class="w-full h-full" />
          </div>
        </div>

        <div class=" flex-grow">

            <div class="w-full h-[20%]  flex gap-1 ml-5 mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"
                    class="transition-transform duration-300 ease-in-out hover:scale-150">
                 
                    <path fill="#000" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"
                    class="transition-transform duration-300 ease-in-out hover:scale-150">
                  
                    <path fill="#000" d="M6.03 2a1 1 0 0 1 .919.684L8.72 8h6.558l1.772-5.316a1 1 0 0 1 1.877-.055l2.898 7.244a5 5 0 0 1-1.519 5.762L13.25 21.28a2 2 0 0 1-2.498 0l-7.058-5.646a5 5 0 0 1-1.52-5.762L5.073 2.63A1 1 0 0 1 6.029 2Zm-.115 3.906l-1.884 4.71a3 3 0 0 0 .91 3.457L12 19.719l7.058-5.646a3 3 0 0 0 .911-3.457l-1.884-4.71l-1.136 3.41A1 1 0 0 1 16 10H8a1 1 0 0 1-.949-.684z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"
                    class="transition-transform duration-300 ease-in-out hover:scale-150">
                  
                    <path fill="#000" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"
                    class="transition-transform duration-300 ease-in-out hover:scale-150">
                  
                    <path fill="#000" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                </svg>
                
            </div>

            <div class="border-l-[1.5px] border-black h-[30%] text-lg indent-5">
                <p>zcode.cam ត្រូវបានធ្វើឱ្យប្រសើរឡើងសម្រាប់ការរៀន និងការបណ្តុះបណ្តាល​</p>
                <p>ទៅលើជំនាញcoding​។ Thank you guy enjoy your learning</p>
            </div>

         
        </div>

     
        <div class=" w-1/4">
            <div class="w-[25%] h-[25%]  ml-[230px] transition-transform duration-300 ease-in-out hover:scale-125"><img src="../assets/alin2.png" alt=""></div>
            <div class="w-[50%] h-[50%] ml-[100px] transition-transform duration-300 ease-in-out hover:scale-125"><img src="../assets/alin2.png" alt=""></div>
         
        </div>
      </div>

      <!-- Bottom section (30% height) -->
      <div class="h-[15%] w-full border-t-[1.5px] border-black text-center">
        <p class="mt-3">©2024 Copyright by Refsnes Data. All Rights Reserved</p>

     
      </div>
    </div>
    </div>


  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: this.$route.path,
    };
  },
};
</script>
