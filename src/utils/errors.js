import logger from './logger'

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

export const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  // logger.error({
  //   message: error.messages,
  //   stack: error.stack,
  // })
  logger.error(new Error(error.message))

  res.status(statusCode)
  res.json({
    message: error.message,
    statck: process.env.NODE_ENV === 'production' ? '💩' : error.stack,
  })
}

