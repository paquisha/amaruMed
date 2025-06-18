import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {ExamType} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class ExamTypeCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(ExamType, {
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
    return requestBodySchema(ExamType, {
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
   * Specifications to response total of exam types.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(ExamType, description)
  }

  /**
   * Specifications to response one exam type.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      ExamType,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response array of exam types.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(ExamType, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of exam types updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(ExamType, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(ExamType, method, description)
  }
}

export default new ExamTypeCRUDSpecs()
