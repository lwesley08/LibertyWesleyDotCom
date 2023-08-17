<template>
  <div class="details-page">
    <div class="details-page__nav">
      <NuxtLink to="/"><p class="details-page__name">Liberty Wesley</p></NuxtLink>
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
    <div class="details-page__card-container">
      <div class="details-page__card">
        <div class="details-page__card-title">
          <p>Services</p>
          <hr class="details-page__card-underline"/>
        </div>
        <ol class="details-page__card-details">
          <li>UX Design</li>
          <li>UI Design</li>
          <li>Frontend Development</li>
        </ol>
      </div>
      <div class="details-page__card">
        <div class="details-page__card-title">
          <p>Team</p>
          <hr class="details-page__card-underline"/>
        </div>
        <ol class="details-page__card-details">
          <li>1 Founder</li>
          <li>2 Stakeholders</li>
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
          <div class="details-page__body-text">The Software Dispensary is a digital marketing company aimed at the the legal cannabis industry. Their existing website needed some TLC to make it suitably modern and professional. Created when the company was first formed, it no longer fit the branding in aesthetics or message. The main concerns were the lack of attention drawn to the product itself in the existing stock visuals, and the low visibility of the contact form and demo site links, intended to drive sales.</div>
        </div>
        <div class="details-page__body-section">
          <p class="details-page__body-header">TL;DR - The Goals</p>
          <ul class="details-page__body-text">
            <li>Create a website to fit the brand: modern, simple, “just techie enough to seem like an authority while still being approachable.”</li>
            <li>Communicate the product and main audience without too many gimmicks.</li>
            <li>Draw more attention to the contact form and demo site.</li>
          </ul>
        </div>
      </div>

      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">Fitting The Brand</p>
          <div class="details-page__body-text">
            <p>Modern. Techie. Fun & Approachable. The perfect combination for a contemporary tech company appealing to small business owners.</p>
            <br class="details-page__body-spacer"/>
            <p>Key decision:</p>
            <ul>
              <li><strong>Imagery - </strong> Repetition of circuitry panels, reminiscent of the company logo to keep the techie vibe present throughout.</li>
              <li><strong>Fonts - </strong>Combining the geometric Rubik for all-caps accents with the clean DM Sans and Inter to ride the fence between techie and friendly.</li>
              <li><strong>Colors - </strong>Green accents throughout (variations of the primary brand color) as a nod to the product, while keeping it subtle and free of silly gimmicks.</li>
            </ul>
          </div>
        </div>
        <div class="details-page__body-section">
          <div class="details-page__body-image">
            <img src="/tsd-site/Brand1.png"/>
          </div>
          <div class="details-page__body-image" :style="{ height: '550px', marginTop: '20px' }">
            <img src="/tsd-site/Brand2.png"/>
          </div>
        </div>
      </div>

      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">Highlighting the Product</p>
          <div class="details-page__body-text">
            <p>Why use stock imagery when you can let the product itself shine?</p>
            <br class="details-page__body-spacer"/>
            <p>Key decision:</p>
            <ul>
              <li><strong>Website Snapshots - </strong> Images of the application’s inventory module and homepage are prominently displayed.</li>
              <li><strong>Demo Site - </strong>An additional call to action button directing future clients to a full-feature demo.</li>
            </ul>
          </div>
        </div>
        <div class="details-page__body-section">
          <div class="details-page__body-image">
            <img src="/tsd-site/product1.png"/>
          </div>
        </div>
      </div>

      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">An Contact Form You Can’t Miss</p>
          <div class="details-page__body-text">
            <p>Key decision:</p>
            <ul>
              <li><strong>High-visibility call to action - </strong>Whether on mobile or desktop, the cta is the highest visibility button, displayed prominently in the primary green.</li>
              <li><strong>Form on the homepage - </strong>Rather than hide the contact form on a separate page, clients will scroll to it directly on the homepage, making the process as simple as possible.</li>
            </ul>
          </div>
        </div>
        <div class="details-page__body-section">
          <div class="details-page__body-image">
            <img src="/tsd-site/contactus.png"/>
          </div>
        </div>
      </div>

      <div class="details-page__body-row">
        <div class="details-page__body-section">
          <p class="details-page__body-header">Responsive From The Start</p>
          <div class="details-page__body-text">
            <p>By keeping the mobile and tablet design in mind from the start, I created a site that keeps the goals in mind at every size, sacrificing space but never the brand’s aesthetic.</p>
          </div>
        </div>
        <div class="details-page__body-section">
          <div class="details-page__body-image">
            <img src="/tsd-site/tablet.png"/>
          </div>
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
  }

  &__body {
    display: flex;
    flex-direction: column;
    row-gap: 140px;
    padding: 17px 20px 30px 20px;

    @media screen and (min-width: $breakpoint-tablet) {
      padding: 17px 30px 50px 30px;
    }

    @media screen and (min-width: $breakpoint-laptop) {
      padding: 17px 8% 80px 8%;
    }
  }

  &__body-row {
    display: flex;
    flex-direction: column;
    column-gap: 60px;

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
    font-size: 35px; // TODO
    margin-bottom: 20px;
  }

  &__body-text {
    margin-top: 0px;
    font-family: "freight-text-pro", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px; // TODO
  }

  &__contact {
    margin-top: 0px;
    font-family: "freight-text-pro", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 25px; // TODO
    border-top: 1px solid rgba(0, 0, 0, .1);

    padding: 30px 20px 30px 20px;

    @media screen and (min-width: $breakpoint-tablet) {
      padding: 50px 30px 50px 30px;
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
    height: 400px;
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
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