<template>
  <div class="q-pa-md">
      <div v-if="checkLoading">{{showLoading()}}</div>
  </div>
</template>

<script>
export default {
    name: "Loading",
    methods: {
        showLoading () {
            this.$q.loading.show({
                message: 'Please wait....'
            })
            const goInterval = setInterval(() => {
                if (this.$store.state.stateloading == false) {
                    this.$q.loading.hide()
                    clearInterval(goInterval)
                }
            }, 100)
        }
    },
    computed: {
        checkLoading() {
            return (this.$store.state.stateloading) ? true : false
        }
    }
}
</script>