import { FormGroupInput, Card, DropDown, Button } from '../components/index';
import { Kalendar } from 'kalendar-vue';

const GlobalComponents = {
    install(Vue) {
        Vue.component('fg-input', FormGroupInput);
        Vue.component('drop-down', DropDown);
        Vue.component('card', Card);
        Vue.component('p-button', Button);
        Vue.component('kalendar', Kalendar);
    }
};

export default GlobalComponents;
