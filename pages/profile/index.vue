<script lang="ts" setup>
const { $api } = useNuxtApp()

const profile = ref()

try {
  const { data } = await useAsyncData(() => $api.user.me())
  console.log(data.value)
  profile.value = data.value
}
catch (error) {
  console.error('Error user me fetching:', error.response?.data || error.message)
}
</script>

<template>
  <section class="profile">
    <Card>
      <template #content>
        <Avatar :image="profile.image" />
        <h1 class="username">
          {{ profile.firstName }} {{ profile.lastName }}
        </h1>
        <i class="employer">{{ profile.company.title }}</i>
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

.employer {
  display: block;
  margin: 16px 0;
}
</style>
