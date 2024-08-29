<script setup lang="ts">
interface NodeData {
    activity: string
    float: number
    es: number
    ls: number
    ef: number
    lf: number
}
defineProps<{ data: NodeData }>()
</script>

<template>
  <table id="activity-table">
    <tr>
        <td class="cell es"> {{ data.es }} </td>
        <td class="cell activity"> {{ data.id }} </td>
        <td class="cell ef"> {{ data.ef }} </td>
    </tr>
    <tr>
        <td class="activity name" colspan="3"> {{ data.name }}</td>
    </tr>
    <tr>
        <td class="cell ls"> {{ data.ls }} </td>
        <td class="cell float"> {{ data.float }} </td>
        <td class="cell lf"> {{ data.lf }} </td>
    </tr>
  </table>
</template>

<style scoped>
    table, th, td {
        border: 1px solid black;
    }

    td.activity.name {
        padding: 0 0.5em 0 0.5em;
    }
</style>
