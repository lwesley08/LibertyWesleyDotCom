<template>
  <div class="welcome-page">
    <div class="hero">
      <div class="hero__text-container">
        <h1 class="hero__name">Liberty Wesley</h1>
        <p class="hero__title">UX/UI Designer & Developer</p>
      </div>
    </div>
    <div class="about">
      <h3 class="about__title">About</h3>
      <p class="about__text">Hello! I’m Liberty, a UX/UI designer with 5+ years of experience creating human-friendly applications, as unique as the brands they serve. I believe in designing accessible and maintainable products through research and collaboration. Let’s build something beautiful together!</p>
    </div>
    <div class="featured-work">
      <h3 class="featured-work__title">Featured Work</h3>
      <div class="featured-work__card-list">
        <div class="featured-work__card">
          <div class="featured-work__card-text">
            <div>
              <p class="featured-work__card-type">Case Study:</p>
              <p class="featured-work__card-company">The Software Dispensary</p>
              <p class="featured-work__card-description">A responsive landing page for a digital marketing startup aimed at the legal cannabis  industry.</p>
            </div>
            <div>
              <p class="featured-work__card-services">ux design · ui design · frontend&nbsp;development</p>
            </div>
          </div>
        </div>

        <div class="featured-work__card">
          <div class="featured-work__card-text">
            <div>
              <p class="featured-work__card-type">Case Study:</p>
              <p class="featured-work__card-company">The Software Dispensary</p>
              <p class="featured-work__card-description">A Content Management System for configuring client websites and managing user data.</p>
            </div>
            <div>
              <p class="featured-work__card-services">ux design · ui design</p>
            </div>
          </div>
        </div>

        <div class="featured-work__card">
          <div class="featured-work__card-text">
            <div>
              <p class="featured-work__card-type">Case Study:</p>
              <p class="featured-work__card-company">Manege De Heide</p>
              <p class="featured-work__card-description">A responsive site for a horse stable in Pulderbos, Belgium.</p>
            </div>
            <div>
              <p class="featured-work__card-services">ux design · ui design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  background: $background-white;
}
.welcome-page {
  background: $background-white;

  .hero {
    // height: 80vh;
    padding: 250px 20px 0px;
    box-sizing: border-box;

    @media screen and (min-width: $breakpoint-tablet) {
     padding: 431px 80px 0px;
    }
    
    @media screen and (min-width: $breakpoint-laptop) {
     padding: 261px 157px 0px;
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

  .about {
    padding: 200px 20px 0px;

    @media screen and (min-width: $breakpoint-tablet) {
     padding: 287px 80px 0px;
    }
    
    @media screen and (min-width: $breakpoint-laptop) {
     padding: 480px 157px 0px;
    }

    &__title {
      font-family: "ivymode", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 30px;
      opacity: 80%;
      margin-top: 0px;
      margin-bottom: 11px;

      @media screen and (min-width: $breakpoint-tablet) {
       font-size: 35px;
      }
    }

    &__text {
      font-family: "freight-text-pro", serif;
      font-weight: 400;
      font-style: normal;
      font-size: 20px;
      max-width: 860px;

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 25px;
      }
    }
  }
  .featured-work {
    padding: 200px 20px 0px;

    @media screen and (min-width: $breakpoint-tablet) {
      padding: 268px 80px 0px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      padding: 417px 157px 0px;
      text-align: center;
    }

    &__title {
      font-family: "ivymode", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 30px;
      opacity: 80%;
      margin-top: 0px;
      margin-bottom: 26px;

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 35px;
      }
      
      @media screen and (min-width: $breakpoint-laptop) {
        margin-bottom: 107px;
      }
    }

    &__card-list {
      display: flex;
      flex-direction: column;
      row-gap: 40px;

      @media screen and (min-width: $breakpoint-laptop) {
        margin-bottom: 50px;
      }
    }

    &__card {
      border-radius: 4px;
      background-color: #F7F8FA;
      border: 1px solid rgba(0, 0, 0, 0.10);
      box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: row;

      padding: 48px 0px 36px 40px;
    }

    &__card-text {
      text-align: left;
      font-family: "freight-text-pro", serif;
      font-style: normal;
      
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      row-gap: 130px;
      
      @media screen and (min-width: $breakpoint-laptop) {
        flex-basis: 45%;
      }
    }

    &__card-type {
      font-weight: 700;
      font-style: italic;
      font-size: 25px;
      opacity: 60%;
      text-transform: uppercase;

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 25px;
      }
    }

    &__card-company {
      font-size: 35px;
      font-weight: 600;
      margin-top: 10px;

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 35px;
        margin-top: 10px;
      }
    }

    &__card-description {
      font-size: 20px;
      font-weight: 400;
      margin-top: 15px;

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 20px;
        margin-top: 15px;
      }
    }

    &__card-services {
      font-weight: 500px;
      opacity: 45%;
      text-transform: uppercase;
      font-size: 23px; 

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 18px;
      }
    }
  }
}
</style>