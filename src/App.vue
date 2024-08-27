<script setup lang="ts">
import ActivityTable from './components/ActivityTable.vue'
import activities from './assets/activities.ts'
import Node from "./components/Node.vue"
const data = {
  activity: "A",
  float: 5,
  es: 0,
  ls: 1,
  ef: 3,
  lf: 4
}
</script>

<template>
  <ActivityTable id="nodes" :activities="activities" />
  <div id="nodes" style="width:auto; height:300px;padding: 5px; border: 1px solid black;">  
    <Node :data="data" />
  </div>
</template>

<style scoped>

</style>
