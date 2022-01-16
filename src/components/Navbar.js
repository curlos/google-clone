import React, { useState } from 'react'
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [query, setQuery] = useState('')

  return (
    <div className="flex items-center gap-4 p-8">
      <img src="/assets/google.svg.png" alt="Google" className="h-[40px]"/>

      <div className="text-white bg-gray-600 rounded-full p-2 flex justify-between items-center w-1/2">
        <input value={query} onChange={(e) => setQuery(e.target.value)} className="flex-1 bg-gray-600 outline-none ml-2"/>

        <div className="border-l border-gray-400 px-2 ml-2">
          <SearchIcon  className="h-5 w-5 text-blue-300"/>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
