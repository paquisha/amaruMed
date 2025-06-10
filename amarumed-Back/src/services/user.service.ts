import {UserService} from '@loopback/authentication'
import {inject} from '@loopback/context'
import {repository} from '@loopback/repository'
import {HttpErrors} from '@loopback/rest'
import {securityId, UserProfile} from '@loopback/security'
import {DecryptedHasher} from '.'
import {PasswordBindings} from '../keys'
import {User} from '../models'
import {UserRepository} from '../repositories'
import {Credentials} from '../utils'

export class MyUserService implements UserService<User, Credentials> {
  constructor(
    @repository(UserRepository) public userRepository: UserRepository,
    @inject(PasswordBindings.HASHER) public bcrypt: DecryptedHasher
  ) {}

  async verifyCredentials(credentials: Credentials): Promise<User> {
    const result = await this.userRepository.findOne({
      where: { email: credentials.email.toLowerCase() }
    })
    if (!result) throw new HttpErrors.Unauthorized('BAD_ACCOUNT')
    if (result.deleted === true || result.isActive === false)
      throw new HttpErrors.Unauthorized('INACTIVE_ACCOUNT')
    if (result.emailVerified === false)
      throw new HttpErrors.Unauthorized('EMAIL_NOT_VERIFIED')

    const user: User = new User(result || undefined)

    const passwordMatched = user.password
      ? await this.bcrypt.compare(credentials.password, user.password)
      : false

    if (passwordMatched) return user
    else throw new HttpErrors.Unauthorized('BAD_PASS')
  }

  convertToUserProfile(user: User): UserProfile {
    // eslint-disable-next-line
    // @ts-ignore
    return { [securityId]: user.id, name: user.email }
  }
}
