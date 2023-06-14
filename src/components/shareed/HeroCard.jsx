import React from 'react'

const HeroCard = ({children}) => {
  return (
    <div className={`card`}>
    {children}
  </div>
  )
}

export default HeroCard
