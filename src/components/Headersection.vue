<template>
 
  <nav class=" w-screen bg-white flex justify-between items-center  flex-wrap">
    <ul class="w-full flex justify-between content-center   text-black font-extrabold shadow-sm h-[100%]">
      <div class="flex gap-10">
      <!-- Logo Section -->
      <li class="">
        <img @click="navigationToOtherPage('')" class=" w-[100px] ml-1 mt-4 " src="@/assets/Logo.png" alt="Logo" />
      </li>

      <!-- Dropdown Section -->
      <li class=" p-2  flex  font-lg text-lg relative cursor-pointer">
        <p
          href="#"
          class="flex items-center"
          ref="dropdownLink"
          @click="toggleDropdown"
        >
          វគ្គសិក្សា
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path fill="#000" d="m12 15l5-5H7z" />
          </svg>
        </p>
        <!-- Dropdown Menu -->
        <div
          v-show="isDropdownVisible"
          ref="dropdownMenu"
          class="dropdown-menu w-full  h-auto gap-5 left-[45px] bg-white top-[14px] text-black text-center flex-wrap  shadow-lg"
        >
          <a href="#" class="text-center m-auto">វគ្គសិក្សាទាំងអស់</a>
          <a href="#c" class="w-[10%] h-20 bg-blue-200">C</a>
          <a href="#c++" class="w-[10%] h-20 bg-blue-400">C++</a>
          <a href="#python" class="w-[10%] h-20 bg-yellow-200">Python</a>
          <a href="#java" class="w-[10%] h-20 bg-red-300">Java</a>
          <a href="#html" class="w-[10%] h-20 bg-[orange]">HTML</a>
          <a href="#css" class="w-[10%] h-20 bg-blue-600">CSS</a>
          <a href="#boostrap" class="w-[10%] h-20 bg-[purple]">Bootstrap</a>
          <a href="#javascript" class="w-[10%] h-20 bg-yellow-400">JavaScript</a>
          <a href="#tailwind" class="w-[10%] h-20 bg-blue-300">Tailwind</a>
          <a href="#vue" class="w-[10%] h-20 bg-blue-400">Vue.js</a>
          <a href="#react" class="w-[10%] h-20 bg-green-700">React.js</a>
        </div>
      </li>

      <!-- About Us Section -->
      <li class="  p-2 font-lg text-lg  flex ">
        <p @click="navigationToOtherPage('about_us')" class="text-black cursor-pointer flex items-center">អំពីពួកយើង</p>
      </li>
      </div>
      <!-- Sign In and Sign Up Section -->
      <div v-if="!login_success"  class=' flex items-center w-[15em] h-[3rem] border-black text-white mt-4'>
        <li @click="handleLogin " class="self-center flex items-center justify-center rounded-3xl ps-2 bg-green-700 absolute w-[8rem] h-[2.5rem] cursor-pointer">
          <p>Sign up</p>
        </li>
        <li @click="handleSignin" class="self-center flex items-center justify-center text-black ps-[6rem] rounded-3xl bg-green-400 w-[14rem] h-[2.5rem] border-t border-r border-b border-black cursor-pointer">
          <p >Sign in</p>
        </li>
      </div>
      <div v-if="login_success"  class=" bg-gray-500 w-[150px] h-[50px] mr-4 m-1 overflow-hidden flex items-center justify-between rounded-full "><span v-if="name" class=" p-4 " >{{ name }}</span> <img class=" w-[50px] h-[50px] rounded-full object-cover" src="../assets/profilesample.jpeg" alt=""></div>
    </ul>
  </nav>
  <Signin @LogSuccess="LoginSuccess" @IsSignin="handleLogin" v-if="issign_in"  ></Signin>
   <Signup @IsSignup="handleSignin"  v-if="islogin" ></Signup>
   <!-- <DisplayUser></DisplayUser> -->
  
</template>

<script>
import Signin from './Signin.vue';
import Signup from './Signup.vue';
import DisplayUser from'./DisplayUser.vue'
export default {
  components: {
    Signin,
    Signup,
    DisplayUser,

    
  },
  data() {
    return {
      name:"",
      isDropdownVisible: false,
      isAboutUsVisible: false,
      isSignupVisible:false,
      issign_in: false,
      islogin: false,
      login_success: false,
    };
  },

  methods: {
    navigationToOtherPage(routerName){
      this.issign_in = false
      this.islogin = false
      this.$router.push(`/${routerName}`)
    },
    Getdata(data){
      console.log(data)
    },
    toggleDropdown(event) {
      event.stopPropagation();
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    handleLogin(){
      if(!this.islogin){
        this.islogin = !this.islogin
        this.issign_in = false
      }else{
        this.islogin = !this.islogin
      }
    },
    handleSignin(){
      if(!this.issign_in ){
        this.issign_in = !this.issign_in
        this.islogin = false
      }else{
        this.issign_in = !this.issign_in
      }
    },
    LoginSuccess(data){
      this.name = data
      this.issign_in = false
      this.islogin = false
      this.login_success = !this.login_success
    },
    closeDropdown(event) {
      const dropdownMenu = this.$refs.dropdownMenu;
      const dropdownLink = this.$refs.dropdownLink;

      if (
        dropdownMenu &&
        !dropdownMenu.contains(event.target) &&
        dropdownLink !== event.target &&
        !dropdownLink.contains(event.target)
      ) {
        this.isDropdownVisible = false;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.closeDropdown);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdown); 
  },
};
</script>

<style scoped>
body {
  font-family: "Battambang", sans-serif;
}

/* Dropdown menu styling */
.dropdown-menu {
  display: flex;
  position: absolute;
  padding: 10px;
  margin: 50px 0 0 -190px;
  width: 80.15rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-menu a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.about-us-container {
  position: absolute;
  top: 5rem; 
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}



</style>
