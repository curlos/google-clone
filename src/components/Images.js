import React from 'react'

const Images = ({ resultsInfo }) => {
  console.log(resultsInfo)

  return (
    <div className="px-2 md:px-8 py-5 md:pl-[165px] container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:w-[80%]">
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
