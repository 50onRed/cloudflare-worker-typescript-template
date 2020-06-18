import CloudflareWorkerGlobalScope from 'types-cloudflare-worker'
declare const self: CloudflareWorkerGlobalScope

export async function handleFetchEvent(event: FetchEvent): Promise<Response> {
  return new Response(`Requested from ${event.request.url}`, { status: 200 })
}

self.addEventListener('fetch', (event: Event) => {
  const fetchEvent = event as FetchEvent
  fetchEvent.respondWith(handleFetchEvent(fetchEvent))
})
