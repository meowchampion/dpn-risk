import React, { useState } from 'react'

function App() {
  const [age, setAge] = useState('')
  const [risk, setRisk] = useState(null)

  const checkRisk = () => {
    const riskScore = parseFloat(age) > 60 ? 'High Risk' : 'Low Risk'
    setRisk(riskScore)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>DPN Risk Checker</h1>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <button onClick={checkRisk}>Check Risk</button>
      {risk && <h2>Result: {risk}</h2>}
    </div>
  )
}

export default App
