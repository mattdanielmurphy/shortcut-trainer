import React, { useState } from 'react'
import './App.css'
import { TrainingArea } from './components/TrainingArea'
// import KeyboardEventHandler from 'react-keyboard-event-handler'
import { Shortcuts } from './components/Shortcuts'
import { AddShortcut } from './components/AddShortcut'

const defaultShortcuts = [{ name: 'Save', keys: ['up'] }]

function App () {
  const [isTraining, setIsTraining] = useState(false)
  const [isAddingShortcut, setIsAddingShortcut] = useState(true)
  const [shortcuts, setShortcuts] = useState(defaultShortcuts)

  function startTraining () {
    setIsTraining(true)
  }

  function startAddingShortcut () {
    setIsAddingShortcut(true)
  }

  function addShortcut (shortcut) {
    setIsAddingShortcut(false)
    const newShortcuts = shortcuts
    newShortcuts.push(shortcut)
    setShortcuts(newShortcuts)
  }

  return (
    <div className="container">
      <h1>Shortcut Trainer</h1>
      {isAddingShortcut ? (
        <AddShortcut addShortcut={addShortcut} />
      ) : (
        <button onClick={startAddingShortcut}>Add shortcut</button>
      )}
      <br />
      {isTraining ? <TrainingArea /> : <button onClick={startTraining}>Train!</button>}
      <br />
      <Shortcuts shortcuts={shortcuts} />
    </div>
  )
}

export default App
