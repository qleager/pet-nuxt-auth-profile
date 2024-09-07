<script lang="ts" setup>
const auth = ref({
  username: '',
  password: '',
})
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
            type="email"
            placeholder="Email"
          />
          <InputText
            id="password"
            v-model="auth.username"
            type="password"
            placeholder="Password"
          />
          <Button label="Login" />
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
