<template>
  <div id="navbar">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="/">
        <img src="../assets/images/navbar-logo.png" alt="GMG Logo" id="navbar-logo" />
      </b-navbar-brand>
    </b-navbar>
    <ul id="navbar-links">
      <li class="navbar-item"><router-link to="/about/">About</router-link></li>
      <li class="navbar-item"><router-link to="/team/">Team</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'navbar-top'
}

</script>

<style>

#navbar {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 5px 30px;
  background: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

#navbar-logo {
  width: 100px;
}

</style>

<style scoped>

ul {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
}

li {
  padding-right: 20px;
}

</style>
