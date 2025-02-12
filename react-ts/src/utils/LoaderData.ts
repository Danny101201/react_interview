export const loader = async () => {
  return {
    data: 'some data'
  }
}

export type LoaderData = Awaited<ReturnType<typeof loader>>