import React from 'react'

const All = ({ resultsInfo }) => {
  return (
    <div className="px-2 md:px-8 py-5 md:pl-[165px] md:w-[80%]">
      {resultsInfo.results.map((result) => (
        result.description && result.cite && result.cite.domain ? (
          <div className="mb-6">
            <div>
              <span className="text-gray-200">{result.cite.domain.split('›')[0]}</span>
              <span className="text-gray-400"> › {result.cite.domain.split('›').slice(1,).join('›')}</span>
            </div>
            <div>
              <a href={result.link} className="text-blue-300 cursor-pointer hover:underline">{result.title}</a>
            </div>
            <div className="text-gray-400">{result.description}</div>
          </div>
        ) : null
      ))}
    </div>
  )
}

export default All
