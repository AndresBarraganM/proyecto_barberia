import { prisma } from '../config/database'
import bcrypt from 'bcryptjs'

export interface CreateTokenData {
  id_usuario: string
  token: string     
  expired_at: Date    
  created_at?: Date
  user_agent: string
  ip_adress: string
}

export const TokenModel = {
  create: (data: CreateTokenData) =>
    prisma.token.create({
      data: {
        token: data.token,
        created_at: data.created_at || new Date(),
        expired_at: data.expired_at,
        user_agent: data.user_agent,
        ip_adress: data.ip_adress,
        Usuario: { connect: { Id_usuario: data.id_usuario } },
      },
    }),
/* 
  revoke: (user_id: string, token_hash: string) =>
    prisma.token.updateMany({
      where: { user_id, token_hash },
      data: { revoked_at: Math.floor(Date.now() / 1000) },
    }),
 */
  findValidToken: (token_hash: string) =>
    prisma.token.findFirst({
      where: { token_hash, revoked_at: null },
    }),
}