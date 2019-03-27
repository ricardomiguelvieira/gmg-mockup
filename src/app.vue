<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import home from "../views/home.vue"
import about from "../views/about.vue"
import team from "../views/team.vue"
import people from "../views/people.vue"

export default {
  components: {
    'view-home': home,
    'view-about': about,
    'view-team': team,
    'view-people': people
  }
}

</script>

<style>

</style>
