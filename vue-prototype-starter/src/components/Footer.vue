<template>
<footer>
  <p>&copy; Copyright 2019, Skookum Inc</p>
  <div class="social">
    <a href="https://www.linkedin.com/" aria-label="Linkedin" target="_blank">
      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
    </a>
    <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank">
      <i class="fa fa-facebook-square" aria-hidden="true"></i>
    </a>
    <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank">
      <i class="fa fa-instagram" aria-hidden="true"></i>
    </a>
  </div>
</footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
footer {
  padding: .5rem 2rem 1rem $navWidth;
  transition: transform .5s ease, padding .5s ease;
  border-top: 1px solid $grayLighter;
  a {
    color: $grayDark;
    padding: 0 .2rem;
    line-height: 1;
    margin: 0 1rem 0 0;
    border-radius: .4rem;
    // align-self: center;
    &:hover {
      background: $primaryColor;
    }
  }
  .nav-active & {
    transform: translateX(8.5rem);
    padding-left: 5rem;
  }
  @include breakpoint(md-down) {
    padding-left: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
