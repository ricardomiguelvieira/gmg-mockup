<template>
  <div id="people-container">
  <navbar-top />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th> Name </th>
          <th> Address </th>
        </tr>
      </thead>
      <tr v-for="people in people">
        <td>{{people.name}}</td>
        <td>{{people.address}}</td>
      </tr>
    </table>
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

</style>
