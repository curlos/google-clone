import React, { useState, useEffect } from 'react'
import SearchTypes from './SearchTypes'
import axios from 'axios'

const Results = () => {

  const [resultsInfo, setResultsInfo] = useState([])
  const [searchType, setSearchType] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=iphone&num=100',
      headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'US',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
      setResultsInfo(response.data)
      setLoading(false)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    })

  }, [])

  const getSearchTypeForAPI = () => {
    switch (searchType) {
      case 'All':
        return 'search'
      case 'Images':
        return 'images'
      default:
        return 'search'
    }
  }

  const handleChangeSearchType = (newSearchType) => {
    setSearchType(newSearchType)
  }

  return (
    <div className="text-white">
      <SearchTypes searchType={searchType} handleChangeSearchType={handleChangeSearchType} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="px-8 py-2">
          {resultsInfo.results.map((result) => (
            result.description && result.cite && result.cite.domain ? (
              <div>
                <div className="">
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
      )}
    </div>
  )
}

export default Results
