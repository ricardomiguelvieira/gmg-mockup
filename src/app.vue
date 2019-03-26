<template>
  <router-view></router-view>
</template>

<script>

import home from "../views/home.vue"
import about from "../views/about.vue"
import team from "../views/team.vue"

export default {
  components: {
    'view-home': home,
    'view-about': about,
    'view-team': team
  }
}

</script>

<style>

</style>
