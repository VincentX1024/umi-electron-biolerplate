import { defineConfig } from 'umi';

export default defineConfig({
	nodeModulesTransform: {
		type: 'none',
	},
	routes: [
		{ path: '/', component: '@/pages/index' },
	],
	devServer: {
		port: 8888,
	}
});
