import React, { useState } from 'react'
import { MenuIcon, SearchIcon } from "@heroicons/react/solid"
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const Navbar = ({ darkTheme, setDarkTheme }) => {

  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('search'))
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${query}`)
  }

  return (
    <div className="p-3 md:p-8 md:py-5">
      <div className="flex justify-center items-center mb-4 md:mb-0 md:hidden">
        <img src="/assets/google.svg.png" alt="Google" className="h-[40px]"/>
      </div>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex-1 flex items-center gap-4">
          <div className="hidden md:flex justify-between items-center mb-4 md:mb-0">
            <img src="/assets/google.svg.png" alt="Google" className="h-[40px]"/>
          </div>

          <form className="dark:text-white bg-white shadow-outline dark:shadow-none dark:bg-gray-600 rounded-full p-2 flex justify-between items-center w-full md:w-3/5" onSubmit={handleSearch}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="flex-1 dark:bg-gray-600 outline-none ml-2"/>

            <button type="submit" className="border-l border-gray-400 px-2 ml-2">
              <SearchIcon className="h-5 w-5 text-blue-700 dark:text-blue-300"/>
            </button>
          </form>
        </div>

        <div>
          <label for="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" onClick={() => setDarkTheme(!darkTheme)}/>
            <div className="block bg-white shadow-outline dark:shadow-none dark:bg-gray-600 w-16 h-8 rounded-full px-2"></div>
            <div className="dot absolute left-1 top-1 w-6 h-6 rounded-full transition text-lg flex items-center justify-center">
              <span className="dark:hidden">☀️</span>
              <span className="hidden dark:block">🌙 </span>
            </div>
          </div>
        </label>
        </div>

        
      </div>


    </div>
  )
}

export default Navbar
