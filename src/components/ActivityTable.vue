<script setup lang="ts">
import { reactive } from 'vue';

import { Activity } from '../assets/activities';

const stringData = window.localStorage.getItem("activityData");
let storageActivities = null;

function isActivity(data: any): data is Activity {
    return typeof data.name === "string"
        && typeof data.pre  === "string"
        && (typeof data.time === "number" || typeof data.time === "string")
}

function isActivityArray(data: any): data is Array<Activity> {
    let result = true;

    for (const d in data) {
        if (!isActivity(d)) {
            result = false;
        }
    }

    return result;
}

console.log("stringData", stringData)

if (stringData) {
    storageActivities = JSON.parse(stringData);
}

console.log("storageActivities", storageActivities)

interface ActivityTableData {
    activities: Array<Activity>
}

//TODO: Update localStorage

let data = reactive<ActivityTableData>({
    activities: Array(10).fill({
        name: "\u00A0",
        pre: "\u00A0",
        time: "\u00A0"
    })
});

console.log("data.activities", data.activities)

// TODO: Test this for robustness
if (storageActivities !== null && isActivityArray(storageActivities)) {
    data.activities = storageActivities;
}

console.log("data.activities", data.activities)

console.log("data.activities[0]", data.activities[0])

console.log("data.activities[0].name", data.activities[0].name)
console.log("data.activities[0].pre", data.activities[0].pre)
console.log("data.activities[0].time", data.activities[0].time)

</script>

<template>
  <table id="activity-table">
    <tr>
        <th>Activity</th>
        <th class="activity prerequisite">Pre-requisites</th>
        <th>Time</th>
    </tr>
    <tr v-for="activity in data.activities">
        <td class="activity name"> {{ activity.name ?? '\u00A0' }}</td>
        <td class="activity prerequisite"> {{ activity.pre ?? '\u00A0' }}</td>
        <td class="activity time"> {{ activity.time ?? '\u00A0' }}</td>
    </tr>
  </table>
</template>

<style scoped>
    table, th, td {
        border: 1px solid black;
    }
    table {
        empty-cells: show;
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
