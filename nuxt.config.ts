// https://nuxt.com/docs/api/configuration/nuxt-config
import * as os from "os";
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    devtools: {enabled: true},
    compatibilityDate: '2024-10-30',
    ssr: true,

    runtimeConfig: {
        public: {
            email: "reception@chase-podiatry.co.uk",
            phone: "01543 577566",
            address: [
                "Chase Podiatry",
                "10 Mill Street",
                "Cannock",
                "WS11 0DL",
            ]
        }
    },

    app: {
        buildAssetsDir: "/res/",
        rootTag: "body",
    },

    site: {
        url: "https://www.chase-podiatry.co.uk",
        name: "Chase Podiatry",
        trailingSlash: true,
        locale: "en-GB",
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
            cacheContents: true,
        }
    },

    sitemap: {
        strictNuxtContentPaths: true,
    },

    robots: {
        enabled: false,
    },

    experimental: {defaults: {nuxtLink: {trailingSlash: 'append'}}},

    nitro: {
        preset: "cloudflare-pages",
        prerender: {
            concurrency: os.cpus().length * 2,
            crawlLinks: process.env.NODE_ENV == 'production',
            failOnError: process.env.NODE_ENV == 'production',
            autoSubfolderIndex: true,
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
        "@nuxtjs/robots",
        "@nuxtjs/sitemap",
        "nuxt-seo-utils",
        "nuxt-link-checker",
        "@nuxt/image",
        "@nuxt/icon",
        "@nuxt/content",
        'nuxt-content-git',
    ],

    tailwindcss: {
        cssPath: "~/assets/css/main.pcss",
        exposeConfig: true,
    },

    image: {
        dir: 'assets/img',
        format: ['avif'],
        provider: process.env.NODE_ENV == 'production' ? 'ipxStatic' : 'auto',
    },
})