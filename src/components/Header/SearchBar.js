import React from 'react'

const SearchBar = ({citySearch , setCitySearch}) => {
  return (
    <div className="w-1/2 flex-grow mx-8">
        <input
          type="text"
          placeholder="Search City"
          className="w-1/2 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
        
      </div>
  )
}

export default SearchBar