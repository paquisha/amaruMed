import {TokenService, UserService} from '@loopback/authentication'
import {BindingKey} from '@loopback/context'
import {User} from './models'
import {AccountService, DecryptedHasher, EmailService, JWTService, StorageService} from './services'
import {Credentials} from './utils'

export namespace PasswordBindings {
  export const HASHER = BindingKey.create<DecryptedHasher>('services.hasher')
  export const ROUNDS = BindingKey.create<number>('services.hasher.round')
}

export namespace UserBindings {
  export const SERVICE = BindingKey.create<UserService<User, Credentials>>(
    'services.user.service'
  )
}

export namespace AccountBindings {
  export const SERVICE = BindingKey.create<AccountService>('services.account.service')
}

export namespace TokenBindings {
  export const SECRET = BindingKey.create<string>('authentication.jwt.secret')
  export const EXPIRES_IN = BindingKey.create<string>(
    'authentication.jwt.expires.in.seconds'
  )
  export const SERVICE = BindingKey.create<JWTService>(
    'services.authentication.jwt.service'
  )
  export const SESSION_SERVICE = BindingKey.create<TokenService>(
    'services.authentication.jwt.session.service'
  )
}

export namespace StorageBindings {
  export const SERVICE = BindingKey.create<StorageService>('services.storage.service')
}

export namespace EmailBindings {
  export const SERVICE = BindingKey.create<EmailService>('services.email.service')
}
