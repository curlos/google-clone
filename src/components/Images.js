import React from 'react'

const Images = ({ resultsInfo }) => {
  console.log(resultsInfo)

  return (
    <div className="px-8 py-5 flex gap-2 flex-wrap">
      {resultsInfo.image_results.map((result) => (
        result.image && result.link ? (
          <a href={result.link.href}>
            <img src={result.image.src} alt={result.image.alt} />
          </a>
        ) : null
      ))}
    </div>
  )
}

export default Images
