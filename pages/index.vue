<template>
  <div class="welcome-page">
    <div class="hero">
      <div class="hero__text-container">
        <h1 class="hero__name">Liberty Wesley</h1>
        <p class="hero__title">UX/UI Designer & Developer</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.welcome-page {
  background: $background-white;

  .hero {
    height: 80vh;
    padding: 250px 16px 0px;
    box-sizing: border-box;

    @media screen and (min-width: $breakpoint-tablet) {
     padding: 431px 80px 0px;
    }
    
    @media screen and (min-width: $breakpoint-laptop) {
     padding: 361px 157px 0px;
    }

    &__text-container {
      text-align: center;

      @media screen and (min-width: $breakpoint-laptop) {
        text-align: left;
      }
    }

    &__name {
      font-family: "ivymode", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 50px;

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 100px;
      }
    }

    &__title {
      font-family: "freight-text-pro", serif;
      font-weight: 400;
      font-style: normal;
      font-size: 25px;

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 45px;
      }
    }
  }
}
</style>