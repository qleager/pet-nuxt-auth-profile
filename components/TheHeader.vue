<script lang="ts" setup>
</script>

<template>
<header class="header">
  <NuxtLink
    to="/"
    class="header__logo">
    PET-NUXT-AUTH-PROFILE
  </NuxtLink>
  
  <Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
</header>
</template>

<style>
.header {
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
}
</style>