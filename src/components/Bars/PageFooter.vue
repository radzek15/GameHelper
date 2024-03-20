<script>
export default {
  name: "PageFooter",

}
</script>

<template>
  <footer id="footer" class="bg-light text-center">
    <section class='container d-flex justify-content-center justify-content-lg-between text-red p-4 border-bottom'>
      <div class='me-5 d-none d-lg-block'>
        <span>Skontaktuj sie z nami:</span>
      </div>
      <div>
        <a href='https://www.facebook.com/radomir.piatkowski/?locale=pl_PL'
           class='me-3 text-reset'><i class="fa-brands fa-facebook"></i></a>
        <a href='mailto:radzek15@gmail.com'
            class='me-3 text-reset'><i class="fa-brands fa-google"></i></a>
        <a href='https://github.com/radzek15' class='me-3 text-reset'>
          <i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/radomir-pi%C4%85tkowski-9166a5241/"
           class='me-3 text-reset'><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </section>

    <section>
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4 text-red">Games</h6>
            <ul>
              <li><a href="/" class="text-reset">Game</a></li>
            </ul>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4 text-red">Useful links</h6>
            <ul>
              <li><a href="/" class="text-reset">Home</a></li>
              <li><a href="#" class="text-reset">Register</a></li>
              <li><a href="#" class="text-reset">Help</a></li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <div class='text-center p-3'>
      <p class="text-light mt-3">Copyright: &copy; 2023 GamePedia. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  #footer {
    backdrop-filter: blur(5px);
    background: transparent !important;
  }

  .text-red{
    color: #AD1705;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-block: 10px;
    color: white;
  }

  li:hover {
    color: #AD1705 !important;
  }
</style>