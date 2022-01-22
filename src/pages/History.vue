<template>
  <q-page>
    <div v-if="!checkhistory">{{showHistory()}}</div>
    <q-table
      title="History"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

const columns = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'center',
    field: 'id',
    format: val => `${val}`
  },
  { name: 'time', align: 'center', label: 'Time', field: 'time' }
]

export default defineComponent({
  name: 'PageHistory',
  data() {
    return {
      checkhistory: false,
      columns: columns,
      rows: [{ id: 0, time: 0 }]
    }
  },
  methods: {
      showHistory() {
        this.checkhistory = true;
        this.$store.dispatch('actshowhistory');
        var goInt = setInterval(() => {
          if (this.$store.state.datahistory) {
            clearInterval(goInt);
            this.rows = this.$store.state.datahistory;
          }
        }, 20);
      }
  }
});
</script>