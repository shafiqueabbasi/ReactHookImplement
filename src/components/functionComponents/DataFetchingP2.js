// React Hooks Tutorial - 13 - Fetching data with useEffect Part 2
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetchingP2 = () => {

    const [posts, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)} />
        <h1>{posts.title}</h1>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetchingP2