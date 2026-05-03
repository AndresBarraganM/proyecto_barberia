import { Response } from 'express'
import { ApiResponse } from '../types'

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = 'OK',
  status = 200
): Response => {
  const body: ApiResponse<T> = { success: true, message, data }
  return res.status(status).json(body)
}

export const sendError = (
  res: Response,
  message: string,
  status = 400,
  errors?: string[]
): Response => {
  const body: ApiResponse = { success: false, message, errors }
  return res.status(status).json(body)
}
