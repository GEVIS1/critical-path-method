<script setup lang="ts">
import { provide, reactive } from 'vue';

import ActivityTable from './components/ActivityTable.vue'
import Node from "./components/Node.vue"
export interface Activity {
    name: string
    id: string
    pre: string
    time: number
}

interface ActivityTableData {
    activities: Array<Activity>
}
let data = reactive<ActivityTableData>({
    activities: [{
        name: "Shower",
        id: "A",
        pre: "-",
        time: 3
    },
    {
        name: "Get dressed",
        id: "B",
        pre: "A",
        time: 2
    },
    {
        name: "Get car",
        id: "C",
        pre: "-",
        time: 15
    },
    {
        name: "Make breakfast",
        id: "D",
        pre: "-",
        time: 3
    },
    {
        name: "Eat breakfast",
        id: "E",
        pre: "D",
        time: 3
    },
    {
        name: "Drive to school",
        id: "F",
        pre: "C,E",
        time: 20
    }]
});
provide("activityData", data.activities)
</script>

<template>
  <ActivityTable />
  <div id="nodes" style="width:auto; height:300px;padding: 5px; border: 1px solid black;">  
    <Node :data="data.activities[0]" />
  </div>
</template>

<style scoped>

</style>
