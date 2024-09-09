import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const url = useRuntimeConfig(event).apiUrl
  const path = event.path.replace(/^\/api/, '')
  const target = joinURL(url, path)
  const cookies = parseCookies(event)

  return proxyRequest(event, target, {
    headers: {
      Authorization: `Bearer ${cookies.notSecureToken}`,
    },
  })
})
