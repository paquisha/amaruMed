import {hasOne, model} from '@loopback/repository'
import {Audit} from './audit.model'
import {address, character, dni, email, filename, id, passport, phone} from './pg'
import {User} from './user.model'

@model({
  settings: {
    indexes: {
      uniqueProfileEmail: {
        keys: { email: 1 },
        options: { unique: true }
      },
      uniqueProfileDni: {
        keys: { dni: 1 },
        options: { unique: true }
      },
      uniqueProfilePassport: {
        keys: { passport: 1 },
        options: { unique: true }
      }
    }
  }
})
export class Profile extends Audit {
  @id() id?: number

  @dni({}) dni?: string

  @passport({}) passport?: string

  @character({ required: true, length: 25 }) lastName: string

  @character({ required: true, length: 25 }) firstName: string

  @phone({}) telephone?: string

  @phone({}) mobile?: string

  @email({ required: true }) email: string

  @filename({}) image?: string

  @address({ required: true }) address: string

  @hasOne(() => User)
  user: User

  constructor(data?: Partial<Profile>) {
    super(data)
  }
}

export interface ProfileRelations {
  // describe navigational properties here
}

export type ProfileWithRelations = Profile & ProfileRelations
