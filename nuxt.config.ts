// https://nuxt.com/docs/api/configuration/nuxt-config
import * as os from "os";
import GitTransformer from "./modules/git-transformer/git-transformer.mjs";

export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: true,

    runtimeConfig: {
        public: {
            email: "reception@chase-podiatry.co.uk",
            phone: "01543 577566",
        }
    },

    app: {
        buildAssetsDir: "/res/",
        rootTag: "body"
    },

    site: {
        url: "https://www.chase-podiatry.co.uk",
        trailingSlash: true,
    },

    content: {
        documentDriven: {
            navigation: true,
            page: true,
            surround: true,
            injectPage: false,
            trailingSlash: true,
        },
        experimental: {
            clientDB: true,
        }
    },

    experimental: { defaults: { nuxtLink: { trailingSlash: 'append' } } },

    nitro: {
        preset: "cloudflare-pages",
        prerender: {
            concurrency: os.cpus().length * 2,
            crawlLinks: process.env.NODE_ENV == 'production',
            failOnError: process.env.NODE_ENV == 'production',
            routes: ['/', '/sitemap.xml'],
            ignore: ['/api/**'],
        },
        cloudflare: {
            pages: {
                routes: {
                    include: ['/api/*'],
                    exclude: ['/api/_content/*']
                },
                defaultRoutes: false,
            }
        },
    },

    modules: [
        "nitro-cloudflare-dev",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/seo",
        "@nuxt/image",

        "@nuxt/content",

        'nuxt-icon',
    ],

    tailwindcss: {
        cssPath: "~/assets/css/main.pcss",
    },

    image: {
        dir: 'assets/img',
        format: ['avif', 'webp', 'png'],
        provider: process.env.NODE_ENV == 'production' ? 'ipxStatic' : 'auto',
    },
})