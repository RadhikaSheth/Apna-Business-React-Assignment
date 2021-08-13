import styles from '../styles/Home.module.css'
import Search from '../components/Search';
import axios from 'axios';

export default function Home() {

  const handleSearch = (e) => {
    axios.get(`${process.env.NEXT_PUBLIC_ALGOLIA}/api/v1/search?query=${e.target.value}`)
    .then((response)=>{
      console.log(response)
    })
  }

  return (
    <>
      <Search handleChange={handleSearch} />
    </>
  )
}
