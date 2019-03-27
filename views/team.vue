<template>
  <div class="main-container">
    <navbar-top />
    <div class="content-container">
      <div class="mt-4">
        <b-card img-src="../src/assets/images/becky.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            <h3>Becky Trollope</h3>
            <h4>Research Assistant</h4>
            <p>Becky (BA, PGCE) completed her undergraduate degree in Education at the University of York before working as a primary school teacher on the Teach First programme. She is looking forward to beginning an MPhil in Educational Research at the University of Cambridge in October.</p>
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/ravi.png" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            <h3>Ravi Pradhan</h3>
            <h4>Front-End Developer</h4>
            <p>Ravi has a passion for web development and enjoys having the responsibility for the creation and maintenance of the Get My Grades user interfaces.</p>
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/male_user.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/male_user.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/arthur.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/john.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/bryden.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/charlotte.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/male_user.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/female_user.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/jenn.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card img-src="../src/assets/images/samantha.jpg" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
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

.card-img-left {
  width: auto;
  height: 200px;
}

</style>

<style scoped>

  .b-card {
    min-height: 150px;
  }

  .content-container {
    position: relative;
    width: 50%;
    margin: auto;
    margin-top: 4%;
    margin-bottom: 4%;
  }


  h1 {
    font-size: 3.5rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    color: #0D5BAF;
    margin-bottom: 30px;
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
    font-family: 'Ubuntu', sans-serif;
    color: #0D5BAF;
  }

  h4 {
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    font-style: italic;
    font-weight: 200;
  }

  p {
    font-size: .9rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 200;
  }

</style>
