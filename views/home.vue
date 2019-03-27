<template>
  <div class="main-container">
    <navbar-top />
    <div class="content-container">
      <div id="mockup-image">
          <img src="../src/assets/images/device-mockup.png" alt="Device mockup">
        </div>
      <div class="description">
        <h1>The Ultimate Learning Platform</h1>
        <ul class="features-list">
          <li>English</li>
          <li>Maths</li>
          <li>Science</li>
          <li>All major qualifications</li>
          <li>Years 7 - 11</li>
        </ul>
        <b-button href="https://platform.getmygrades.co.uk/select?pk_vid=c4e2f1fb1386baf21553637780305eeb" target="_blank" variant="outline-primary">Start Free 7 Day Trial Now</b-button>
      </div>
    </div>
    <footer-bottom />
  </div>
</template>


<script>
import navbar from '../src/components/navbar.vue';
import footer from '../src/components/footer.vue';

export default {
  components: {
    'navbar-top': navbar,
    'footer-bottom': footer
  }
}
</script>

<style>

  .main-containter {
    margin: 0;
    height: 100vh;
  }

  .description {
    text-align: center;
  }

  #mockup-image img{
    width: 100%;
  }

  h1 {
    font-size: 3.5rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    color: #0D5BAF;
    margin-bottom: 30px;
  }

  .btn-outline-primary {
    font-family: 'Ubuntu', sans-serif;
    width: 36%;
    padding: 16px;
    background: #3D98EE;
    color: #FFFFFF;
    border-style: #3D98EE;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  .btn-outline-primary:hover {
    background: #2C4DAA;
    border: 1px solid #2C4DAA;
  }

  li a {
    color: #3D98EE;
  }

  li a:hover {
    color: #2C4DAA;
    text-decoration: none;
  }

</style>

<style scoped>

  .content-container {
    min-height: calc(100vh - 290px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
    margin: 16vh 0 4vw 4vw;
  }

  ul {
    list-style-type: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 0;
    margin-bottom: 30px;
  }

</style>
