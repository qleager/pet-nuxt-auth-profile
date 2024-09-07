<script lang="ts" setup>
</script>

<template>
  <section class="profile">
    <Card>
      <template #content>
        <Avatar />
        <h1 class="username" />
        <Button>Logout</Button>
      </template>
    </Card>
  </section>
</template>

<style>
.profile {
  display: flex;
  justify-content: center;
}
</style>
