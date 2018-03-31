
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Language bundle
 */
import languageBundle from '@kirschbaum-development/laravel-translations-loader!@kirschbaum-development/laravel-translations-loader';

window.Vue = require('vue');
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: window.Locale,
    messages: languageBundle,
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    i18n: i18n
});

/**
 * Using with i18next
 */
import i18next from 'i18next';
import i18nextLanguageBundle from '@kirschbaum-development/laravel-translations-loader?namespace=translation!@kirschbaum-development/laravel-translations-loader';

i18next.init({
    lng: window.Locale,
    debug: true,
    resources: i18nextLanguageBundle
}, function (err, t) {
    console.log(i18next.t('Hello World'));
    console.log(i18next.t('auth.failed'));
});
