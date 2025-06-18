import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Antecedent} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class AntecedentCRUDSpecs implements CRUDSpecScheme {
  /**
   * Specifications to request a body.
   */
  requestBody(): RequestBodyObject {
    return requestBodySchema(Antecedent, {
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
    return requestBodySchema(Antecedent, {
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
   * Specifications to response total of antecedents.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Antecedent, description)
  }

  /**
   * Specifications to response one antecedent.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      Antecedent,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one antecedent whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(Antecedent, undefined, description)
  }

  /**
   * Specifications to response array of antecedents.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(Antecedent, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of antecedents updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Antecedent, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Antecedent, method, description)
  }
}

export default new AntecedentCRUDSpecs()
