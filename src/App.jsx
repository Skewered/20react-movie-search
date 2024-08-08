import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import MovieTab from './components/MovieTab';
import Pagination from './components/Pagination';
// API 엔드포인트 대문자 스네이크로 상수 선언
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=56871eff';

// 데이터 가져오기
// - fetch(): 데이터를 비동기로 가져오는 메소드
// - axios 패키지 fetch 보다 약간 쉽게 사용
// - tanstack query 서버 상태관리 패키지 사용하여 데이터 상태 관리
// jQuery: ajax 메서드
export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('bbc');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    // async: 프라미스를 리턴하는 함수에 사용 가능.
    async function searchMovie() {
      // await: 비동기 동작을 동기적으로 실행
      const response = await fetch(
        `${API_URL}&s=${title}&type=${type}&page=${page}`
      );
      // js 객체로 변환
      const data = await response.json();
      // 년도 기준 내림차순 정렬
      // 속성 뒤에 '?' 를 붙이면 값이 있을 때만 실행한다. (undefined, null) 일 경우 실행하지 않는다.
      // search 가 0 이거나 undefined 일 경우 실행하지 않는다.
      // sort의 리턴값이 -1 이면 내림차순, 1이면 오름차순
      const sortData = data.Search?.sort((a, b) => (a.Year > b.Year ? -1 : 1));

      setMovies(sortData);
      // 총 페이지 개수
      setTotalPage(Math.ceil(data.totalResults / 10));
    }
    searchMovie();
  }, [title, type, page]);

  return (
    <div className="app">
      <h2>MovieLand</h2>
      <MovieSearch setTitle={setTitle} setType={setType} setPage={setPage} />
      <MovieTab setType={setType} type={type} setPage={setPage} />
      <MovieList movies={movies} />
      {movies && (
        <Pagination
          totalPage={totalPage}
          limit={3}
          setPage={setPage}
          page={page}
        />
      )}
    </div>
  );
}
