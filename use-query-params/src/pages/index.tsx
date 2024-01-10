import Image from 'next/image'
import { Inter } from 'next/font/google'

import {
  encodeQueryParams,
  DelimitedArrayParam,
  NumberParam,
  StringParam,
} from 'serialize-query-params';
import { searchStringToObject, objectToSearchString } from 'serialize-query-params'
import { Color, ColorArrayEnumParam } from '@/utils/param';
import { QueryParam } from '@/components/QueryParam';
import { QueryParams } from '@/components/QueryParams';
import { useRouter } from 'next/router';


// encode query
const encodeQuery = encodeQueryParams(
  { foo: NumberParam, bar: DelimitedArrayParam, color: ColorArrayEnumParam },
  { foo: 0, bar: ['a', 'b'], color: [Color.Blue, Color.Red] }
)
const query = objectToSearchString(encodeQuery) //  'foo=0&bar=a_b&color=Blue&color=Red'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <>
      <button onClick={()=>router.push('/')}>reset query</button>
      <QueryParam />
      <hr />
      <QueryParams />
    </>
  )
}
