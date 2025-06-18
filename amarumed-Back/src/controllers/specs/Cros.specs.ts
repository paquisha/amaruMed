import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Cros} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class CrosCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Cros, {
      exclude: [
        'createdAt',
        'createdBy',
        'editedAt',
        'editedBy',
        'deleted',
        'deletedAt',
        'deletedBy',
        'id'
      ],
      optional: ['medicalRecordId']
    })
  }

  /**
   * Specifications to request partial body.
   */
  requestPartialBoby(): RequestBodyObject {
    return requestBodySchema(Cros, {
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
   * Specifications to response total of cros.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Cros, description)
  }

  /**
   * Specifications to response one cros.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      Cros,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one cros whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(Cros, undefined, description)
  }

  /**
   * Specifications to response array of cros.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(Cros, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of cros updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Cros, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Cros, method, description)
  }
}

export default new CrosCRUDSpecs()
