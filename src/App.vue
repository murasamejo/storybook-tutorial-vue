<template>
  <div id="app">
    <task-list />
  </div>
</template>

<script>
import TaskList from './components/TaskList'

export default {
  name: "App",
  components: {
    TaskList
  }
};
</script>

<style>
@import "./index.css";
</style>
