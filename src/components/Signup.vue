<template>
   <div class=" w-screen h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
    <div class="w-[680px] h-[470px] bg-white relative top-[20px] m-auto rounded-lg flex">
      <div :class="{ 'translate-x-0': !isclick}"  class="w-[50%]  h-[100%] bg-gradient-to-tr from-[#5C69BF] to-[#574EB5] translate-x-0    rounded-r-[100px] flex content-center justify-between transition-all delay-[0.6s] ease-in-out">
        <div class="w-full  my-auto mx-0  h-[300px] text-center text-white p-3">
          <h1 class=" text-[30px] font-bold m-2 font-custom">Wellcome Back!</h1>
          <p class=" text-[15px] m-2 font-custom">Enter your details to use all of site features</p>
          <button 
           @click="navigationToOtherPage('sing_in')" class="py-2 px-5 border-solid border-x-[1px] border-y-[1px] font-custom rounded-[10px] mt-4">SIGN IN</button>
        </div>
      

        </div>
        <div class="  w-[50%] my-auto h-auto flex flex-col  items-center">
          <h1 class=" text-[30px] font-custom font-bold">Create Account</h1>
          <div class="w-[200px] flex items-center gap-3 mt-5 ">
            <a href="#" class="w-[40px] h-[40px] flex items-center justify-center border-solid border-gray-300 rounded-lg border-x-[1px] border-y-[1px] "><i class="fa-brands fa-google-plus-g"></i></a>
            <a href="#" class="w-[40px] h-[40px] flex items-center justify-center border-solid border-gray-300 rounded-lg border-x-[1px] border-y-[1px] "><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="w-[40px] h-[40px] flex items-center justify-center border-solid border-gray-300 rounded-lg border-x-[1px] border-y-[1px] "><i class="fa-brands fa-github"></i></a>
            <a href="#" class="w-[40px] h-[40px] flex items-center justify-center border-solid border-gray-300 rounded-lg border-x-[1px] border-y-[1px] "><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <form class=" w-full p-4 flex flex-col items-center gap-3  " action="">
            <h1 class=" font-custom text-[12px]">Or use your email for registeration</h1>
            <input class=" w-full py-[10px] px-[15px] rounded-[8px]  outline-none bg-[#eee]" placeholder="Name" type="text">
            <input class=" w-full py-[10px] px-[15px] rounded-[8px]  outline-none bg-[#eee]" placeholder="Email" type="Email">
            <input class=" w-full py-[10px] px-[15px] rounded-[8px]  outline-none bg-[#eee]" placeholder="Password" type="password">
            <input class=" w-full py-[10px] px-[15px] rounded-[8px]  outline-none bg-[#eee]" placeholder="Comfirm Password" type="password">
            <button class=" font-custom text-white bg-[#512DA8] py-[10px] px-[15px] rounded-lg">Sign up</button>
          </form>

        </div>
      </div>
    </div>
  </template>
  
  <script>


  export default {
    data() {
      return {
        username: "",
        password: "",
        passwordVisible: false,
        isclick: false
      };
    },
    methods: {
      navigationToOtherPage(routerName){
      this.$router.push(`/${routerName}`)
    },
      handleclick(){
        return this.isclick = !this.isclick
      },
      togglePassword() {
        this.passwordVisible = !this.passwordVisible;
      },
      handleLogin() {
        if (this.username && this.password) {
          alert(`Logging in with username: ${this.username}`);
          // Add your login logic here
        } else {
          alert("Please fill out all fields.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  input:focus {
    outline: none;
  }
.active {
  transform: translateX(100%);
}
.notactivate {
  transform: translateX(0);

}
  </style>
  