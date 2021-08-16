import styles from '../styles/Home.module.css'
import Search from '../components/Search/search';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import NewsListItem from '../components/NewsListItem/newsListItem';
import SortSearch from '../components/SortSearch/sortSearch';
import Pagination from '../components/Pagination/pagination';
import { Grid } from '@material-ui/core'
import { Link } from '@material-ui/core';
import Loader from "react-loader";
export default function Home() {
  const [newsList, setList] = useState([]);
  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState('search')
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [loading, setloading] = useState(false);

  function debounce(func, wait, immediate) {
    var timeout;
    return (...args) => {
      var context = this;
      var later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const api = useCallback(
    debounce((page, query, searchBy) => {
      axios.get(`${process.env.NEXT_PUBLIC_ALGOLIA}/api/v1/${searchBy}?query=${query}&page=${page}`)
        .then((response) => {
          console.log(response)
          setList(response.data.hits)
          setMaxPage(response.data.nbPages)
          setloading(false)
        })
    }, 200),
    []
  );

  useEffect(() => {
    api(page, query, searchBy)
  }, [page, query, searchBy])

  const handleSearch = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    setPage(0)
  }, [query])

  useEffect(() => {
    setloading(true);
  }, [page, query, searchBy])

  const prevPage = () => {
    setPage(page - 1)
    window.scrollTo(0, 0)
  }

  const nextPage = () => {
    setPage(page + 1)
    window.scrollTo(0, 0)
  }

  const handleSearchBy = (e) => {
    setSearchBy(e.target.value)
  }

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      api(page, query, searchBy)
      e.preventDefault();
    }
  }
  return (
    <>
      <Search handleChange={handleSearch} keyPress={keyPress} />
      {loading ?
        <Loader />
        :
        <>
          <Grid container justifyContent="center" pt={1} pb={1}>
            <SortSearch searchBy={searchBy} handleSearchBy={handleSearchBy} />
          </Grid>
          {
            newsList.map((item) => {
              return (
                <Link href={`/post/${item.objectID}`} style={{ textDecoration: 'none' }}>
                  <NewsListItem
                    Title={item.title ? item.title : item.story_title}
                    Author={item.author}
                    Points={item.points ? item.points : 0}
                    Date={item.created_at}
                    Comments={item.num_comments ? item.num_comments : 0}
                  />
                </Link>
              )
            })
          }
          <Grid container justifyContent="center" pt={5} pb={5}>
            <Pagination currentPage={page} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />
          </Grid>
        </>
      }
    </>
  )
}
