<script setup lang="ts">
import { Activity } from '../assets/activities';

defineProps<{ activities: Array<Activity> }>()


</script>

<template>
  <table id="activity-table">
    <tr>
        <th>Activity</th>
        <th class="activity prerequisite">Pre-requisites</th>
        <th>Time</th>
    </tr>
    <tr v-for="activity in activities">
        <td class="activity name"> {{ activity.name }} </td>
        <td class="activity prerequisite"> {{ activity.pre }} </td>
        <td class="activity time"> {{ activity.time }} </td>
    </tr>
  </table>
</template>

<style scoped>
    table, th, td {
        border: 1px solid black;
    }
    td {
        color: blue;
    }
    td.activity.name {
        min-width: 10em;
        text-align: left;
        padding-left: 0.5em;
    }
    td.activity.prerequisite, th.activity.prerequisite {
        max-width: 5em;
    }
</style>
