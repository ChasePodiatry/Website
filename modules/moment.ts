import {defineNuxtModule} from "@nuxt/kit";
import moment from "moment";

export default defineNuxtModule({
    meta: {
        name: 'moment',
    },
    setup(moduleOptions, nuxt) {
        moment.locale(nuxt.options.site.locale);
    }
})