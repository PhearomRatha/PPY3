<script>
import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue'

export default {
  components: {
    NavBar,
    FooterPage  
  },
  data(){
    return{
      currentRoute:this.$route.path
    }
  },
  computed:{
    isIncludedSignInUpAboutus(){
      return ['/sing_up', '/sing_in', '/about_us','/detail_course'].some(route => this.currentRoute.toLowerCase().includes(route));
    }
  },

  watch:{
    '$route'(to, from){
      this.currentRoute = to.fullPath;
    }
  }

};
</script>

<template>
  <NavBar/>
  <main>
    <router-view/>
  </main>
  <FooterPage v-if="!isIncludedSignInUpAboutus"/>
</template>

<style>
body {
  font-family: "Battambang", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;

  
}



</style>
