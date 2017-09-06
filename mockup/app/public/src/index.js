import Vue from 'vue';
import { Button, Notification } from 'element-ui';
import App from './App.vue';
import './style.scss';


Vue.use(Button);


Vue.prototype.$notify = Notification


new Vue({
  el: '.App',
  render: h => h(App),
});
