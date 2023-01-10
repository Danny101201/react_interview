import { useState, useMemo, useTransition, ChangeEvent, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { faker } from '@faker-js/faker';
import WithOutTransition from './components/WithOutTransition';
import WithTransition from './components/WithTransition';
const largeLists: { username: string }[] = []

export function createRandomUser() {
  return {
    username: faker.internet.userName(),
  };
}
for (let i = 0; i < 100; i++) {
  largeLists.push(createRandomUser())
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function App() {
  return (
    <div className="App">
      {/* <WithOutTransition /> */}
      <WithTransition />
    </div>
  )
}

export default App
