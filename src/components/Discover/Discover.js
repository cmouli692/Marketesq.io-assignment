import React, { useEffect, useState } from 'react'
import "./Discover.css"

const Discover = () => {

   

    useEffect(() => {
        getPostsData()

    },[])

    const [postsData,setPostsDataList] = useState([])

    const getPostsData = async() => {
        
        const url = "https://jsonplaceholder.typicode.com/photos"
        const options = {
            method: "GET"
        }

        const response = await fetch(url,options)
        const data = await response.json()
        console.log(data)

        setPostsDataList(data)

    }

  return (
    <div>
        <div className='discover-head-container'>                      {/* head container */}
          <h1>Discover</h1>
          

        </div>

        <ul className='discover-posts-container'>                       {/*  ul  */}
            {
                postsData.map((eachPost)=>{
                    const {id,title,url} = eachPost
                    return(
                        <li key={id} className='discover-post-container' >              
                            <p>{title}</p>
                            <img src={url} alt='posts' className='image-of-discover-item'/>
                        </li>

                    )
                })

            }

                        


            
                          
          
        </ul>
     
      
    </div>
  )
}

export default Discover
