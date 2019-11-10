import Vue from 'vue'



// Plugins
import VueMarkdown from 'vue-markdown'


// UI
import Intro from "@/components/UI/Intro.vue";
import Message from '@/components/UI/Message.vue';
import PostsList from "@/components/Blog/PostsList.vue";

// Controls
import AppButton from '@/components/UI/Controls/Button.vue';
import AppInput from '@/components/UI/Controls/Input.vue';
import AppTextArea from '@/components/UI/Controls/TextArea.vue';

// Plugins
Vue.component('VueMarkdown', VueMarkdown)

// Controls
Vue.component('Message', Message)
Vue.component('Intro', Intro)
Vue.component('PostsList', PostsList)

// UI
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)