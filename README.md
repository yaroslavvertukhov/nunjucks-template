# 1. Описание шаблона
## Требования
Сборка создавалась с следующими версиями  
node v12.19.0  
yarn v1.22.10

## Технологии:
1. Webpack  
2. Yarn
3. Scss
4. nunjucks - шаблонизатор html
5. Vue
6. Prettier - Отвечает за визуальное форматирование кода
7. Eslint - Отвечает за правильность написания кода

## Контроль качества кода:
Контроль качества кода производится при помощи Prettier и Eslint.  
За основу конфигураций (.eslintrc.js, .prettierrc.js) был взят **Style Guide Airbnb** + включенные настройки плагина **eslint-plugin-vue**.

## .Env переменные:
Env позволяют по разному конфигурировать проект для dev и prod среды. Такие вещи как домены api, ключи для api должны быть вынесены в .env

# 2. Инструкция по развертыванию
1. Клонируйте репозиторий  
2. Установите командой **yarn** зависимости проекта  
3. На основе **.env-example** создайте файл **.env**

# 4. Описание команд
**yarn build** - Билд проекта prod версии  
**yarn dev** - Запуск проекта в dev режиме  
**yarn lint** - Запуск линтинга всего проекта и автоматического исправления. Линтер сможет исправить только некоторые проблемы
**yarn vue:create-app kebab-name** - Генерация нового инстанса vue

# 5. Что можно отключить в начале работы?
Vue
 1. Для работы примера Vue в .env файле есть ссылка на тестовое апи. Ее можно удалить
 2. В файле src/vue/vue-apps.js для демонстрации использования Vue в проекте инициализируется инстанс Vue (c 5 по 10 строку). Его можно удалить или закомментировать.

# 5. Для форматирования кода используется Prettier.
Для быстрого форматирования кода под локальную конфигурация проекта требуется установить плагин в вашу IDE.