import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
const digital = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F'
]
const randomColor = () => {
  let color = ''
  for (let i = 0; i < 6; i++) {
    color += digital[Math.floor(Math.random() * digital.length)]
  }
  return '#' + color
}
enum Result {
  Correct,
  Wrong
}
const Home: NextPage = () => {
  const [colorCorrect, setColorCorrect] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | undefined>(undefined);
  const [number, setNumber] = useState<number>(1)
  const pickColor = () => {
    const correctColor = randomColor()
    setColorCorrect(correctColor)
    setAnswers([correctColor, randomColor(), randomColor()].sort(() => 0.5 - Math.random()))

  }
  const handleClick = (answer: string) => {
    answer === colorCorrect ? setResult(Result.Correct) : setResult(Result.Wrong)
    pickColor()
    setNumber(number + 1)
  }
  useEffect(() => {
    pickColor()
  }, [])
  return (
    <div className='wrapper'>
      <div>
        <p>
          No. {number}
        </p>
        <div className='guess-color' style={{ background: colorCorrect }}></div>
        <div className='button_wrapper'>
          {answers.map((answer, i) => (
            <button key={i} onClick={() => handleClick(answer)}>{answer}</button>
          ))}
        </div>
        {result === Result.Correct ? <p>correct  answer</p> : <p>wrong answer</p>}
      </div>
    </div>
  )
}

export default Home
