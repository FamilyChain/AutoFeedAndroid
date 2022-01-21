<template>
  <q-layout view="lHh Lpr lFf">
    <div v-if="!statelogin">{{ checklogin() }}</div>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Feed App
        </q-toolbar-title>

        <div>Developer by Ryan Tri Kurniawan</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksList = [
  {
    title: 'Home',
    caption: 'manage app',
    icon: 'mdi-home',
    link: '/#/'
  },
  {
    title: 'History',
    caption: 'list feed',
    icon: 'mdi-format-list-bulleted',
    link: '/#/'
  },
  {
    title: 'Logout',
    caption: 'logout',
    icon: 'mdi-logout-variant',
    link: '/#/logout'
  }
];

import EssentialLink from 'components/EssentialLink.vue'
import { defineComponent, ref } from  'vue';
import { LocalStorage } from 'quasar';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      statelogin: false,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    checklogin() {
      console.log('wew')
      this.statelogin = true;
      if (LocalStorage.getItem('datalogin')) {
        this.$store.dispatch('actloadlogin');
      } else {
        window.location = '/#/login';
      }
    }
  }
})
</script>
