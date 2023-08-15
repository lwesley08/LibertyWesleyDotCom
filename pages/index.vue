<template>
  <div class="welcome-page">
    <div class="hero">
      <div class="hero__text-container">
        <h1 class="hero__name">Liberty Wesley</h1>
        <p class="hero__title">UX/UI Designer & Developer</p>
        <a href="#portolio"><div aria-role="button" class="hero__button">See Portfolio</div></a>
      </div>
    </div>
    <div class="about">
      <h3 class="about__title">About</h3>
      <p class="about__text">Hello! I’m Liberty, a UX/UI designer with 5+ years of experience creating human-friendly applications, as unique as the brands they serve. I believe in designing accessible and maintainable products through research and collaboration. Let’s build something beautiful together!</p>
    </div>
    <div class="featured-work" id="portolio">
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
          <div class="featured-work__card-photo">
            <img src="/TSDSite.png"/>
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
          <div class="featured-work__card-photo">
            <img src="/TSDCMS.png"/>
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
          <div class="featured-work__card-photo">
            <img src="/ManegeSite.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <h3 class="contact__title">Contact</h3>
      <p class="contact__text">Have a project you think would be a good fit? Let’s talk!</p>
      <div aria-role="button" class="contact__button" @click="onCopyEmailAddressClick">
        {{ isCopyActive ? 'Copied Email Address!' : 'Copy Email Address' }}
      </div>
    </div>
    <div class="footer">
      <p class="footer__copyright">© 2023 Liberty Wesley</p>
      <p>All graphics courtesy of Space by Ker'is from Noun Project (CC BY 3.0)</p>
    </div>

    <div class="background">
      <img class="background__space-top" src="/space-top.svg"/>
      <img class="background__aquarius" src="/aquarius.svg"/>
      <img class="background__meteor" src="/meteor.svg"/>
      <img class="background__star" src="/star.svg"/>
      <img class="background__rocket" src="/rocket.svg"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isCopyActive = ref(false);

function onCopyEmailAddressClick() {
  const text = "libertywesley08@gmail.com"
  navigator.clipboard.writeText(text);
  isCopyActive.value = true;

  setTimeout(() => {
    isCopyActive.value = false;
  }, 5000);
}
</script>

<style lang="scss">
body {
  background: $background-white;
}
.welcome-page {
  height: 100%;
  position: relative;
  overflow-x: hidden;
  
  .background { 
    img {
      position: absolute;
      z-index: -1;
    }

    &__space-top {
      width: 80%;
      max-width: 691px;
      top: -100px;
      left: 0;
      right: 0;
      margin: 0 auto;

      @media screen and (min-width: $breakpoint-tablet) {
        top: -250px;
      }

      @media screen and (min-width: $breakpoint-laptop) {
        top: 50px;
        right: 50px;
        left: unset;
        margin: unset;
      }
    }

    &__aquarius {
      max-width: 438px;
      top: 500px;
      left: -60px;

      @media screen and (min-width: $breakpoint-tablet) {
        top: 720px;
        left: -20px;
      }

      @media screen and (min-width: $breakpoint-laptop) {
        top: 900px;
        left: 98px;
      }
    }

    &__meteor {
      max-width: 322px;
      width: 60%;
      top: 832px;
      right: -50px;

      @media screen and (min-width: $breakpoint-tablet) {
        max-width: 446px;
        width: 50%;
        top: 1132px;
        right: -50px;
        width: unset;
      }

      @media screen and (min-width: $breakpoint-laptop) {
        top: 1253px;
        max-width: 522px;
      }
    }

    &__star {
      max-width: 267px;
      width: 30%;
      top: 1050px;
      left: -20px;

      @media screen and (min-width: $breakpoint-tablet) {
        top: 1400px;
      }

      @media screen and (min-width: $breakpoint-laptop) {
        top: 1675px;
        max-width: 327px;
      }
    }

    &__rocket {
      width: 80%;
      max-width: 626px;
      bottom: 79px;
      left: 0;
      right: 0;
      margin: 0 auto;

      @media screen and (min-width: $breakpoint-laptop) {
        bottom: 89px;
        left: 32px;
        right: unset;
        margin: unset;
      }
    }
  }

  .hero {
    // height: 80vh;
    padding: 250px 20px 0px;
    box-sizing: border-box;

    @media screen and (min-width: $breakpoint-tablet) {
     padding: 431px 6% 0px;
    }
    
    @media screen and (min-width: $breakpoint-laptop) {
     padding: 261px 10% 0px;
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

    &__button {
      background-color: $purple;
      color: $background-white;
      border-radius: 5px;
      padding: 11px 27px 14px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      font-family: "freight-text-pro", serif;
      font-weight: 400;
      font-style: normal;
      display: inline-block;
      margin-top: 25px;
      font-size: 16px;

      &:hover {
        background-color: #B6C4FF;
      }

      &:active {
        background-color: #778CE3;
      }

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 25px;
      }

      @media screen and (min-width: $breakpoint-laptop) {
        margin-top: 60px;
      }
    }
  }

  .about {
    padding: 200px 20px 0px;

    @media screen and (min-width: $breakpoint-tablet) {
     padding: 287px 6% 0px;
    }
    
    @media screen and (min-width: $breakpoint-laptop) {
     padding: 480px 10% 0px 25%;
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
    padding: 250px 20px 0px;

    @media screen and (min-width: $breakpoint-tablet) {
      padding: 268px 6% 0px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      padding: 417px 10% 0px;
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
      flex-direction: column;
      row-gap: 20px;

      padding: 30px 20px 0px 20px;

      @media screen and (min-width: $breakpoint-laptop) {
        flex-direction: row;
        padding: 48px 40px 36px 40px;
      }
    }

    &__card-photo {
      height: 400px;
      overflow-y: hidden;
      overflow-x: hidden; 
      display: flex;
      justify-content: center;
      align-items: flex-end;
      
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }

    &__card-text {
      text-align: left;
      font-family: "freight-text-pro", serif;
      font-style: normal;
      
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      row-gap: 30px;
      
      @media screen and (min-width: $breakpoint-laptop) {
        row-gap: 130px;
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

  .contact {
    padding: 100px 20px 700px;

    @media screen and (min-width: $breakpoint-tablet) {
      padding: 125px 6% 800px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      padding: 200px 10% 500px 40%;
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

      @media screen and (min-width: $breakpoint-tablet) {
       font-size: 25px;
      }
    }

    &__button {
      background-color: $purple;
      color: $background-white;
      border-radius: 5px;
      padding: 11px 27px 14px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      font-family: "freight-text-pro", serif;
      font-weight: 400;
      font-style: normal;
      display: inline-block;
      margin-top: 40px;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #B6C4FF;
      }

      &:active {
        background-color: #778CE3;
      }

      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 25px;
      }
    }
  }

  .footer {
    font-family: "freight-text-pro", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;

    @media screen and (min-width: $breakpoint-tablet) {
      font-size: 16px;
    }

    padding: 0px 20px 30px;

    @media screen and (min-width: $breakpoint-tablet) {
     padding: 0px 6% 37px;
    }
    
    @media screen and (min-width: $breakpoint-laptop) {
     padding: 0px 10% 37px;
    }
 
    &__copyright {
      padding-bottom: 12px;
    }
  }

}
</style>