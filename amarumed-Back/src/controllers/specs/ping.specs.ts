import {OperationObject} from '@loopback/rest'

/**
 * specifications to response for ping.
 */
export function ping(): OperationObject {
  return {
    responses: {
      '200': {
        title: 'PingResponse',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean' },
                greeting: { type: 'string' },
                date: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }
}

export default ping()
