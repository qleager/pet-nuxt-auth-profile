import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const url = useRuntimeConfig(event).apiUrl
  const path = event.path.replace(/^\/api/, '')
  const target = joinURL(url, path)

  return proxyRequest(event, target, {
    onResponse: async (event, response) => {
      const clonedResponse = response.clone()
      const data = await clonedResponse.json()

      setCookie(event, 'notSecureToken', data.token, {
        // httpOnly: true,
        // secure: true,
        path: '/',
        maxAge: 1070,
      })
    },
  })
})
