import { useRouter } from "next/router";
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from "next/link";
import { format } from "url";
let counter: number = 0

export const getServerSideProps = (async () => {
  counter++;

  return { props: { initialPropsCounter: counter } }
}) satisfies GetServerSideProps<{ initialPropsCounter: number }>

export default function Home({
  initialPropsCounter
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { pathname, query } = router;
  const { counter } = query as { counter?: string }
  const reload = () => {
    router.push(format({ pathname, query }))
  }
  const incrementCounter = (shallow: boolean) => {
    const currentCounter = counter ? parseInt(counter) : 0
    const href = `/?counter=${currentCounter + 1}`;
    router.push(href, href, { shallow })
  }
  const reset = () => {
    router.push('/')
  }
  return (
    <div className="flex gap-2">
      <h2>This is the Home Page</h2>
      <Link href="/about">About</Link>
      <button onClick={reload}>Reload</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => incrementCounter(false)}>Change State Counter without shallow</button>
      <button onClick={() => incrementCounter(true)}>Change State Counter with shallow</button>
      <div>
        <p>getServerSideProps ran for {initialPropsCounter} times.</p>
        <p>Counter: {query.counter || 0}.</p>
      </div>
    </div>
  );
}
