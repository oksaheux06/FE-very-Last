import React, { useState } from 'react'
import { useEffect } from 'react'
import api from '../../services/api'


const IklanProfile = () => {
    const [news, setNews] = useState([])

    const getNews = async () => {
        try {
            const url = ("/api/news")
            const response = await api.get(url)
            setNews(response.data)
            console.log(response.data);
        } catch { console.log("error") }
    }
    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <div className="overscroll-auto overflow-y-scroll h-96 w-1/2 mt-7 rounded-lg">
                <h2 className='text-center font-medium text-xl mb-2 text-orange-600'>NEWS TERBARU</h2>
                <p className="text-sm text-orange-600 text-center shadow-xl mb-3 border-b-2">The Latest News Related To tocks</p>
                {news.map(news => (
                    <div key={news.id}>
                        <div className=" overflow-auto flex rounded-lg ">
                            <div className="rounded-lg shadow-lg bg-white w-full h-auto mb-5 ">
                                <img className="rounded-t-lg" src={news.linkImage} alt="news" />

                                <div className="p-2">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{news.headline}</h5>
                                    <p className="text-gray-700 text-base mb-2">
                                        {news.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default IklanProfile