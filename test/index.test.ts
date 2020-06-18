import makeCloudflareWorkerEnv from 'cloudflare-worker-mock'
import CloudflareWorkerGlobalScope from 'types-cloudflare-worker'
declare const self: CloudflareWorkerGlobalScope

describe('worker', () => {
  beforeEach(() => {
    // Merge the Cloudflare Worker Environment into the global scope.
    Object.assign(global, makeCloudflareWorkerEnv())
    // Clear all module imports.
    jest.resetModules()
    // Import and init the Worker.
    jest.requireActual('../src/index')
  })

  it('should add listeners', async () => {
    expect(self.listeners.get('fetch')).toBeDefined()
  })

  it('should not throw server error', async () => {
    const request = new Request('/index-test')
    const response = await self.trigger('fetch', request)

    expect(response[0].status).toBeLessThan(500)
  })
})
