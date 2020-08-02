import React, { Fragment } from 'react'
export function Shortcuts ({ shortcuts }) {
  return (
    <div>
      <h2>Shortcuts</h2>
      <table>
        <tbody>
          {shortcuts.map(({ name, keys, modifiers }) => (
            <tr key={name}>
              <td>{name}:</td>
              {/* <td>
                {modifiers.map((modifier, index) => (
                  <Fragment key={index}>
                    {modifier}
                    {index < modifiers.length - 1 && ' + '}
                  </Fragment>
                ))}
              </td>
              <td> + </td> */}
              <td>
                {keys.map((key, index) => (
                  <Fragment key={index}>
                    {key}
                    {index < keys.length - 1 && ' + '}
                  </Fragment>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
