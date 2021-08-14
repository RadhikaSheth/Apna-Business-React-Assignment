import styles from '../styles/Home.module.css'
import Search from '../components/Search';
import axios from 'axios';
import { useState } from 'react';
import NewsListItem from '../components/NewsListItem';
export default function Home() {
  const [newsList,setList] = useState([]);
  const handleSearch = (e) => {
    axios.get(`${process.env.NEXT_PUBLIC_ALGOLIA}/api/v1/search?query=${e.target.value}`)
    .then((response)=>{
      setList(response.data.hits)
    })
  }

  return (
    <>
      <Search handleChange={handleSearch} />
      {newsList.map((item)=>{
        return (
          <NewsListItem 
            Title={item.title}
            Link={item.url}
            Author={item.author}
            Points={item.points}
            Date={item.created_at}
            Comments={item.num_comments}
          />
        )
      })}
    </>
  )
}
