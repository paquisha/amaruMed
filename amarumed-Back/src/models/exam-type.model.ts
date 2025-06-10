import {hasMany, model} from '@loopback/repository'
import {Audit} from './audit.model'
import {Exam} from './exam.model'
import {character, id} from './pg'

@model()
export class ExamType extends Audit {
  @id() id?: number

  @character({ length: 50, required: true }) name: string

  @hasMany(() => Exam) exams: Exam[]

  constructor(data?: Partial<ExamType>) {
    super(data)
  }
}

export interface ExamTypeRelations {
  // describe navigational properties here
}

export type ExamTypeWithRelations = ExamType & ExamTypeRelations
