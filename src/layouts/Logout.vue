<template>
    <q-layout>
        <div v-if="!statelogout">{{ logout() }}</div>
    </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { LocalStorage } from 'quasar';

export default defineComponent({
  name: 'Logout',
  data() {
    return {
        statelogout: false
    }
  },
  methods: {
    logout() {
        this.statelogout = true;
        LocalStorage.clear();
        window.location = '/#/login';
    }
  }
});
</script>
