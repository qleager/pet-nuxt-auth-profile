export default defineNuxtRouteMiddleware(async (to) => {
  const accessToken = useCookie('notSecureToken')

  if (import.meta.client) {
    if (to.name !== 'auth' && !accessToken.value) {
      return navigateTo('/auth')
    }
  }

  if (import.meta.server) {
    if (to.name === 'auth' && accessToken.value) {
      return navigateTo('/')
    }
  }
})
