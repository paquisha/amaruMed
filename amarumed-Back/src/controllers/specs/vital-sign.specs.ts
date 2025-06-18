import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {VitalSign} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class VitalSignCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(VitalSign, {
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
    return requestBodySchema(VitalSign, {
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
   * Specifications to response total of vital signs.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(VitalSign, description)
  }

  /**
   * Specifications to response one vital sign.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      VitalSign,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one vital sign whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(VitalSign, undefined, description)
  }

  /**
   * Specifications to response array of vital signs.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(VitalSign, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of vital signs updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(VitalSign, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(VitalSign, method, description)
  }
}

export default new VitalSignCRUDSpecs()
