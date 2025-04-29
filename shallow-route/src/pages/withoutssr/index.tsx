import { useRouter } from "next/router";
import Link from "next/link";
import { format } from "url";
// cause Hydration failed
const randomNumber: number = Math.random()
let numberCount = 0
numberCount++
export default function Home() {
  const router = useRouter();
  const { pathname, query } = router;
  const { counter } = query as { counter?: string }
  const reload = () => {
    router.push(format({ pathname, query }))
  }
  const incrementCounter = (shallow: boolean) => {
    const currentCounter = counter ? parseInt(counter) : 0
    const href = `/withoutssr?counter=${currentCounter + 1}`;
    router.push(href, href, { shallow })
  }

  return (
    <div className="flex gap-2">
      <h2>This is the Home Page</h2>
      <Link href="/about">About</Link>
      <button onClick={reload}>Reload</button>
      <button onClick={() => incrementCounter(false)}>Change State Counter without shallow</button>
      <button onClick={() => incrementCounter(true)}>Change State Counter with shallow</button>
      <div>
        <p>numberCount {numberCount}</p>
        <p>Counter: {query.counter || 0}.</p>
      </div>
    </div>
  );
}
