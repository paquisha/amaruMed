import {TokenService} from '@loopback/authentication'
import {inject} from '@loopback/context'
import {HttpErrors} from '@loopback/rest'
import {UserProfile} from '@loopback/security'
import jwt from 'jsonwebtoken'
import {TokenBindings} from '../keys'

export class JWTSessionService implements TokenService {
  constructor(
    @inject(TokenBindings.SECRET) private jwtSecret: string,
    @inject(TokenBindings.EXPIRES_IN) private jwtExpiresIn: string
  ) {}

  async verifyToken(token: string): Promise<UserProfile> {
    if (!token) {
      throw new HttpErrors.Unauthorized('NO_TOKEN')
    }

    let userProfile: UserProfile
    try {
      // decode user profile from token
      userProfile = jwt.verify(token, this.jwtSecret) as UserProfile
    } catch (error) {
      throw new HttpErrors.Unauthorized('TOKEN_EXPIRED')
    }

    return userProfile
  }

  async generateToken(userProfile: UserProfile): Promise<string> {
    if (!userProfile) {
      throw new HttpErrors.Unauthorized('Error generating token: userProfile is null')
    }

    // Generate a JSON Web Token
    let token: string
    try {
      token = jwt.sign(userProfile, this.jwtSecret, {
        expiresIn: Number(this.jwtExpiresIn)
      })
    } catch (error) {
      throw new HttpErrors.Unauthorized(`Error encoding token: ${error}`)
    }

    return token
  }
}
