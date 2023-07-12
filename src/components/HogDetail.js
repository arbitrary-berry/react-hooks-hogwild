import React from 'react'

function HogDetail({
  hog: 
    {greased, 
      weight, 
      "highest medal achieved": medal}
  }) {
  return (
    <div className="description">
      <strong>{greased ? "Greasy" : "All Clean"}</strong>
      <p>Hightest medal achieved <strong>{medal}</strong></p>
      <p>Weight as a ratio of hog <strong>{weight}</strong></p>
    </div>
  )
}

export default HogDetail