<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  columns: {
    type: Array as () => Array<{ key: string; title: string }>,
    required: true
  },
  data: {
    type: Array<Record<string, any>>,
    default: () => []
  }
})
</script>
