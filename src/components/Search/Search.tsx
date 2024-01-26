import React from 'react'
interface ISearch {
  className: string,
  placeholder: string
}

function Search(props :ISearch) {
  const {className, placeholder} = props
  return (
    <div className="flex relative md:w-full">
      <input
        className={`w-[264px] h-[45px] rounded-[10px] border-[#D9D9D9] border ps-[16px] pe-[50px] outline-none md:w-full md:rounded-[20px] ${className}`}
        type="text"
        placeholder={placeholder}
      />
      <img
        className="w-[20px] h-[20px] absolute top-3 right-5"
        src="./static/images/icons/search.png"
        alt=""
      />
      </div>
  )
}

export default Search
