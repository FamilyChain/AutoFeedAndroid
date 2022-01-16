<template>
  <q-page class="flex flex-center">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md text-center"
    >
      <q-input
        filled
        v-model="privatekey"
        label="Your Private Key *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageLogin',
  data() {
    return {
      privatekey: null
    }
  },
  methods: {
    onSubmit () {
      if (this.privatekey) {
        this.$store.dispatch("actlogin", {
          privatekey: this.privatekey
        })
      } else {
        return;
      }
    },
    onReset () {
      this.privatekey = null;
      this.$store.dispatch('actsetonoff');
    }
  }
});
</script>
