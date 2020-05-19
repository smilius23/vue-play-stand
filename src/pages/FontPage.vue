<template>
  <div class="font-page__wrapper">
    <h1>Fonts</h1>
    <p class="font-page__test-paragr--px">
      this test font this test font this test font this test font
      this test font this test font this test font this test font
      this test font this test font this test font this test font
      this test font this test font this test font this test font
      this test font this test font this test font this test font
    </p>
    <p class="font-page__test-paragr--rem">
      this test font this test font this test font this test font
      this test font this test font this test font this test font
      this test font this test font this test font this test font
      this test font this test font this test font this test font
      this test font this test font this test font this test font
    </p>
    <p class="font-page__test-paragr--em-rem">
      this test font this test font this test font this test font
      this test font this test font this test font this test font
      this test font this test font this test font this test font
      this test font this test font this test font this test font
      this test font this test font this test font this test font
    </p>
  </div>
</template>
<script>
export default {
  name: "FontPage"
};
</script>

<style lang="scss" scoped>
.font-page {
  &__wrapper {
    color: red;
  }
  &__test-paragr {
    &--px {
      color: green;
      font-size: 18px;
    }
    &--rem {
      color: blue;
      font-size: 1.2rem;
    }
    &--em-rem {
      color: purple;
      font-size: calc(32em / 16);
    }
  }
}
</style>
