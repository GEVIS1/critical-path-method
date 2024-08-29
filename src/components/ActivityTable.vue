<script setup lang="ts">
import { inject } from 'vue';

const activityData = inject("activityData");
</script>

<template>
  <table id="activity-table">
    <tr>
        <th>Activity</th>
        <th class="activity prerequisite">Pre-requisites</th>
        <th>Time</th>
    </tr>
    <tr v-for="activity in activityData">
        <td class="activity name"><input v-model.lazy="activity.name"></input></td>
        <td class="activity prerequisite"><input v-model.lazy="activity.pre"></td>
        <td class="activity time"><input v-model.lazy="activity.time"></td>
    </tr>
  </table>
</template>

<style scoped>
    table, th, td {
        border: 1px solid black;
    }
    
    input {
        box-sizing: border-box;
        border: none;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    
    table {
        empty-cells: show;
    }
    
    td {
        padding: 0;
        margin: 0;
        vertical-align: middle;
        height: 1.7em;
    }
    
    td.activity.name {
        min-width: 10em;
    }
    
    td.activity {
        text-align: left;
        padding-left: 0.3em;
    }
    
    td.activity.prerequisite, th.activity.prerequisite {
        max-width: 5em;
    }
    
    td.activity.time, th.activity.time {
        max-width: 5em;
    }
    
    td.activity > input:focus {
        outline: none;
        outline-width: 0;
    }

</style>
