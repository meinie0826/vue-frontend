import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {saveAs} from 'file-saver';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// 引入所有语言包
import hljs from 'highlight.js';

VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
});

createApp(App).use(VueMarkdownEditor).use(ElementPlus).use(store).use(router).mount('#app')
