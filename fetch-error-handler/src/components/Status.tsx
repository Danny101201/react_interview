'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Status = () => {
  const [status, setStatus] = useState<string>('200')
  const fetchRequest = async () => {
    fetch(`/api/fetchStatus?status=${status}`)
      .then(async res => {
        const response = await res.json()
        console.log(res.status, res.ok)
      })
      .catch(e => {
        console.log(e)
      })
  }
  const axiosRequest = async () => {
    axios(`/api/fetchStatus?status=${status}`)
      .then(res => {
        const response = res.data
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div>
      <label htmlFor="">request status</label>
      <select onChange={e => setStatus(e.target.value)}>
        <option value="200">200</option>
        <option value="404">404</option>
        <option value="500">500</option>
      </select>
      <div>
        <button onClick={fetchRequest}>fetchRequest</button>
      </div>
      <div>
        <button onClick={axiosRequest}>axiosRequest</button>
      </div>
    </div>
  )
}

