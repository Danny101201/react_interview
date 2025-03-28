const fetchData = async (id: number): Promise<{ id: number; name: string }> => {
  if (id === 2) throw new Error("User not found");
  return { id, name: "Alice" };
};
const handleAsync = async<T>(promise: Promise<T>): Promise<[T, null] | [null, Error]> => {
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    return [null, error instanceof Error ? error : new Error(String(error))]
  }
}

const main = async () => {
  const [user, error] = await handleAsync(fetchData(2))
  if (error) {
    console.error("Error", error.message)
  } else {
    console.log(user.name)
  }
}
main()