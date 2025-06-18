import {getModelSchemaRef, OperationObject, RequestBodyObject} from '@loopback/rest'
import {MedicalExam} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class MedicalExamCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return {
      content: {
        'application/json': {
          schema: {
            type: 'array',
            description: 'disease id',
            items: getModelSchemaRef(MedicalExam, {
              exclude: [
                'createdAt',
                'createdBy',
                'editedAt',
                'editedBy',
                'deleted',
                'deletedAt',
                'deletedBy',
                'id',
                'medicalRecordId'
              ]
            })
          }
        }
      }
    }
  }

  /**
   * Specifications to request partial body.
   */
  requestPartialBoby(): RequestBodyObject {
    return requestBodySchema(MedicalExam, {
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
   * Specifications to response total of medical exams.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(MedicalExam, description)
  }

  /**
   * Specifications to response one medical exam.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      MedicalExam,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one medical exam whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(MedicalExam, undefined, description)
  }

  /**
   * Specifications to response array of medical exams.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(MedicalExam, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of medical exams updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(MedicalExam, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(MedicalExam, method, description)
  }
}

export default new MedicalExamCRUDSpecs()
