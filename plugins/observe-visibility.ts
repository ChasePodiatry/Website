import VueObserveVisibilityPlugin from "vue3-observe-visibility";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueObserveVisibilityPlugin)
})