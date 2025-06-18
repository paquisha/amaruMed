import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {MedicalRecord} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class MedicalRecordCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(MedicalRecord, {
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
      optional: ['patientId']
    })
  }

  /**
   * Specifications to request partial body.
   */
  requestPartialBoby(): RequestBodyObject {
    return requestBodySchema(MedicalRecord, {
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
   * Specifications to response total of medical records.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(MedicalRecord, description)
  }

  /**
   * Specifications to response one medical record.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      MedicalRecord,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one medical record whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(MedicalRecord, undefined, description)
  }

  /**
   * Specifications to response array of medical records.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(MedicalRecord, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of medical records updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(MedicalRecord, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(MedicalRecord, method, description)
  }
}

export default new MedicalRecordCRUDSpecs()
