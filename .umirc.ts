import { defineConfig } from 'umi';
import routes from './src/routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  history: {
    type: 'hash',
  },
  fastRefresh: {},
  publicPath: './',
});
