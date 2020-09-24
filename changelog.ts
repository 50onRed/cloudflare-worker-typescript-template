import PromptSync from 'prompt-sync'
import fetch from 'node-fetch'
import child_process from 'child_process'

const prompt = PromptSync({ sigint: true })
const token = 'fill me in' // see other products for token
const products = 'someproduct' // example: my-search, pops etc.
const repo = 'cloudflare-shopify-api'

const title = prompt('Title (required) ')

if (!title) {
    console.error('Title is required')
    process.exit(1)
}

if (title.length > 100) {
    console.error('Title must be less than 100 characters')
    process.exit(2)
}

const issue = prompt('Issue ID: ')
const commitHash = child_process
  .execSync('git rev-parse HEAD')
  .toString()
  .trim()

fetch('https://app.rtxplatform.com/webhooks/changelog/', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    products: products,
    repository: repo,
    title: title,
    issue: issue,
    commit: commitHash
  })
}).then(result => {
    if (result.status !== 200) {
        console.error(result.statusText)
    }
}).catch(err => console.error(err))
