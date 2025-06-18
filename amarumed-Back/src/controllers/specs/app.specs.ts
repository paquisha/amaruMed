import {OperationObject} from '@loopback/rest'

/**
 * specifications to response for app info.
 */
export function app(): OperationObject {
  return {
    responses: {
      '200': {
        title: 'Application',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                version: { type: 'string' },
                author: { type: 'string' },
                repository: { type: 'string' },
                license: { type: 'string' },
                company: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    logo: { type: 'string' },
                    primaryColor: { type: 'string' },
                    secondaryColor: { type: 'string' }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export default app()
