import React, { useState, useEffect } from 'react'
import { SearchIcon, NewspaperIcon, VideoCameraIcon, PhotographIcon } from '@heroicons/react/solid'

const SEARCH_TYPES = {
  'All': SearchIcon, 
  'News': NewspaperIcon,
  'Images': PhotographIcon,
  'Videos': VideoCameraIcon
}

const SearchTypes = ({ searchType, handleChangeSearchType }) => {
  return (
    <div className="text-white px-2 md:px-8 md:pl-[165px] flex justify-around md:justify-start md:gap-7 border-b border-gray-500">
      {Object.keys(SEARCH_TYPES).map((type) => {

        const Icon = SEARCH_TYPES[type]

        return (
          <div className={`flex items-center gap-1 pb-2 cursor-pointer ${searchType === type ? 'border-b-[3px] border-blue-300' : ''}`} onClick={() => handleChangeSearchType(type)}>
            <Icon className={`h-5 w-5 ${searchType === type ? 'text-blue-300' : 'text-gray-400'}`} />
            <span className={`${searchType === type ? 'text-blue-300' : 'text-gray-400'}`}>{type}</span>
          </div>
        )
      })}
    </div>
  )
}

export default SearchTypes