<template>
  <div class="main-container">
    <navbar-top />
    <div class="content-container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tr v-for="people in people">
          <td>{{people.name}}</td>
          <td>{{people.address}}</td>
        </tr>
      </table>
    </div>
    <footer-bottom />
  </div>
</template>

<script>

  import axios from 'axios'
  import navbar from '../src/components/navbar.vue';
  import footer from '../src/components/footer.vue';


  export default {
    components: {
      'navbar-top': navbar,
      'footer-bottom': footer
    },
    name: 'app',
    data () {
      return {
        people: []
      }
    },
    created() {
      axios.get('http://localhost:3000/people').then((response) => {
        this.people = response.data
      })
      .catch((e) => {
      console.error(e)
      })
    }
  }

</script>

<style>

  .main-containter {
      margin: 0;
      height: 100vh;
  }

</style>

<style scoped>

  .content-container {
    min-height: calc(100vh - 290px);
    margin: 16vh 0 4vw 4vw;
    display: flex;
    justify-content: space-around;
  }

  .table {
    width: 50%;
  }

  thead {
    background: #3D98EE;
    color: #FFFFFF;
    font-family: 'Ubuntu', sans-serif;
  }

  td {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 200;
  }

</style>
