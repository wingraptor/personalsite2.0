<template>
  <div
    class="banner w-100 h-100 d-flex justify-content-center align-items-center position-relative"
  >
    <div class="banner__div text-dark">
      <h1 class="title">Akono Brathwaite</h1>
      <p class="subtitle">Web Developer</p>
      <a class="mx-2 highlighted" href="https://www.linkedin.com/in/akono-brathwaite-a0446297">
        <v-icon name="brands/linkedin" scale="2.5"></v-icon>
      </a>
      <a class="mx-2 highlighted" href="https://github.com/wingraptor">
        <v-icon name="brands/github" scale="2.5"></v-icon>
      </a>
    </div>
    <div id="particles-js"></div>
  </div>
</template>

<script>
import "particles.js";
import particleSettings from "@/assets/particles.js";
import { hslToRgb, hslToHex } from "@/assets/helperFunctions.js";

export default {
  name: "LandingPage",
  data() {
    return {};
  },
  props: ["highlightColor"],
  methods: {
    forceRerender() {
      this.testKey += 1;
    },
    // Change colors of all particles
    changeParticleColor(color) {
      const rgbColor = hslToRgb(color);
      const hexColor = hslToHex(color);
      console.log();
      // See -> https://github.com/VincentGarreau/particles.js/issues/71
      window.pJSDom[0].pJS.particles.array.forEach((particle) => {
        particle.color.value = hexColor;
        particle.color.rgb = rgbColor;
      });
    },
  },
  mounted() {
    // load particles js on component mounting -> https://stackoverflow.com/a/50343970
    window.particlesJS(
      "particles-js",
      // configuration goes here
      particleSettings
    );
  },
  watch: {
    highlightColor(newColor) {
      this.changeParticleColor(newColor);
    },
  },
  // Allows for the destruction of particleJS instance when you move from page - See https://github.com/creotip/vue-particles/issues/20#issuecomment-406809340
  beforeDestroy() {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window["pJSDom"] = [];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  background-color: var(--main-background-color);
  transition: var(--transition-one);
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
}

.title{
  opacity: 0.7;
}

.banner__div {
  z-index: 999;
}

.banner__div h1 {
  /* text-shadow: 3px 3px var(--main-text-color); */
  color: var(--main-text-color);
  font-size: 7rem;
}

.banner__div .subtitle {
  font-size: 1.7rem;
  color: var(--highlight-one);
  font-weight: bold;
}

#particles-js {
  /* background-color: var(--main-background-color); */
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 767px) {
  .banner__div h1 {
    font-size: 3rem;
  }
  .banner__div .subtitle {
    font-size: 1rem;
  }
}
</style>
