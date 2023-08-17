<template>
  <div class="details-page">
    <div class="details-page__nav">
      <NuxtLink to="/"><p class="details-page__name">Liberty Wesley</p></NuxtLink>
    </div>
    <div class="details-page__header">
      <div class="details-page__header-text">
        <h1 class="details-page__project-title">The Software Dispensary</h1>
        <p class=details-page__project-description>A Content Management System for configuring client websites and managing user data.</p>
      </div>
      <div class="details-page__project-photo">
        <img src="/tsd-cms/tsdcmsheader.png"/>
      </div>
    </div>
    <div class="details-page__card-container">
      <div class="details-page__card">
        <div class="details-page__card-title">
          <p>Services</p>
          <hr class="details-page__card-underline"/>
        </div>
        <ol class="details-page__card-details">
          <li>UX Design</li>
          <li>UI Design</li>
        </ol>
      </div>
      <div class="details-page__card">
        <div class="details-page__card-title">
          <p>Team</p>
          <hr class="details-page__card-underline"/>
        </div>
        <ol class="details-page__card-details">
          <li>1 Founder</li>
          <li>1 Backend Developer</li>
          <li>1 Frontend Developer</li>
        </ol>
      </div>
      <div class="details-page__card">
        <div class="details-page__card-title">
          <p>Product</p>
          <hr class="details-page__card-underline"/>
        </div>
        <ol class="details-page__card-details">
          <li>Responsive Web</li>
        </ol>
      </div>
    </div>

    <div class="details-page__body">
      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">The Challenge</p>
          <div class="details-page__body-text">The Software Dispensary is a digital marketing company aimed at the the legal cannabis industry. The application that drives their data behind the scenes is a Content Management System (CMS). It is a portal for updating all user and client information, as well as the configuration of client websites and inventory.</div>
        </div>
        <div class="details-page__body-section">
          <p class="details-page__body-header">TL;DR - The Goals</p>
          <ul class="details-page__body-text">
            <li>Design an scalable application to manage client’s and their websites, equally suited for beta and full launch.</li>
            <li>Keep in line with brand aesthetic established by the company’s website.</li>
            <li>Design for different levels of access, including internal and external users.</li>
          </ul>
        </div>
      </div>
      
      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">Escaping Tables</p>
          <div class="details-page__body-text">
            <p>Websites may think in tables, but that doesn’t mean users do. By designing all lists in a card format, the pages are more responsive and easier to scan.</p>
            <br class="details-page__body-spacer"/>
            <p>Key decision:</p>
            <ul>
              <li><strong>Highlighting important fields - </strong> Most users decide what card to click based on name alone, making it the most visible field with other data supplementary.</li>
              <li><strong>Quick Edits - </strong>Adding or removing roles, tags, and other common tasks accessible without entering the edit screen.</li>
              <li><strong>Infinite Scroll - </strong> Most users find their record via search, meaning most records could be hidden until scroll to save unnecessary load time.</li>
            </ul>
          </div>
        </div>
        <div class="details-page__body-section">
          IMAGE
        </div>
      </div>
      
      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">A Robust Search</p>
          <div class="details-page__body-text">
            <p>When getting new clients ready to launch, the faster, the better, and no one wants to spend any longer than they have to scrolling endless lists.</p>
            <br class="details-page__body-spacer"/>
            <p>Key decision:</p>
            <ul>
              <li><strong>Fuzzy Search - </strong>Gracefully allow for typos from internal staff and clients in a hurry to make their change.</li>
              <li><strong>Recent Searches - </strong>When setting up a new client, the same search term may be used many times in a day. Making this easily accessible saves valuable time and frustration.</li>
            </ul>
          </div>
        </div>
        <div class="details-page__body-section">
          IMAGE
        </div>
      </div>

      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">Dynamic Navigation </p>
          <div class="details-page__body-text">
            <p>With the potential for internal and external users, all with varying access levels, the goal was to make the navigation as flexible as possible, maximizing screen real estate in all scenarios.</p>
            <p>Key decision:</p>
            <ul>
              <li><strong>Internal-Only items always visible - </strong>Internal access to client and user lists are separated from main navigation and always accessible.</li>
              <li><strong>Built-in client switcher - </strong> Internal users are always able to switch clients without entering the client screen, speeding up workflows.</li>
              <li><strong>Fixed top vs. side navigation - </strong>Main navigation categories are fixed to the top in a thin nav, and more granular options slide out from the side when necessary, utilizing full screen-width when possible.</li>
            </ul>
          </div>
        </div>
        <div class="details-page__body-section">
          IMAGE
        </div>
      </div>

      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">Responsive From The Start</p>
          <div class="details-page__body-text">
            <p>By keeping the mobile and tablet design in mind from the start, I designed the site to make sure no important data is lost, no matter how small the screen.</p>
          </div>
        </div>
        <div class="details-page__body-section">
          IMAGE
        </div>
      </div>
      
      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">Developer Handoff</p>
          <div class="details-page__body-text">
            <p>Using Figma’s built-in prototyping, library and component features, I make the developer handoff process as seamless as possible, defining common states, colors, and text styles up front so there’s no confusion how to tackle the markup and styling.</p>
          </div>
        </div>
        <div class="details-page__body-section">
          IMAGE
        </div>
      </div>
    </div>

    <div class="details-page__contact">
      <p>Have a project you think would be a good fit? Let’s talk!</p>
      <div aria-role="button" class="details-page__button" @click="onCopyEmailAddressClick">
        {{ isCopyActive ? 'Copied Email Address!' : 'Copy Email Address' }}
      </div>
    </div>

    <div class="footer">
      <p class="footer__copyright">© 2023 Liberty Wesley</p>
      <p>All graphics courtesy of Space by Ker'is from Noun Project (CC BY 3.0)</p>
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
li {
  margin: 5px 0px;
}

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
    flex-basis: 73%;
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

  &__card-container {
    display: flex;
    flex-direction: row;
    column-gap: 30px;
    padding: 40px 20px;
    flex-wrap: wrap;
    row-gap: 20px;

    @media screen and (min-width: $breakpoint-tablet) {
      padding: 40px 30px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      flex-direction: row;
      padding: 70px 8%;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
  }

  &__card {
    background-color: $highlight-white;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 25px 36px; // TODO mobile
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
    min-width: 193px;
   
    @media screen and (min-width: $breakpoint-tablet) {
      flex-basis: calc((100%/3) - 60px);
    }
  }

  &__card-title {
    display: inline-block;

    p {
      font-family: "freight-text-pro", serif;
      font-weight: 400;
      font-style: italic;
      font-size: 20px;
      text-transform: uppercase;
      opacity: 0.6;
  
      @media screen and (min-width: $breakpoint-tablet) {
        font-size: 22px;
      }
    }
  }

  &__card-underline {
    border: 3px solid $purple;
    margin-top: 3px;
    margin-bottom: 0px;
    transform: scale(1.1);
  }
  
  &__card-details {
    font-family: "freight-text-pro", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    list-style: none;
    padding-left: 0px;
    margin: 0px;

    @media screen and (min-width: $breakpoint-tablet) {
      font-size: 20px;
    }

    li {
      margin: 5px 0px;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
    padding: 17px 20px 30px 20px;
    
    @media screen and (min-width: $breakpoint-tablet) {
      padding: 17px 30px 50px 30px;
      row-gap: 100px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      padding: 17px 8% 80px 8%;
      row-gap: 140px;
    }
  }

  &__body-row {
    display: flex;
    flex-direction: column;
    column-gap: 60px;
    row-gap: 30px;

    @media screen and (min-width: $breakpoint-laptop) {
      flex-direction: row;
    }
  }

  &__body-section {
    flex-basis: 50%;
  }

  &__body-header {
    font-family: "freight-text-pro", serif;
    font-weight: 600;
    font-style: normal;
    font-size: 30px;
    margin-bottom: 20px;

    @media screen and (min-width: $breakpoint-tablet) {
      font-size: 35px;
    }
  }

  &__body-text {
    margin-top: 0px;
    font-family: "freight-text-pro", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;

    @media screen and (min-width: $breakpoint-tablet) {
      font-size: 20px;
    }
  }

  &__contact {
    margin-top: 0px;
    font-family: "freight-text-pro", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    border-top: 1px solid rgba(0, 0, 0, .1);

    padding: 30px 20px 30px 20px;
    
    @media screen and (min-width: $breakpoint-tablet) {
      padding: 50px 30px 50px 30px;
      font-size: 25px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      padding: 80px 8% 80px 8%;
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
        margin-top: 40px;
      }
    }

  &__body-image {
    img {
      display: block;
      max-height: 550px;
      max-width: 100%;
      width: auto;
      height: auto;
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
</style>