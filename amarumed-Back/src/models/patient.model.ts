import {hasMany, hasOne, model} from '@loopback/repository'
import {Antecedent} from './antecedent.model'
import {Audit} from './audit.model'
import {MedicalRecord} from './medical-record.model'
import {address, character, date, dni, email, filename, id, integer, passport, phone} from './pg'

@model({
  settings: {
    indexes: {
      uniquePatientDNI: {
        keys: { dni: 1 },
        options: { unique: true }
      },
      uniquePatientPassport: {
        keys: { passport: 1 },
        options: { unique: true }
      },
      uniquePatientHC: {
        keys: { hc: 1 },
        options: { unique: true }
      }
    }
  }
})
export class Patient extends Audit {
  @id() id?: number

  @dni() dni?: string

  @passport() passport?: string

  @character({ required: true, length: 10 }) hc: string

  @character({ required: true, length: 25 }) lastName: string

  @character({ required: true, length: 25 }) firstName: string

  @character({ required: true, length: 100 }) ocupation: string

  @date({ required: true }) birthday: string

  @filename() image?: string

  @phone() telephone?: string

  @phone() mobile?: string

  @email() email?: string

  @address({ required: true }) address: string

  @integer() blooType?: number

  @integer({ required: true }) sex: number

  @integer({ required: true }) civilStatus: number

  @hasOne(() => Antecedent) antecedent: Antecedent

  @hasMany(() => MedicalRecord) medicalRecords: MedicalRecord[]

  constructor(data?: Partial<Patient>) {
    super(data)
  }
}

export interface PatientRelations {
  // describe navigational properties here
}

export type PatientWithRelations = Patient & PatientRelations
