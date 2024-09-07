<script lang="ts" setup>
const onButtonClick = () => {
  navigateTo('/profile')
}
</script>

<template>
  <section class="index">
    <Button @click="onButtonClick">
      To Profile
    </Button>
  </section>
</template>

<style>
</style>
