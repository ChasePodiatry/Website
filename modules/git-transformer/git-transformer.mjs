// filename: my-module.mjs
import { resolve } from 'path'
import {createResolver, defineNuxtModule} from '@nuxt/kit'

export default defineNuxtModule({
    setup(_options, nuxt) {
        const { resolve } = createResolver(import.meta.url);
        nuxt.options.nitro.externals = nuxt.options.nitro.externals || {}
        nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || []
        nuxt.options.nitro.externals.inline.push(resolve('.'))
        // @ts-ignore
        nuxt.hook('content:context', (contentContext) => {
            contentContext.transformers.push(resolve('./transformer.ts'))
        })
    }
})