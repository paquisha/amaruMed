import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {User} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class UserCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(User, {
      exclude: [
        'createdAt',
        'createdBy',
        'editedAt',
        'editedBy',
        'deleted',
        'deletedAt',
        'deletedBy',
        'id',
        'password',
        'isActive',
        'emailVerified',
        'passResetToken',
        'verificationToken'
      ]
    })
  }

  /**
   * Specifications to request partial body.
   */
  requestPartialBoby(): RequestBodyObject {
    return requestBodySchema(User, {
      partial: true,
      exclude: [
        'createdAt',
        'createdBy',
        'editedAt',
        'editedBy',
        'deleted',
        'deletedAt',
        'deletedBy',
        'id',
        'password',
        'emailVerified',
        'passResetToken',
        'verificationToken'
      ]
    })
  }

  /**
   * Specifications to response total of users.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(User, description)
  }

  /**
   * Specifications to response one user.
   */
  responseOne(description?: string): OperationObject {
    return responseOneSchema(
      User,
      {
        includeRelations: true,
        exclude: ['password', 'verificationToken', 'passResetToken']
      },
      description
    )
  }

  /**
   * Specifications to response array of users.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(User, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of users updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(User, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(User, method, description)
  }
}

export default new UserCRUDSpecs()
