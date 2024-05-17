import {defineTransformer} from "@nuxt/content/transformers";

export default defineTransformer({
    name: 'git-transformer',
    // extensions: ['.md'],
    parse(_id, rawContent) {
        console.log('git')
        return {
            _id,
            body: "Foo",
        }
    },
})