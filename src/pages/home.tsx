import React from 'react'
import *as API from "../core/service/api"
import _ from "lodash"
import {useNavigate} from "react-router-dom";

export default function Home() {
  const [data, setData] = React.useState([])
  const [name, setName] = React.useState("")
  const navigate = useNavigate()

  const getData = async (currentName = name) => {
    if (!currentName) return;
    await API.GetNameCountries(currentName)
      .then((res) => {
        setData(res.data.slice(0, 5))
      })
      .catch((err) => {

      })
  }

  const navigateTo = async (el: any) => {
    if (el?.idd?.suffixes.length > 1) {
      navigate(`/${el?.idd?.root.replace("+", "")}`, { state: el?.idd?.suffixes.length })
    } else {
      navigate(`/${el?.idd?.root.replace("+", "") + el?.idd?.suffixes.join("")}`)
    }
  }

  return (
    <div className="min-h-screen w-[100%] bg-white">
      <div className='flex flex-col gap-2 items-center mt-[20rem]'>
        <span className='text-country'>Country</span>
        <div className='relative'>
          <input type="text"
            className='input-home focus:outline-none p-4'
            placeholder='Type any country name'
            value={name}
            onChange={(e) => { setName(e.target.value); getData(e.target.value) }}
          />
          <div className=' absolute mt-[-2.5rem] right-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" >
              <path d="M11.875 3.75C14.0299 3.75 16.0965 4.60602 17.6202 6.12976C19.144 7.65349 20 9.72012 20 11.875C20 13.8875 19.2625 15.7375 18.05 17.1625L18.3875 17.5H19.375L25.625 23.75L23.75 25.625L17.5 19.375V18.3875L17.1625 18.05C15.6882 19.3085 13.8134 19.9999 11.875 20C9.72012 20 7.65349 19.144 6.12976 17.6202C4.60602 16.0965 3.75 14.0299 3.75 11.875C3.75 9.72012 4.60602 7.65349 6.12976 6.12976C7.65349 4.60602 9.72012 3.75 11.875 3.75ZM11.875 6.25C8.75 6.25 6.25 8.75 6.25 11.875C6.25 15 8.75 17.5 11.875 17.5C15 17.5 17.5 15 17.5 11.875C17.5 8.75 15 6.25 11.875 6.25Z" fill="#C8C8C8" />
            </svg>
          </div>
          <div className='box-search mt-2'>
            {_.map(data, (el: any, index: any) => (
              <div className='cursor-pointer hover:bg-[#F4F4F4] px-4 py-2' key={index} onClick={() => navigateTo(el)} >
                {el?.name.common}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}