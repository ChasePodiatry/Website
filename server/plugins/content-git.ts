export default defineNitroPlugin((nitroApp) => {
    console.info("Git content loaded");

    // @ts-ignore
    nitroApp.hooks.hook("content:context", () => {
        console.info("content")
    })
})