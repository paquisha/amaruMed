import {repository} from '@loopback/repository'
import {UserProfile} from '@loopback/security'
import {User} from '../models/user.model'
import {UserRepository} from '../repositories'

export interface AccountService {
  convertToUser(userProfile: UserProfile): Promise<User>
}

export class MyAccountService implements AccountService {
  constructor(@repository(UserRepository) public userRepository: UserRepository) {}

  async convertToUser(userProfile: UserProfile): Promise<User> {
    // eslint-disable-next-line
    let result: any = await this.userRepository.findOne({
      where: {
        email: userProfile.name
      }
    })

    const user: User = new User(result ?? undefined)
    return user
  }
}
