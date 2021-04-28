import 'regenerator-runtime/runtime.js';

// js
import './assets/js/index.js';

// sass
import './assets/sass/index.sass';

// vue
import './vue/vue-apps';

// sprite-svg
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./assets/img/svg-templates/', true, /\.svg$/));
