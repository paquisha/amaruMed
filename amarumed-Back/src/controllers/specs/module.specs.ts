import {OperationObject} from '@loopback/rest'
import {Module} from '../../models'
import {responseListSchema, responseOneSchema} from './CRUDSpecs'

class ModuleSpecs {
  responseList(description?: string): OperationObject {
    return responseListSchema(Module, undefined, description)
  }

  responseOne(description?: string): OperationObject {
    return responseOneSchema(Module, undefined, description)
  }
}

export default new ModuleSpecs()
