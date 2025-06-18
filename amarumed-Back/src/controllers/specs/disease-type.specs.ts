import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {DiseaseType} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class DiseaseTypeCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(DiseaseType, {
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
    return requestBodySchema(DiseaseType, {
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
   * Specifications to response total of disease types.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(DiseaseType, description)
  }

  /**
   * Specifications to response one disease type.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      DiseaseType,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response array of disease types.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(DiseaseType, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of disease types updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(DiseaseType, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(DiseaseType, method, description)
  }
}

export default new DiseaseTypeCRUDSpecs()
