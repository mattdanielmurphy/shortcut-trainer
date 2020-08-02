import React, { useState, useEffect } from 'react'

export function AddShortcut ({ addShortcut }) {
  // LISTENERS, LIFECYCLE
  const removeListeners = () => {
    document.removeEventListener('keydown', handleKeyDown)
    document.removeEventListener('keyup', handleKeyUp)
    const shortcutComboInput = document.getElementById('shortcut-combo')
    shortcutComboInput.removeEventListener('blur', removeListeners)
  }
  const addListeners = () => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    const shortcutComboInput = document.getElementById('shortcut-combo')
    shortcutComboInput.addEventListener('blur', () => removeListeners())
  }

  useEffect(() => () => removeListeners(), [])

  // STATE
  const [combo, setCombo] = useState('')
  const [lastKeyComboPressed, setLastKeyComboPressed] = useState([])
  const [heldKeys, setHeldKeys] = useState({})

  const handleKeyDown = (e) => {
    e.preventDefault()
    const newlyHeldKeys = heldKeys
    newlyHeldKeys[e.key] = true
    setHeldKeys(newlyHeldKeys)
    const held = Object.keys(newlyHeldKeys)
    setLastKeyComboPressed(held)
  }

  const handleKeyUp = (e) => {
    const previouslyHeldKeys = heldKeys
    delete previouslyHeldKeys[e.key]
    setHeldKeys(previouslyHeldKeys)
  }

  // all keys up

  const saveShortcut = () => {
    const name = document.getElementById('shortcut-name').value
    const shortcut = { name, keys: lastKeyComboPressed }
    addShortcut(shortcut)
  }
  const acceptCombo = () => {}
  const clear = () => {
    document.getElementById('shortcut-name').value = ''
    setHeldKeys({})
    setLastKeyComboPressed([])
  }

  const onFocus = () => {
    console.log('focus')
    clear()
    addListeners()
  }

  return (
    <div id="add-shortcut-container">
      <div id="add-shortcut">
        <p>
          <label htmlFor="name">Shortcut name</label>
          <input type="text" name="name" id="shortcut-name" placeholder="Save" />
        </p>
        <p>
          <label htmlFor="combo">Key combination</label>
          <input onFocus={onFocus} onChange={() => {}} type="text" name="combo" id="shortcut-combo" placeholder="Click here to set combination" value={lastKeyComboPressed.join(' + ')} />
          <button onClick={clear}>Clear</button>
          <button onClick={acceptCombo}>Accept</button>
        </p>
        <button onClick={saveShortcut}>Save shortcut</button>
      </div>
    </div>
  )
}
