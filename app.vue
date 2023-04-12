<script setup>
  const { data } = await useFetch("/api/test");
  console.log("from api/test", data);
</script>

<template>
  <div>
    <h1>Nuxt3 test</h1>
    <MyCmp />
    <button v-if="!show" @click="show = true">Show Lazy Component</button>
    <LazyCmp v-if="show"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>