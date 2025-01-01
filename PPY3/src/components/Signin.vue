<template>
    <div class=" w-screen h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
     <div class="w-[680px] h-[470px] bg-white relative top-[20px] m-auto rounded-lg flex">
  
         <div class="  w-[50%] my-auto h-auto flex flex-col  items-center">
           <h1 :class="{ 'translate-x-0': !isclick}"
           class=" text-[30px] font-custom font-bold">Sign in</h1>
           <div class="w-[200px] flex items-center gap-3 mt-5 ">
             <a href="#" class="w-[40px] h-[40px] flex items-center justify-center border-solid border-gray-300 rounded-lg border-x-[1px] border-y-[1px] "><i class="fa-brands fa-google-plus-g"></i></a>
             <a href="#" class="w-[40px] h-[40px] flex items-center justify-center border-solid border-gray-300 rounded-lg border-x-[1px] border-y-[1px] "><i class="fa-brands fa-facebook-f"></i></a>
             <a href="#" class="w-[40px] h-[40px] flex items-center justify-center border-solid border-gray-300 rounded-lg border-x-[1px] border-y-[1px] "><i class="fa-brands fa-github"></i></a>
             <a href="#" class="w-[40px] h-[40px] flex items-center justify-center border-solid border-gray-300 rounded-lg border-x-[1px] border-y-[1px] "><i class="fa-brands fa-linkedin-in"></i></a>
           </div>
           <form class=" w-full p-4 flex flex-col items-center gap-3  " @submit.prevent="handleLogin" action="">
             <h1 class=" font-custom text-[12px]">or use your email password</h1>
             <input v-model="email" class=" w-full py-[10px] px-[15px] rounded-[8px]  outline-none bg-[#eee]" placeholder="Email" type="Email" name="email">
             <input v-model="password" class=" w-full py-[10px] px-[15px] rounded-[8px]  outline-none bg-[#eee]" placeholder="Password" type="text" name="password">
             <p>Forget Your Password?</p>
             <button :disabled="isSubmitting" class=" font-custom text-white bg-[#512DA8] py-[10px] px-[15px] rounded-lg">Sign IN</button>
           </form>
  
         </div>
         <div :class="{ 'translate-x-0': !isclick}"  class="w-[50%]  h-[100%] bg-gradient-to-tr from-[#5C69BF] to-[#574EB5] translate-x-0 rounded-l-[100px] flex content-center justify-between transition-all delay-[0.6s] ease-in-out">
         <div class="w-full  my-auto mx-0  h-[300px] text-center text-white p-3">
           <h1 class=" text-[30px] font-bold m-2 font-custom">Hello, Friend!</h1>
           <p class=" text-[15px] m-2 font-custom">Register with your personal details to use all of site features</p>
           <button 
           @click="Getemit"class="py-2 px-5 border-solid border-x-[1px] border-y-[1px] font-custom rounded-[10px] mt-4">SIGN UP</button>
         </div>
         </div>
       </div>
     </div>
   </template>
   
   <script>
import axios from 'axios';
   export default {
     data() {
       return {
        Data:[],
        isSubmitting: false,
        name:"",
         email: "",
         password: "",
         passwordVisible: false,
         isclick: false,
         errorpassword:"",

       };
     },
     mounted(){
      this.GetData();
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
       Getemit(){
         this.$emit('IsSignin')
       },
       handleLogin() {
        const userfillter = this.Data.find(e=>e.email == this.email )
        if(this.email && this.password){
          if(userfillter && this.password == userfillter.password){
          alert("Account sign in success")
          
          this.$emit('LogSuccess',userfillter.name)
        }
        }
        
         if (!this.username && !this.password) {
           alert(`Logging in with username: ${this.username}`);
           
         } else {
           alert("Please fill out all fields.");
         }
       },
    async GetData(){
    const { data } = await axios("/apiv1/Users")
    this.Data = data
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
  