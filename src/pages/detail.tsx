import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import *as API from "../core/service/api"

export default function Detail() {
    const navigate = useNavigate()
    const [dataMap, setDataMap] = React.useState<any>([])
    const params = useParams()

    const getData = async () => {
        await API.GetDetail(params.id)
            .then((res) => {
                console.log(res.data);
                setDataMap(res.data)
            })
            .catch((err) => {

            })
    }

    React.useEffect(() => {
        getData()
    }, [])
    return (
        <div className='w-full min-h-screen p-24'>
            <button
                className='bg-[#8362F2] flex items-center gap-2 rounded-[10px] justify-center mb-12'
                style={{
                    width: "229px",
                    height: "50px"
                }}
                onClick={() => navigate(-1)}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L4 12L11 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 12H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className='text-white text-[18px] font-[500]'>
                    Back To Homepage
                </span>
            </button>
            {dataMap?.map((data: any, index: any) => {
                return (
                    <div className='mb-12'>
                        <div>
                            <div className='flex gap-2 items-center'>
                                <span className='country text-[#000]'>{data?.name}</span>
                                <img src={data?.flag} alt="" className='w-[36px]' />
                            </div>
                            <div className='flex gap-2'>
                                {data?.altSpellings?.map((el: any, index: any) => {
                                    return (
                                        <span className='bg-[#8DD4CC] rounded-[50px] font-[700] text-[12px] text-white py-2 px-3' key={index}>
                                            {el}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex gap-4 mt-12'>
                            <div className='grid grid-cols-2 p-4 gap-[4rem]'>
                                <div className='flex flex-col'>
                                    <span className='text-[18px] font-[500]'>Lat Long</span>
                                    <div>
                                        {data?.latlng?.map((el: any, index: any) => {
                                            let x = data?.latlng?.length != index + 1 ? "," : ""
                                            return (
                                                <span className='text-[#8362F2] text-[48px] font-[700]'>
                                                    {el}{x}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="204" height="121" viewBox="0 0 204 121" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M204 102.5C204 108.281 203.521 113.95 202.601 119.469C201.691 120.413 200.414 121 199 121H154.555C154.043 117.986 151.424 115.692 148.27 115.692H144.893C142.763 115.692 140.772 114.624 139.592 112.848L134.146 104.664C131.814 101.157 133.443 96.3925 137.433 95.0614L138.523 94.6988C139.444 94.3919 140.423 94.2995 141.385 94.4288C142.347 94.558 143.267 94.9055 144.075 95.4447L151.565 100.448C152.499 101.073 153.583 101.44 154.705 101.51C155.826 101.58 156.947 101.352 157.952 100.847L164.282 97.6742C166.441 96.5945 167.806 94.3814 167.806 91.9624V89.1064C167.806 85.5788 170.661 82.7188 174.181 82.7188H181.762C173.918 50.9946 147.748 26.5194 115.165 21.2279V30.1707C115.165 33.6983 112.311 36.5584 108.79 36.5584H98.8331C96.7026 36.5584 94.7119 37.6257 93.5315 39.4019L90.2083 44.3926C89.3281 45.7155 87.9873 46.6592 86.4491 47.0466L80.506 48.5343C77.6681 49.2472 75.6774 51.8023 75.6774 54.7324V56.5457C75.6774 60.0733 78.5318 62.9334 82.0524 62.9334H119.089C119.926 62.9332 120.755 63.0984 121.529 63.4194C122.302 63.7405 123.005 64.2111 123.597 64.8044L126.443 67.6562C127.64 68.8554 129.26 69.5271 130.951 69.5271H135.101C138.621 69.5271 141.476 72.3872 141.476 75.9148C141.476 78.6636 139.719 81.1033 137.116 81.9728L117.658 88.4718C116.054 89.0075 114.306 88.8839 112.792 88.1256L106.738 85.0925C103.62 83.5265 100.178 82.7146 96.6902 82.7146H96.3242C91.4623 82.7159 86.7318 84.2963 82.8421 87.219L71.4987 95.7455C65.8435 99.9985 62.512 106.671 62.512 113.755V119.549C62.5121 120.034 62.5278 120.518 62.5589 121H1.66667C0.571906 115 0 108.817 0 102.5C0 46.0534 45.6656 0.296875 102 0.296875C158.334 0.296875 204 46.0534 204 102.5Z" fill="black" fill-opacity="0.04" />
                                    </svg>
                                </div>
                            </div>
                            <div className='p-4 relative'>
                                <div className='flex gap-2'>
                                    <span className='text-[18px] font-[400]'>Capital:</span>
                                    <span className='text-[18px] font-[500]'>
                                        {data?.capital}
                                    </span>
                                </div>
                                <div className='flex gap-2'>
                                    <span className='text-[18px] font-[400]'>Region:</span>
                                    <span className='text-[18px] font-[500]'>
                                        {data?.region}
                                    </span>
                                </div>
                                <div className='flex gap-2'>
                                    <span className='text-[18px] font-[400]'>Subregion:</span>
                                    <span className='text-[18px] font-[500]'>
                                        {data?.subregion}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-12'>
                            <div className='grid grid-cols-2 p-4 relative'>
                                <div className='flex flex-col'>
                                    <span className='text-[18px] font-[500]'>Calling Code</span>
                                    <span className='text-[#8362F2] text-[48px] font-[700]'>
                                        {data?.callingCodes?.join("")}
                                    </span>
                                    <div className='flex gap-2'>
                                        <span className='text-[#8362F2]'>
                                        {dataMap?.length} country
                                        </span>
                                        <span>
                                            with this calling Code
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className='p-4 relative'>
                                <div className='flex flex-col'>
                                    <span className='text-[18px] font-[500]'>Currency</span>
                                    {data?.currencies?.map((el: any, index: any) => {
                                        return (
                                            <span className='text-[#8362F2] text-[48px] font-[700]'>
                                                {el.code}
                                            </span>
                                        )
                                    })}
                                    <div className='flex gap-2'>
                                        <span className='text-[#8362F2]'>
                                            {dataMap?.length} country
                                        </span>
                                        <span>
                                            with this calling Code
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
