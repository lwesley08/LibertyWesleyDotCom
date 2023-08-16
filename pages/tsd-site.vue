<template>
  <div class="details-page">
    <div class="details-page__nav">
      <p class="details-page__name">Liberty Wesley</p>
    </div>
    <div class="details-page__header">
      <div class="details-page__header-text">
        <h1 class="details-page__project-title">The Software Dispensary</h1>
        <p class=details-page__project-description>A landing page for a digital marketing startup aimed at the legal cannabis  industry.</p>
      </div>
      <div class="details-page__project-photo">
        <img src="/tsd-site/headerimg.png"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.details-page {
  height: 100%;
  position: relative;
  overflow-x: hidden;

  &__nav {
    height: 50px;
    width: 100%;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 17px 20px 16px 20px;
    
    @media screen and (min-width: $breakpoint-laptop) {
      padding: 17px 30px 16px 30px;
      height: 70px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      padding: 17px 8% 16px 8%;
    }
  }

  &__name {
    font-family: "ivymode", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;

    @media screen and (min-width: $breakpoint-tablet) {
      font-size: 25px;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 30px;
    padding: 40px 20px;
    
    @media screen and (min-width: $breakpoint-tablet) {
      padding: 40px 30px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      flex-direction: row;
      padding: 70px 8%;
      justify-content: space-between;
    }
  }

  &__header-text {
    flex-grow: 1;
    flex-basis: 70%;
  }

  &__project-title {
    font-family: "ivymode", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;

    @media screen and (min-width: $breakpoint-tablet) {
      font-size: 60px;
    }
  }

  &__project-description {
    font-family: "freight-text-pro", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    max-width: 500px;
    
    @media screen and (min-width: $breakpoint-tablet) {
      max-width: 655px;
      font-size: 25px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      max-width: 85%;
    }
  }

  &__project-photo {
    height: 300px;
    overflow-y: hidden;
    overflow-x: hidden; 

    @media screen and (min-width: $breakpoint-tablet) {
      height: 430px;
    }
    
    img {
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>