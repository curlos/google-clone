import React from 'react'
import ReactPlayer from 'react-player/lazy'

const Videos = ({ resultsInfo }) => {

  console.log(resultsInfo)
  
  return (
    <div className="px-2 md:px-8 py-5 md:pl-[165px] md:w-[80%]">
      {resultsInfo.results.map((result) => (
        result.description && result.cite && result.cite.domain && result.additional_links && result.additional_links.length >= 1 ? (
          <div className="mb-6">
            <div>
              <span className="text-gray-200">{result.cite.domain.split('›')[0]}</span>
              <span className="text-gray-400"> › {result.cite.domain.split('›').slice(1,).join('›')}</span>
            </div>
            <div>
              <a href={result.link} className="text-blue-300 cursor-pointer hover:underline">{result.title}</a>
            </div>

            <div className="md:flex gap-3">
              <div className="relative p-t-[56.25%]">
                <ReactPlayer url={result.additional_links[0].href} width="100%" height="100%" controls="true" className="absolute top-0 left-0"/>
              </div>
              <div className="text-gray-400">{result.description}</div>
            </div>
            
          </div>
        ) : null
      ))}
    </div>
  )
}

export default Videos
