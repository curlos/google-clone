import React from 'react'
import { Navigate } from 'react-router'

const News = ({ resultsInfo }) => {
  console.log(resultsInfo)
  return (
    <div className="px-2 md:px-8 py-5 md:pl-[165px] md:w-[80%]">
      {resultsInfo.entries.map((result) => (
        result.title && result.summary && result.source && result.source.href && result.source.title ? (
          <div className="mb-6 border border-gray-500 rounded-lg p-2">
            <div>
              <a href={result.source.href} className="text-gray-400 text-sm hover:underline">{result.source.title}</a>
            </div>
            <div>
              <a href={result.link} className="hover:text-blue-300 hover:underline">{result.title}</a>
            </div>

          </div>
        ) : null
      ))}
    </div>
  )
}

export default News
