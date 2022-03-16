<template>
  <div class="home">
    <div class="p-2 p-md-5 text-white bg-dark" style="height: 18rem">
      <div class="col-md-6" style="padding-top: 5rem; padding-left: 3rem">
        <h1 class="text-start">Hi, I'm Felicia Wu.</h1>
        <p class="text-start">
          Data Science. Machine Learning. Digital Marketing. Python.
        </p>
      </div>
    </div>
  </div>
  <div class="album py-5 bg-light">
    <div class="container">
      <h3 class="pb-3">Portfolio</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <a href="https://github.com/feliwxp/Disaster-Tweets"
              ><img
                class="card-img-top fix-height"
                src="../assets/Twitter-Ads-1.jpeg"
                alt="Card image cap"
            /></a>
            <div class="card-body">
              <p class="card-text">
                Natural Language Processing with Disaster Tweets
                <span
                  style="font-size: 11px"
                  class="bg-light text-dark padding-pill rounded-pill border"
                  >Code</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <a href="https://github.com/feliwxp/Pet-Breeds"
              ><img
                class="card-img-top fix-height"
                src="../assets/dog.jpeg"
                alt="Card image cap"
            /></a>
            <div class="card-body">
              <p class="card-text">
                Pet Breed Image Classification
                <span
                  style="font-size: 11px"
                  class="bg-light text-dark padding-pill rounded-pill border"
                  >Code</span
                >
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <a href="https://github.com/feliwxp/Credit-Card-Churn"
              ><img
                class="card-img-top fix-height"
                src="../assets/card.jpeg"
                alt="Card image cap"
            /></a>
            <div class="card-body">
              <p class="card-text">
                Credit Card Churn Classification
                <span
                  style="font-size: 11px"
                  class="bg-light text-dark padding-pill rounded-pill border"
                  >Code</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <a href="#"
              ><img
                class="card-img-top fix-height"
                src="../assets/dog-2.jpeg"
                alt="Card image cap"
            /></a>
            <div class="card-body">
              <p class="card-text">
                Pet Breed Image Classification App
                <span
                  style="font-size: 11px"
                  class="bg-light text-dark padding-pill rounded-pill border"
                  >App</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <a
              href="https://public.tableau.com/app/profile/felicia5737/viz/Book1_16379455903040/Story1"
              ><img
                class="card-img-top fix-height"
                src="../assets/store.jpeg"
                alt="Card image cap"
            /></a>
            <div class="card-body">
              <p class="card-text">
                Store Sales Tableu Visualization
                <span
                  style="font-size: 11px"
                  class="bg-light text-dark padding-pill rounded-pill border"
                  >Tableu</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <router-link to="/wine"
              ><img
                class="card-img-top fix-height"
                src="../assets/wine.png"
                alt="Card image cap"
            /></router-link>
            <div class="card-body">
              <p class="card-text">
                Wine Prediction (Naive Bayes, Vue, Flask)
                <span
                  style="font-size: 11px"
                  class="bg-light text-dark padding-pill rounded-pill border"
                  >App</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>

<style>
.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

.fix-height {
  height: 220px;
  object-fit: cover;
}

.bg-dark {
  background-image: url("../assets/sky.jpg");
}

.padding-pill {
  padding: 2px 7px;
}
</style>