import {belongsTo, hasOne, model} from '@loopback/repository'
import {Audit} from './audit.model'
import {Medic} from './medic.model'
import {boolean, character, email, id, integer} from './pg'
import {Role} from './role.model'

@model({
  name: 'tuser',
  settings: {
    hiddenProperties: ['password', 'verificationToken', 'passResetToken'],
    foreignKeys: {
      fkUserRole: {
        name: 'fk_user_role',
        entity: 'Role',
        entityKey: 'id',
        foreignKey: 'roleid'
      },
      fkUserProfile: {
        name: 'fk_user_profile',
        entity: 'Profile',
        entityKey: 'id',
        foreignKey: 'profileid'
      }
    },
    indexes: {
      uniqueUserEmail: {
        keys: { email: 1 },
        options: { unique: true }
      },
      uniquePassResetTokenCode: {
        keys: { passResetToken: 1 },
        options: { unique: true }
      },
      uniqueVerificationToken: {
        keys: { verificationToken: 1 },
        options: { unique: true }
      }
    }
  }
})
export class User extends Audit {
  @id() id?: number

  @email({ required: true }) email: string

  @character({ length: 75 }) password?: string

  @boolean({ required: true, default: true }) isActive?: boolean

  @boolean({ default: false, required: false }) emailVerified?: boolean

  @character({ length: 200 }) verificationToken: string

  @character({ length: 200 }) passResetToken?: string

  @integer({ required: true }) profileId: number

  @hasOne(() => Medic, { keyTo: 'userId' }) medic: Medic

  @belongsTo(() => Role, {}, { required: true }) roleId: number

  constructor(data?: Partial<User>) {
    super(data)
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations
