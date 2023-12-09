import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig({



///////////////////////////////////////1

	base: '/potential-site/',

//////////////////////////////////////1

	css: {
		devSourcemap: true,
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "partials"),
		}),
//////////////////////////////////////2
		simpleHtmlPlugin({
			minify: true,
		}),
/////////////////////////////////////2
	],
////////////////////////////////////3
	build: {
        rollupOptions: {
            output: {
                dir: 'dist',
                entryFileNames: 'main.min.js',
                assetFileNames: 'main.min.css',
                chunkFileNames: "chunk.js",
                manualChunks: undefined,
            }
        }
    }
///////////////////////////////////3
});
