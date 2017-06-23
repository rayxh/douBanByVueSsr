import Vue from 'vue'
import { createRouter } from './router'
import { createStore } from './vuex/index'
import { sync } from 'vuex-router-sync'
import App from './app'

export function createApp (ssrContext) {
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}