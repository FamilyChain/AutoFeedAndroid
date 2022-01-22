<template>
  <q-page class="flex flex-center">
    <div v-if="!checkstatus">{{showStatus()}}</div>
    <q-toggle
      v-else
      v-model="statusapp"
      checked-icon="check"
      color="green"
      unchecked-icon="clear"
      @click="changeStatus()"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      checkstatus: false,
      statusapp: true
    }
  },
  methods: {
    showStatus() {
      this.$store.dispatch('actgetonoff');
      var goInt = setInterval(() => {
        const status = this.$store.state.statusapp;
        if (status == null) {
          return;
        } else {
          clearInterval(goInt);
          this.statusapp = status ? false : true;
          this.checkstatus = true;
        }
      }, 20);
    },
    changeStatus() {
      this.$store.dispatch('actsetonoff');
    }
  }
});
</script>
