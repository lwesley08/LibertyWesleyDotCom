<template>
  <div class="greeting__container">
    <div class="greeting__text-container">
      <p>Hello, I'm</p>
      <h1 class="greeting__name">Liberty Wesley</h1>
      <p class="greeting__description">A Cleveland-based web designer and developer, specializing in beautiful
        mobile-first digital designs.</p>
      <a href="mailto:libertywesley@proton.me"><button class="greeting__btn">Say Hello</button></a>
    </div>
  </div>
</template>

<style lang="scss">
.greeting {
  &__container {
    height: 100vh;
    max-width: 100vw;
    padding-left: 5rem;
    padding-right: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $lovely-lilac;
    color: $cool-cornflower;
  }

  &__text-container {
    font-size: 25px;
    font-family: 'Lato';
    max-width: 50rem;

    @include tabletAndAbove() {
      font-size: 30px;
    }
  }

  &__name {
    font-size: 80px;
    margin-bottom: 30px;
    font-family: 'Abril Fatface';

    @include tabletAndAbove() {
      font-size: 90px;
    }
  }

  &__description {
    max-width: 650px;
    margin-bottom: 65px;
  }

  &__btn {
    background-color: $cool-cornflower;
    padding: 20px 48px 25px;
    border: unset;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-family: 'Lato';
    width: 100%;

    @include tabletAndAbove() {
      font-size: 25px;
      padding: 14px 48px 25px;
      width: unset;
    }
  }
}
</style>