import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Disease} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class DiseaseCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Disease, {
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
      optional: ['diseaseTypeId']
    })
  }

  /**
   * Specifications to request partial body.
   */
  requestPartialBoby(): RequestBodyObject {
    return requestBodySchema(Disease, {
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
   * Specifications to response total of diseases.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Disease, description)
  }

  /**
   * Specifications to response one disease.
   */
  responseOne(description?: string): OperationObject {
    return responseOneSchema(
      Disease,
      {
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response array of diseases.
   */
  responseList(description?: string, includeRelations?: boolean): OperationObject {
    return responseListSchema(Disease, { includeRelations }, description)
  }

  /**
   * Specifications to response count of diseases updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Disease, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Disease, method, description)
  }
}

export default new DiseaseCRUDSpecs()
