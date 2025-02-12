const APR_ERROR_CODE = [400, 401, 403, 404, 500, 502, 504] as const
export type APIErrorCode = typeof APR_ERROR_CODE[number]
type APIErrorType =
  | 'validate'
  | 'unauthorized'
  | 'notFound'
  | 'server'

export type APIErrorMapValue = {
  code: APIErrorCode,
  description: string,
  message: string,
  name: string
}
const API_ERROR_MAP = new Map<APIErrorCode, APIErrorMapValue>()
API_ERROR_MAP.set(400, {
  code: 400,
  description: "RequestedFeatureNotEnabled",
  message: "Your browser sent a bad request.",
  name: "BadRequest",
})

API_ERROR_MAP.set(401, {
  code: 401,
  description: "RequestNotIncludeAuthenticationToken",
  message: "You don't have access to this content.",
  name: "UnauthorizedAccess",
});

API_ERROR_MAP.set(404, {
  code: 404,
  description: "MayHaveRemovedOrTheLinkTooOld",
  message: "Oops! The content you are looking for can’t be found. ",
  name: "NotFound",
});

API_ERROR_MAP.set(500, {
  code: 500,
  name: "InternalError",
  message: "An unexpected server error occurred.",
  description: "MayHaveEncounteredServerIssue",
});


type APIErrorProps = {
  type: keyof typeof APIError.typeToCode,
  message?: string,
  description?: string
}
export class APIError extends Error {
  public description: string
  public statusCode: APIErrorCode
  public name: string

  static typeToCode: Record<APIErrorType, APIErrorCode> = {
    validate: 400,
    unauthorized: 401,
    notFound: 404,
    server: 500
  }
  constructor({ type, message, description }: APIErrorProps) {
    const Error_Info = API_ERROR_MAP.get(APIError.typeToCode[type]) as APIErrorMapValue
    super(message || Error_Info.message)
    this.description = description || Error_Info.description
    this.name = Error_Info.name
    this.statusCode = Error_Info.code
    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this)
  }
}

export const getErrorTypeByErrorCode = (code: APIErrorCode): APIErrorType => {
  const result = Object.entries(APIError.typeToCode).find(([errorType, errorCode]) => errorCode === code) as [APIErrorType, APIErrorCode]
  return result[0] || 'notFound'
}

