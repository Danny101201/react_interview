import * as dotenv from 'dotenv'
dotenv.config()
import { z } from 'zod'

const envVariable = z.object({
  DATABASE_URL: z.string(),
  API_URL: z.string(),
})

declare global {
  namespace NodeJS {
    interface ProcessEnv
      extends z.infer<typeof envVariable> { }
  }
}

export const your_env_here = envVariable.parse(process.env)
