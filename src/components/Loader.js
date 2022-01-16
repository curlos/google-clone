import React from 'react'

const Loader = () => {
  return (
    <div className="flex gap-2">
      <div className="animate-bounce bg-blue-500 h-5 w-5 rounded-full" />

      <div className="animate-bounce bg-red-500 h-5 w-5 rounded-full" />

      <div className="animate-bounce bg-yellow-500 h-5 w-5 rounded-full" />

      <div className="animate-bounce bg-green-600 h-5 w-5 rounded-full" />
    </div>
  )
}

export default Loader
