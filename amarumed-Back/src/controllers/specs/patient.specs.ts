import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Patient} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class PatientCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Patient, {
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
    return requestBodySchema(Patient, {
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
   * Specifications to response total of patients.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Patient, description)
  }

  /**
   * Specifications to response one patient.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      Patient,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one patient whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(Patient, undefined, description)
  }

  /**
   * Specifications to response array of patients.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(Patient, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of patients updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Patient, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Patient, method, description)
  }
}

export default new PatientCRUDSpecs()
