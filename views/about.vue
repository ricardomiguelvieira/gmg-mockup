<template>
  <div class="main-container">
    <navbar-top />
    <div class="content-container">
      <h1>What is Get My Grades?</h1>
      <span>Get My Grades is an innovative online learning platform that enables students to learn, revise and assess themselves. It automatically collects data on how students get on in each part of their course, so that parents, teachers and students can track their progress in real time. It provides more meaningful data to everyone whilst reducing teacher workload.

      The Get My Grades platform is simple and easy to use – it is based on good teaching practice and the latest research. It even includes clearly signposted extra content that goes beyond the bare minimum of the course to encourage curiosity and help students make informed decisions about which subjects they might want to study in future.</span>

      <div class="cards">
        <b-card
          title="Learn"
          img-src="../src/assets/images/learn.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; min-height: 30rem;"
          class="mb-2"
        >
          <b-card-text>
            To make sure that new ideas are remembered or skills mastered, we need to practise or revise them. Simply re-reading the content does not count as practice – you need to really test yourself.
          </b-card-text>
        </b-card>

        <b-card
          title="Revise"
          img-src="../src/assets/images/revise.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; min-height: 30rem;"
          class="mb-2"
        >
          <b-card-text>
            To make sure that new ideas are remembered or skills mastered, we need to practise or revise them. Simply re-reading the content does not count as practice – you need to really test yourself.
          </b-card-text>
        </b-card>

        <b-card
          title="Assess"
          img-src="../src/assets/images/assess.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; min-height: 30rem;"
          class="mb-2"
        >
          <b-card-text>
            Assessments are used to decide how well a student has understood the content. They can be used to check what students have learnt and what still needs work, or to award qualifications.
          </b-card-text>
        </b-card>

        <b-card
          title="Track"
          img-src="../src/assets/images/track.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; min-height: 30rem;"
          class="mb-2"
        >
          <b-card-text>
            The best teachers and learners will use assessment data to identify which areas need further work and focus their efforts there.
          </b-card-text>
        </b-card>
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

  .mb-2 {
    border-radius: 8px;
    border: 1px solid #3D98EE;
    margin: 0 8px;
  }

  .mb-2 img {
    height: 180px;
    width: auto;
  }

</style>

<style scoped>

  .cards {
    min-height: calc(100vh - 290px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
  }

  .content-container {
    position: relative;
    width: 50%;
    margin: auto;
    margin-top: 4%;
  }

  h1 {
    font-size: 3.5rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    color: #0D5BAF;
    margin-bottom: 30px;
    text-align: center;
  }

</style>
