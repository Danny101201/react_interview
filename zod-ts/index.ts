import { date, z } from "zod";

const successSchema = z.object({
  status: z.literal('success'),
  data: z.string()
})

const errorSchema = z.object({
  status: z.literal('failed'),
  error: z.instanceof(Error)
})

const apiResponseSchema = z.discriminatedUnion('status', [
  errorSchema,
  successSchema
])


type ApiResponseType = z.infer<typeof apiResponseSchema>
//   ^?
const errorResponse: ApiResponseType = {
  status: 'failed',
  error: new Error('some Error')
}
const successResponse: ApiResponseType = {
  status: 'success',
  data: 'some data'
}
const result = apiResponseSchema.safeParse({
  status: 'success',
  data: 'some data',
  error: new Error('some Error')
})
console.dir(result, { depth: 4 })