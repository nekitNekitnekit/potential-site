import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import simpleHtmlPlugin from 'vite-plugin-simple-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import zipPack from "vite-plugin-zip-pack";

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
//////////////////////////////////////
ViteImageOptimizer({
		exclude: undefined,
		include: undefined,
		includePublic: true,
		logStats: true,
		ansiColors: true,
		svg: {
		  multipass: true,
		  plugins: [
			{
			  name: 'preset-default',
			  params: {
				overrides: {
				  cleanupNumericValues: false,
				  removeViewBox: false, // https://github.com/svg/svgo/issues/1128
				},
				cleanupIDs: {
				  minify: false,
				  remove: false,
				},
				convertPathData: false,
			  },
			},
			'sortAttrs',
			{
			  name: 'addAttributesToSVGElement',
			  params: {
				attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
			  },
			},
		  ],
		},
		png: {
		  // https://sharp.pixelplumbing.com/api-output#png
		  quality: 100,
		},
		jpeg: {
		  // https://sharp.pixelplumbing.com/api-output#jpeg
		  quality: 80,
		},
		jpg: {
		  // https://sharp.pixelplumbing.com/api-output#jpeg
		  quality: 80,
		},
		tiff: {
		  // https://sharp.pixelplumbing.com/api-output#tiff
		  quality: 100,
		},
		// gif does not support lossless compression
		// https://sharp.pixelplumbing.com/api-output#gif
		gif: {},
		webp: {
		  // https://sharp.pixelplumbing.com/api-output#webp
		  lossless: true,
		},
		avif: {
		  // https://sharp.pixelplumbing.com/api-output#avif
		  lossless: true,
		},
		cache: false,
		cacheLocation: undefined,
  }),

  zipPack()
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
