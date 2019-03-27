<template>
  <div id="people-container">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th> Name </th>
          <th> Address </th>
        </tr>
      </thead>
      <tr v-for="people in people">
        <td>{{people.name}}</td>
      </tr>
    </table>

  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'table-bordered',
    mounted: function () {
      this.getPeople()
    },
    data () {
      return {
        people: {}
      }
    },
    methods: {
      getPeople: function () {
        axios.get('http://localhost:3000/people', {
          dataType: 'json',
        })
      }
    }
  }
</script>

<style>

</style>
