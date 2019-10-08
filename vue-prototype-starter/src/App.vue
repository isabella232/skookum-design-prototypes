<template>
  <div class="container" v-bind:class="{ 'nav-active': navOpen, 'home-page': isHome }">
    <Navbar></Navbar>
    <transition name="router-anim" enter-active-class="pageIn" leave-active-class="pageOut" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import DataImport from "@/components/DataImport";
import EventBus from '@/event-bus';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  extends: DataImport,
  components: {
    Navbar,
    Footer
  },
  data(){
    return  {
      navOpen: false,
      isHome: false
    }
  },
  created() {
    EventBus.$on('navToggle', (data) => {
      this.navOpen = data;
    })
    EventBus.$on('navOpen', (data) => {
      this.navOpen = data;
    })
    EventBus.$on('navClose', (data) => {
      this.navOpen = data;
    })
    EventBus.$on('homeCheck', (data) => {
      this.isHome = data;
    })
  }
};
</script>