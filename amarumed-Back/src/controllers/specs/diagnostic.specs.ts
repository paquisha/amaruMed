import {getModelSchemaRef, OperationObject, RequestBodyObject} from '@loopback/rest'
import {Diagnostic} from '../../models'
import {CRUDSpecScheme, requestBodySchema, responseCountSchema, responseListSchema, responseOneSchema, responsePatchCountSchema, responseSimpleSchema} from './CRUDSpecs'

class DiagnosticCRUDSpecs implements CRUDSpecScheme {
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
            items: getModelSchemaRef(Diagnostic, {
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
    return requestBodySchema(Diagnostic, {
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
   * Specifications to response total of diagnostics.
   */
  responseCount(description?: string): OperationObject {
    return responseCountSchema(Diagnostic, description)
  }

  /**
   * Specifications to response one diagnostic.
   */
  responseOne(description?: string, includeRelations?: boolean): OperationObject {
    return responseOneSchema(
      Diagnostic,
      {
        includeRelations,
        exclude: []
      },
      description
    )
  }

  /**
   * Specifications to response one diagnostic whitout relations.
   */
  responseOneSimple(description?: string): OperationObject {
    return responseOneSchema(Diagnostic, undefined, description)
  }

  /**
   * Specifications to response array of diagnostics.
   */
  responseList(description?: string): OperationObject {
    return responseListSchema(Diagnostic, { includeRelations: true }, description)
  }

  /**
   * Specifications to response count of diagnostics updates.
   */
  responsePatchCount(description?: string): OperationObject {
    return responsePatchCountSchema(Diagnostic, description)
  }

  /**
   * Specifications to response 204 status.
   * @param method methods allowed PATCH, PUT, DELETE
   */
  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Diagnostic, method, description)
  }
}

export default new DiagnosticCRUDSpecs()
