import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Rpe} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class RpeCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Rpe, {
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
    return requestBodySchema(Rpe, {
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
   * Specifications to response total of rpes.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Rpe, description)
  }

  /**
   * Specifications to response one rpe.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      Rpe,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one rpe whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(Rpe, undefined, description)
  }

  /**
   * Specifications to response array of rpes.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(Rpe, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of rpes updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Rpe, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Rpe, method, description)
  }
}

export default new RpeCRUDSpecs()
