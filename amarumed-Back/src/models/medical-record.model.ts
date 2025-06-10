import {hasMany, hasOne, model} from '@loopback/repository'
import {Audit} from './audit.model'
import {Cros} from './cros.model'
import {Diagnostic} from './diagnostic.model'
import {Disease} from './disease.model'
import {Exam} from './exam.model'
import {MedicalExam} from './medical-exam.model'
import {boolean, character, id, integer, text} from './pg'
import {Rpe} from './rpe.model'
import {VitalSign} from './vital-sign.model'

@model({
  settings: {
    foreignKeys: {
      fkMedRecPatient: {
        name: 'fk_medrec_patient',
        entity: 'Patient',
        entityKey: 'id',
        foreignKey: 'patientid'
      },
      fkMedRecMedic: {
        name: 'fk_medrec_medic',
        entity: 'Medic',
        entityKey: 'id',
        foreignKey: 'medicid'
      }
    }
  }
})
export class MedicalRecord extends Audit {
  @id() id?: number

  @character({ length: 200 }) reason: string

  @text() currentIllness?: string

  @boolean({ default: false }) done: boolean

  @boolean({ default: false }) canceled: boolean

  @integer({ required: true }) medicId?: number

  @integer({ required: true }) patientId: number

  @hasOne(() => Rpe) rpe: Rpe

  @hasOne(() => Cros) cros: Cros

  @hasOne(() => VitalSign) vitalSign: VitalSign

  @hasMany(() => Exam, { through: { model: () => MedicalExam } })
  exams: Exam[]

  @hasMany(() => Disease, { through: { model: () => Diagnostic } })
  diseases: Disease[]

  constructor(data?: Partial<MedicalRecord>) {
    super(data)
  }
}

export interface MedicalRecordRelations {
  // describe navigational properties here
}

export type MedicalRecordWithRelations = MedicalRecord & MedicalRecordRelations
