import React from 'react'
import ReactPlayer from 'react-player/lazy'

const Videos = ({ resultsInfo }) => {

  console.log(resultsInfo)
  
  return (
    <div className="px-8 py-5">
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

            <div className="flex gap-3">
              <div className="">
                <ReactPlayer url={result.additional_links[0].href} width="355px" height="200px" controls="true"/>
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
