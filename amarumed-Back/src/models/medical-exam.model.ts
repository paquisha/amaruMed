import {model} from '@loopback/repository'
import {Audit} from './audit.model'
import {id, integer} from './pg'

@model({
  settings: {
    foreignKeys: {
      fkMedExamMedRec: {
        name: 'fk_medexam_medrec',
        entity: 'MedicalRecord',
        entityKey: 'id',
        foreignKey: 'medicalrecordid'
      },
      fkMedExamDisease: {
        name: 'fk_medexam_exam',
        entity: 'Exam',
        entityKey: 'id',
        foreignKey: 'examid'
      }
    }
  },
  indexes: {
    uniqueMedExamCombination: {
      keys: { medicalRecordId: 1, examId: 1 },
      options: { unique: true }
    }
  }
})
export class MedicalExam extends Audit {
  @id() id?: number

  @integer({ required: true }) medicalRecordId: number

  @integer({ required: true }) examId: number

  constructor(data?: Partial<MedicalExam>) {
    super(data)
  }
}

export interface MedicalExamRelations {
  // describe navigational properties here
}

export type MedicalExamWithRelations = MedicalExam & MedicalExamRelations
