import styles from '../styles/Home.module.css'
import Search from '../components/Search';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsListItem from '../components/NewsListItem';
import FilterSearch from '../components/FilterSearch';
import Pagination from '../components/Pagination';
import { Grid } from '@material-ui/core'
import { Link } from '@material-ui/core';
export default function Home() {
  const [newsList, setList] = useState([]);
  const [tag, setTag] = useState('story');
  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState('search')
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_ALGOLIA}/api/v1/${searchBy}?query=${query}&tags=${tag}&page=${page}`)
      .then((response) => {
        console.log(response)
        setList(response.data.hits)
        setMaxPage(response.data.nbPages)
        window.scrollTo(0, 0)
      })
  }, [page, tag, query, searchBy])


  const handleTags = (e) => {
    setTag(e.target.value)
  }

  const prevPage = () => {
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const handleSearchBy = (e) => {
    setSearchBy(e.target.value)
  }
  return (
    <>
      <Search handleChange={handleSearch} />
      <Grid container justifyContent="center" pt={1} pb={1}>
        <FilterSearch searchBy={searchBy} tag={tag} handleTags={handleTags} handleSearchBy={handleSearchBy} />
      </Grid>
      {newsList.map((item) => {
        return (
          item.title ?
            <Link href={`/post/${item.objectID}`} style={{ textDecoration: 'none' }}>
              <NewsListItem
                Title={item.title}
                Link={item.url}
                Author={item.author}
                Points={item.points}
                Date={item.created_at}
                Comments={item.num_comments}
              />
            </Link>

            : <></>
        )
      })}
      <Grid container justifyContent="center" pt={5} pb={5}>
        <Pagination currentPage={page} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />
      </Grid>
    </>
  )
}
