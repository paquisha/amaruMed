import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Role} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class RoleCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Role, {
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
    return requestBodySchema(Role, {
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
   * Specifications to response total of roles.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Role, description)
  }

  /**
   * Specifications to response one role.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      Role,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one role whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(Role, undefined, description)
  }

  /**
   * Specifications to response array of roles.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(Role, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of roles updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Role, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Role, method, description)
  }
}

export default new RoleCRUDSpecs()
