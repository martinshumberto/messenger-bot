import Notify from 'vue-notifyjs';
import SideBar from '@/components/SidebarPlugin';
import PortalVue from 'portal-vue';
import GlobalComponents from './globalComponents';
import GlobalDirectives from './globalDirectives';
import 'es6-promise/auto';

import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/sass/dashboard.scss';
import '@/assets/css/themify-icons.css';

export default {
    install(Vue) {
        Vue.use(GlobalComponents);
        Vue.use(GlobalDirectives);
        Vue.use(SideBar);
        Vue.use(Notify);
        Vue.use(PortalVue);
    }
};
