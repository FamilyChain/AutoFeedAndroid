<template>
  <Notify />
  <router-view />
  <Loading />
</template>
<script>
import { defineComponent } from 'vue';
import Notify from './components/Notify.vue';
import Loading from './components/Loading.vue';

export default defineComponent({
  name: 'App',
  components: { Notify, Loading }
})
</script>
