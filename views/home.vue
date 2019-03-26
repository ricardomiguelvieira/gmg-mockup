<template>
  <div class="main-description">
    <h1>The Ultimate Learning Platform</h1>
    <ul class="features-list">
      <li>English</li>
      <li>Maths</li>
      <li>Science</li>
      <li>All major qualifications</li>
      <li>Years 7 - 11</li>
    </ul>
    <b-button variant="outline-primary">Start Free 7 Day Trial Now</b-button>
  </div>
</template>


<script>
import navbar from '../components/navbar.vue';

export default {
  components: {
    'navbar-top': navbar
  },

  methods:{
  }
}
</script>

<style>

.main-description {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

<style scoped>

h1 {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #0D5BAF;
  margin-bottom: 30px;
}

ul {
  list-style-type: none;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  padding: 0;
  margin-bottom: 30px;
}

.btn-outline-primary {
  width: 36%;
  padding: 16px;
  background: #3D98EE;
  color: #FFFFFF;
  border-style: #3D98EE;
  }

  .btn-outline-primary:hover {
    background: #FFFFFF;
    color: #3D98EE;
    border: 1px solid #3D98EE;
  }

</style>
