import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Option} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class OptionCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Option, {
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
    return requestBodySchema(Option, {
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
   * Specifications to response total of options.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Option, description)
  }

  /**
   * Specifications to response one option.
   */
  responseOne(description?: string): OperationObject {
    return responseOneSchema(
      Option,
      {
        includeRelations: true,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response array of options.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(Option, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of options updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Option, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Option, method, description)
  }
}

export default new OptionCRUDSpecs()
