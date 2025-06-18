import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Exam} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class ExamCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Exam, {
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
      optional: ['examTypeId']
    })
  }

  /**
   * Specifications to request partial body.
   */
  requestPartialBoby(): RequestBodyObject {
    return requestBodySchema(Exam, {
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
   * Specifications to response total of exams.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Exam, description)
  }

  /**
   * Specifications to response one exam.
   */
  responseOne(description?: string): OperationObject {
    return responseOneSchema(
      Exam,
      {
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response array of exams.
   */
  responseList(description?: string, includeRelations?: boolean): OperationObject {
    return responseListSchema(Exam, { includeRelations }, description)
  }

  /**
   * Specifications to response count of exams updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Exam, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Exam, method, description)
  }
}

export default new ExamCRUDSpecs()
