<template>
  <main class="hello">
    <h1>Sample About Page</h1>
     <input class="input" type="text" v-model="textBinding">
     <br><br>
     <h2>{{ textBinding }}</h2>
    <br><br>
    <button @click="addAge(1)">Add a Year</button>
    <button @click="subAge(1)">Subtract a Year</button>
    <h2>My age is: {{age}}</h2>
    <br><br>
    <!-- Test JSON Content -->
    <div class="product-item" v-for="item in items" :key="item.id">
      <h1>{{item.name}}</h1>
      <div class="product-image">
          <img :src="item.image" :alt="item.alt">
          <img v-if="item.imageTwo" :src="item.imageTwo" :alt="item.alt">
      </div>
      <div class="product-info">
        <p>{{item.description}}</p>
        <p>{{item.role}}</p>
        <a v-if="item.url" :href="item.url" target="_blank" rel="noreferrer">
            {{item.linkTitle}}
        </a>
      </div>
    </div>

  </main>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        textBinding: "Change Me",
        age: 42,
        items: null
      }
    },
    mounted() {
      axios
        .get('data/content.json')
        .then(response => (this.items = response.data.about.products))
    },
    props: {
      msg: String,
    },
    methods: {
      changeMsg() {
        this.$emit("changeMsg", this.textBinding);
        console.log('message emit from child component')
      },
      addAge(inc) {
        this.age += inc;
        console.log('Age Method Firing');
      },
      subAge(dec) {
        this.age -= dec;
      }
    }
  };
</script>


<style>
img {
  width: 15rem;
}
</style>
