<template>
    <div v-if="showNotif">{{ goNotif() }}</div>
</template>

<script>
export default {
  name: 'Notify',
  methods: {
    goNotif () {
      this.$q.notify({
        type: (this.$store.state.notiftype == '1') ? 'positive' : 'negative',
        position: 'top',
        message: this.$store.state.msgnotif
      })
      this.$store.dispatch('actemptynotify')
    }
  },
  computed: {
    showNotif() {
      return this.$store.state.msgnotif
    }
  }
}
</script>
