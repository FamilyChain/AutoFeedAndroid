<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Feed App
        </q-toolbar-title>

        <div>Developer by Ryan Tri Kurniawan</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginLayout',
})
</script>
