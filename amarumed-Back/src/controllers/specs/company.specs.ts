import {OperationObject, RequestBodyObject} from '@loopback/rest'
import {Company} from '../../models'
import {requestBodySchema, responseOneSchema, responseSimpleSchema} from './CRUDSpecs'

class CompanySpecs {
  requestPartialBoby(): RequestBodyObject {
    return requestBodySchema(Company, { partial: true })
  }

  responseOne(description?: string): OperationObject {
    return responseOneSchema(Company, undefined, description)
  }

  responseSimple(
    method: 'PATCH' | 'PUT' | 'DELETE',
    description?: string
  ): OperationObject {
    return responseSimpleSchema(Company, method, description)
  }
}

export default new CompanySpecs()
