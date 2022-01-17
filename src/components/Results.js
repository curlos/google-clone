import React, { useState, useEffect } from 'react'
import SearchTypes from './SearchTypes'
import All from './All'
import News from './News'
import Images from './Images'
import Videos from './Videos'
import Loader from './Loader'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const Results = () => {

  const [resultsInfo, setResultsInfo] = useState([])
  const [searchType, setSearchType] = useState('All')
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  useEffect(() => {

    const getSearchTypeForAPI = () => {
      switch (searchType) {
        case 'All':
          return 'search'
        case 'News':
          return 'news'
        case 'Images':
          return 'images'
        default:
          return 'search'
      }
    }

    if (searchParams.get('search')) {
      setLoading(true)

      console.log(`https://google-search3.p.rapidapi.com/api/v1/${getSearchTypeForAPI()}/q=${searchParams.get('search') + `${searchType === 'Videos' ? ' videos' : ''}`}&num=100`)

      const options = {
        method: 'GET',
        url: `https://google-search3.p.rapidapi.com/api/v1/${getSearchTypeForAPI()}/q=${searchParams.get('search') + `${searchType === 'Videos' ? ' videos' : ''}`}&num=100`,
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
        console.log(response.data)
      }).catch(function (error) {
        setLoading(false)
        console.error(error)
      })
    }

  }, [searchParams, searchType])

  const getResults = () => {

    console.log(searchType)

    switch (searchType) {
      case 'All':
        return <All resultsInfo={resultsInfo}/>
      case 'News':
        return <News resultsInfo={resultsInfo}/>
      case 'Images':
        return <Images resultsInfo={resultsInfo} />
      case 'Videos':
        return <Videos resultsInfo={resultsInfo} />
      default:
        return <All resultsInfo={resultsInfo}/>
    }
  }

  const handleChangeSearchType = (newSearchType) => {
    setSearchType(newSearchType)
    setLoading(true)
  }

  console.log(searchType)

  return (
    <div className="text-white min-h-[90vh]">
      <SearchTypes searchType={searchType} handleChangeSearchType={handleChangeSearchType} />

      {loading ? (
        <div className="flex justify-center p-5">
          <Loader />
        </div>
      ) : (
        getResults()
      )}
    </div>
  )
}

export default Results
