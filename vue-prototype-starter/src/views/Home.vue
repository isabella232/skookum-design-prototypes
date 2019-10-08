<template>
  <main class="home">
    <div v-for="item in items" :key="item.id">
      <h1>{{ item.h1 }}</h1>
      <h2>{{ item.h2 }}</h2>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import EventBus from '@/event-bus';
export default {
data(){
    return {
        items: null
    }
},
created() {
  axios
  .get('data/content.json')
  .then(response => (this.items = response.data.home))     
},
mounted() {
  EventBus.$emit('homeCheck', this.isHome = true)
},
destroyed() {
  // Timeout has to match speed of the .pageIn/Out classes
  setTimeout(() => { 
    EventBus.$emit('homeCheck', this.isHome = false)
  }, 800)
}
}; 
</script>


<style lang="scss" scoped>
// Styles here
</style>
