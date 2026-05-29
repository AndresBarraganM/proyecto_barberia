import jwt from 'jsonwebtoken'
import { env } from '../config/env'
import { JwtPayload, JwtInput } from '../types'

export const signToken = (payload: JwtInput): string => {
  const exp = Math.floor(Date.now() / 1000) + Number(env.JWT_EXPIRES_IN)
  console.log(exp)
  return jwt.sign({ ...payload, exp }, env.JWT_SECRET)
}

export const decodeToken = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload
}

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload
}