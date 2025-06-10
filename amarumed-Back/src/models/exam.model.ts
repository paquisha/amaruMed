import {belongsTo, model} from '@loopback/repository'
import {Audit} from './audit.model'
import {ExamType} from './exam-type.model'
import {character, id} from './pg'

@model({
  settings: {
    foreignKeys: {
      fkUserRole: {
        name: 'fk_exam_examtype',
        entity: 'ExamType',
        entityKey: 'id',
        foreignKey: 'examtypeid'
      }
    }
  }
})
export class Exam extends Audit {
  @id() id?: number

  @character({ length: 100, required: true }) name: string

  @belongsTo(() => ExamType, {}, { required: true }) examTypeId: number

  constructor(data?: Partial<Exam>) {
    super(data)
  }
}

export interface ExamRelations {
  // describe navigational properties here
}

export type ExamWithRelations = Exam & ExamRelations
