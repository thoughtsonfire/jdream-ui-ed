import jdreamUI from 'jdream-ui'
import 'jdream-ui/lib/index.css'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(jdreamUI)
  }
}
