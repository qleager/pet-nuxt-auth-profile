<script lang="ts" setup>
const { $api } = useNuxtApp()

const auth = ref({
  username: 'emilys',
  password: 'emilyspass',
})

const onSubmit = async () => {
  try {
    await $api.auth.login(auth.value)
    navigateTo('/profile')
  }
  catch (error) {
    console.error('Error login fetching:', error.response?.data || error.message)
  }
}
</script>

<template>
  <section class="auth">
    <Card>
      <template #content>
        <div class="auth-card">
          <h1 class="auth-card__title">
            LOGIN
          </h1>
          <InputText
            id="username"
            v-model="auth.username"
            placeholder="username"
          />
          <InputText
            id="password"
            v-model="auth.password"
            type="password"
            placeholder="Password"
          />
          <Button
            label="Login"
            @click="onSubmit"
          />
        </div>
      </template>
    </Card>
  </section>
</template>

<style>
.auth {
  display: flex;
  justify-content: center;
}
.auth-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.auth-card__title {
  margin: 0;
}
</style>
