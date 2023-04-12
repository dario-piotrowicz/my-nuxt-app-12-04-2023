<script setup>
  const { data } = await useFetch("/api/test");
  console.log("from api/test", data);
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
