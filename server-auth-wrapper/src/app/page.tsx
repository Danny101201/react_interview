import { WithAuth, WithAuthProps } from "@/components/WithAuth";

async function Home({ user }: WithAuthProps) {
  return (
    <p>name: {user.name}</p>
  );
}


export default WithAuth(Home)