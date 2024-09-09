import UserModule from '~/repository/modules/user.module'
import AuthModule from '~/repository/modules/auth.module'

export default defineNuxtPlugin(() => {
  const event = useRequestEvent()

  const apiFetcher = $fetch.create({
    baseURL: '/api',
    headers: event ? event.headers : undefined,
  })

  const modules = {
    auth: new AuthModule(apiFetcher),
    user: new UserModule(apiFetcher),
  }

  return {
    provide: {
      api: modules,
    },
  }
})
