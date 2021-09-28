const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const toCamel = (s) =>
  s.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace('-', '').replace('_', '')
  );

const error = (...args) => {
  console.error(chalk.red(...args));
};

const success = (...args) => {
  console.log(chalk.green(...args));
};

const args = process.argv.slice(2);

const appsPath = 'src/vue';

if (!args.length) {
  error('Введите имя модуля vue:create-app {name}');
  return;
}

const fullAppPath = path.join(__dirname, '../', appsPath);
if (!fs.existsSync(fullAppPath)) {
  fs.mkdirSync(fullAppPath);
}

const appName = args[0];
const appPath = path.join(__dirname, '../', appsPath, appName);
const pluginPath = path.join(__dirname, '../', appsPath, appName, `plugins`);
const componentPath = path.join(
  __dirname,
  '../',
  appsPath,
  appName,
  `components`
);

if (fs.existsSync(appPath)) {
  error(`${appPath} директория существует!`);
  process.exit(1);
}

const mainContent = `import Vue from 'vue';
import App from './app';
import api from './plugins/api';

Vue.use(api);

const ${toCamel(appName)} = document.querySelector('#${appName}');
if (${toCamel(appName)})
  new Vue({
    el: ${toCamel(appName)},
    render(h) {
      return h(App);
    },
  });
`;

const appContent = `<template>
  <test-component :items="users" />
</template>

<script>
import testComponent from './components/test-component';

export default {
  name: 'app',
  components: {
    testComponent,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.$api.getUsers().then((response) => {
      const users = response.data;
      this.users = users;
    });
  },
};
</script>
`;

const apiContent = `import axios from 'axios';

const services = {
  test: process.env.VUE_APP_API_URL_TEST,
};

const methods = {
  getUsers() {
    return axios.get(\`\${services.test}/users\`);
  },
};

export default {
  install(Vue) {
    Vue.prototype.$api = methods;
  },
};
`;

const componentContent = `<template>
  <div class="users">
    <div class="users__title">Тестовый компонент вывода юзеров</div>
    <div class="blocks">
      <div v-for="item in items" :key="item.name" class="blocks__item">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test-component',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
`;

const mainPath = `${path.join(appPath, `main.js`)}`;
const appJsPath = `${path.join(appPath, `app.vue`)}`;
const apiPath = `${path.join(pluginPath, `api.js`)}`;
const testComponentPath = `${path.join(componentPath, `test-component.vue`)}`;

fs.mkdirSync(appPath);
fs.mkdirSync(pluginPath);
fs.mkdirSync(componentPath);
fs.appendFileSync(mainPath, mainContent);
fs.appendFileSync(appJsPath, appContent);
fs.appendFileSync(apiPath, apiContent);
fs.appendFileSync(testComponentPath, componentContent);

success('Vue app', args, 'успешно создан!');
