import React, { useEffect, useState } from 'react'

const fetchTodos = (id) => id
function Text() {
  const [ID, setID] = useState()
  const [userId, setuserId] = useState(10)

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const json = await fetchTodos(userId);
      console.log(ignore)
      if (!ignore) {
        // setID(json);
      }
    }

    startFetching();

    return () => {
      console.log('cleanup')
      ignore = true;
    };
  }, [userId]);

  return (
    <>

      <div>Text {ID}</div>
      <input type="number" onChange={e => setuserId(e.target.value)} />
    </>
  )
}

export default Text