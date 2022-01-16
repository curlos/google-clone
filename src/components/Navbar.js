import React, { useState } from 'react'
import { MenuIcon, SearchIcon } from "@heroicons/react/solid"
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const Navbar = () => {
  
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('search'))
  const navigate = useNavigate()

  const handleSearch = (e) => {
    console.log('hello ')
    e.preventDefault();
    navigate(`/?search=${query}`)
  }

  return (
    <div className="flex items-center gap-4 p-8">
      <img src="/assets/google.svg.png" alt="Google" className="h-[40px]"/>

      <form className="text-white bg-gray-600 rounded-full p-2 flex justify-between items-center w-1/2" onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="flex-1 bg-gray-600 outline-none ml-2"/>

        <button type="submit" className="border-l border-gray-400 px-2 ml-2">
          <SearchIcon className="h-5 w-5 text-blue-300"/>
        </button>
        
      </form>
    </div>
  )
}

export default Navbar
