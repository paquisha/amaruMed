import {OperationObject} from '@loopback/rest'
import {Group} from '../../models'
import {responseListSchema, responseOneSchema} from './CRUDSpecs'

class GroupSpect {
  responseList(description?: string): OperationObject {
    return responseListSchema(Group, undefined, description)
  }

  responseOne(description?: string): OperationObject {
    return responseOneSchema(Group, undefined, description)
  }
}

export default new GroupSpect()
