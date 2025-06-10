const pkg = require('../../package.json')

export interface Pkg {
  author: string
  name: string
  description: string
  version: string
  repository: string
  license: string
}

export const app: Pkg = {
  author: pkg.author,
  name: pkg.name,
  description: pkg.description,
  version: pkg.version,
  repository: pkg.repository.url,
  license: `${pkg.repository.url}/blob/master/LICENSE`
}
