import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Permission} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class PermissionCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Permission, {
      exclude: [
        'createdAt',
        'createdBy',
        'editedAt',
        'editedBy',
        'deleted',
        'deletedAt',
        'deletedBy',
        'id'
      ]
    })
  }

  /**
   * Specifications to request partial body.
   */
  requestPartialBoby(): RequestBodyObject {
    return requestBodySchema(Permission, {
      partial: true,
      exclude: [
        'createdAt',
        'createdBy',
        'editedAt',
        'editedBy',
        'deleted',
        'deletedAt',
        'deletedBy',
        'id'
      ]
    })
  }

  /**
   * Specifications to response total of permissions.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Permission, description)
  }

  /**
   * Specifications to response one permission.
   */
  responseOne(description?: string): OperationObject {
    return responseOneSchema(
      Permission,
      {
        includeRelations: true,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response array of permissions.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(Permission, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of permissions updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Permission, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Permission, method, description)
  }
}

export default new PermissionCRUDSpecs()
