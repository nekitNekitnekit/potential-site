import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

// https://vitejs.dev/config/
export default defineConfig({

	base: '/potential-site/',


	css: {
		devSourcemap: true,
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "partials"),
		}),
	],
});
