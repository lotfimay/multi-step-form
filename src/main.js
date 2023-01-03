import { createApp } from 'vue';
import App from './App.vue';
import RoundSwitch from './components/ui/RoundSwitch.vue';

const app = createApp(App);

app.component('RoundSwitch', RoundSwitch);

app.mount('#app');
