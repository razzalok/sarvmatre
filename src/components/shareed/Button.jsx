import React from 'react'

const Button = ({children}) => {
  return (
    
    <button type="submit" className="mt-6 flex w-auto items-center justify-center rounded-md border border-transparent px-8 py-3 font-medium text-white bg-gradient-to-t from-[#0C6068] to-[#19746D] hover:bg-gradient-to-r from-[#238474] to-[#0C6080]">{children}</button>
    
  )
}

export default Button
