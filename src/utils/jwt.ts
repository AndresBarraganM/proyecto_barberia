import jwt from 'jsonwebtoken'
import { env } from '../config/env'
import { JwtPayload, JwtInput } from '../types'

export const signToken = (payload: JwtInput): string => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'],
  })
}

export const decodeToken = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload
}

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload
}