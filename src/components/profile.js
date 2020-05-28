import Vue from 'vue'
import image from "../img/logo.png"


export default Vue.component("Profile", {
  data: () => ({
    name: "Vue",
    logo: image
    // publicPath: process.env.BASE_URL
  }),
  /*
  Here we use hardcoded template, so gonna need compiler-included build, in production we just need the runtime-compiler,
  otherwise we'll get: "You are using the runtime-only build of Vue where the template compiler is not available.
  Either pre-compile the templates into render functions, or use the compiler-included build."
  */
  template: `<div class="profile">
    <img :src="logo" alt="Logo">
    <h1>Hello {{ name }}!</h1>
  </div>`
})
