import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Search from '../components/Search';

export default function Home() {
  const [searchQuery,setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Search handleChange={handleSearch} />
      {searchQuery}
    </>
  )
}
