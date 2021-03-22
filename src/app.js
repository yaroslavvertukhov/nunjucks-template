import "regenerator-runtime/runtime.js";

// sass
import './assets/sass/index.sass';

//sprite-svg
function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./assets/img/svg-templates/', true, /\.svg$/));

// js
import './assets/js/index.js';

// vue
import './vue/vue-apps';
