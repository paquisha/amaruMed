import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Medic} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class MedicCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Medic, {
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
      optional: ['userId', 'lastName', 'firstName', 'address']
    })
  }

  /**
   * Specifications to request partial body.
   */
  requestPartialBoby(): RequestBodyObject {
    return requestBodySchema(Medic, {
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
   * Specifications to response total of medics.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Medic, description)
  }

  /**
   * Specifications to response one medic.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      Medic,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one medic whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(Medic, undefined, description)
  }

  /**
   * Specifications to response array of medics.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(Medic, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of medics updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Medic, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Medic, method, description)
  }
}

export default new MedicCRUDSpecs()
