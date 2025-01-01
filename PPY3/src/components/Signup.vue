<template>
  <div class="w-screen h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
    <div class="w-[680px] h-[470px] bg-white relative top-[20px] m-auto rounded-lg flex">
      <div 
        :class="{ 'translate-x-0': !isclick }"
        class="w-[50%] h-[100%] bg-gradient-to-tr from-[#5C69BF] to-[#574EB5] rounded-r-[100px] flex content-center justify-between transition-all delay-[0.6s] ease-in-out"
      >
        <div class="w-full my-auto mx-0 h-[300px] text-center text-white p-3">
          <h1 class="text-[30px] font-bold m-2 font-custom">Welcome Back!</h1>
          <p class="text-[15px] m-2 font-custom">Enter your details to use all of the site features</p>
          <button 
            @click="ProvideEmait" 
            class="py-2 px-5 border-solid border-x-[1px] border-y-[1px] font-custom rounded-[10px] mt-4"
          >
            SIGN IN
          </button>
        </div>
      </div>
      <div class="w-[50%] my-auto h-auto flex flex-col items-center">
        <h1 class="text-[30px] font-custom font-bold">Create Account</h1>
        <form class="w-full p-4 flex flex-col items-center gap-3" @submit.prevent="handleSignup">
          <h1 class="font-custom text-[12px]">Or use your email for registration</h1>
          
          <!-- Name input -->
          <input 
            class="w-full py-[10px] px-[15px] rounded-[8px] outline-none bg-[#eee]" 
            placeholder="Name" 
            type="text"
            name="name" 
            v-model="name"
          >
          <span v-if="nameError" class="text-red-500 text-[12px] w-full text-start">{{ nameError }}</span>
          
          <!-- Email input -->
          <input 
            class="w-full py-[10px] px-[15px] rounded-[8px] outline-none bg-[#eee]" 
            placeholder="Email" 
            type="email" 
            name="email"
            v-model="email"
          >
          <span v-if="emailError" class="text-red-500 text-[12px] w-full text-start">{{ emailError }}</span>

          <!-- Password input -->
          <input 
            class="w-full py-[10px] px-[15px] rounded-[8px] outline-none bg-[#eee]" 
            placeholder="Password" 
            type="text" 
            name="password"
            v-model="password"
          >
          <span v-if="passwordError" class="text-red-500 text-[12px] w-full text-start">{{ passwordError }}</span>

          <!-- Confirm password input -->
          <input 
            class="w-full py-[10px] px-[15px] rounded-[8px] outline-none bg-[#eee]" 
            placeholder="Confirm Password" 
            type="text" 
            name="password"
            v-model="confirmPassword"
          >
          <span v-if="confirmPasswordError" class="text-red-500 text-[12px]">{{ confirmPasswordError }}</span>
          <span v-if="islogin" class="text-red-500 text-[12px]">{{ islogin }}</span>
          
          <button 
            class="font-custom text-white bg-[#512DA8] py-[10px] px-[15px] rounded-lg" 
            :disabled="isSubmitting"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { provide } from 'vue';

export default {

  data() {
    return {
      Data: [],
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      isclick: false,
      isSubmitting: false,
      nameError: "",
      emailError: "",
      passwordError: "",
      islogin:"",
      confirmPasswordError: ""
    };
  },
  mounted() {
    // Call the imported fetchData function when the component is mounted
    this.GetData();
  },
  methods: {
    navigationToOtherPage(routerName) {
    this.$router.push(`/${routerName}`)
  },
 handleSignup() {
  console.log(this.Data)
    const fillerData = this.Data.find(e =>e.name == this.name);
    if(!this.name){
      this.nameError = "require name"
    }
    if(!this.email){
      this.emailError = "require email"
    }
    if(!this.password){
      this.passwordError = "require password"
    }
    if(this.password !== this.confirmPassword ){
      this.confirmPasswordError = "password is not match"
    }
    if(this.name && this.email && this.password && this.confirmPassword){
      if(!fillerData){
        this.CreateData(this.name ,this.email , this.password)
      }else{
        this.islogin = "account is aready created"
        console.log("account is aready created ")
      }
    }
  },
  async GetData(){
    const { data } = await axios("/apiv1/Users")
    this.Data = data
  },
  ProvideEmait(){
    this.$emit('IsSignup')
  },
  async CreateData(NameUser, EmailUser, PasswordUser) {
    try {
        const res = await axios.post('/apiv1/Users', {
            name: NameUser,
            email: EmailUser,
            password: PasswordUser
        });
        this.navigationToOtherPage("sing_in");
        console.log('Response:', res.data);
    } catch (error) {
        console.error('Error creating data:', error.response?.data || error.message);
    }
}

  
},

};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

input:focus {
  outline: none;
  border: 2px solid #512DA8; 
  box-shadow: 0 0 5px rgba(81, 45, 168, 0.5); 
}

button:disabled {
  background-color: #a1a1a1;
  cursor: not-allowed;
}
</style>
