import React from 'react';
import styles from './MovieList.module.css';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    // 데이터가 없는 경우 undefined 이므로, length 가 실행되지 않도록 함.
    // 데이터가 없을 경우, '영화 데이터 없음' 을 표시
    <div className={styles.movie_list}>
      {movies?.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>영화 데이터 없음</p>
      )}
    </div>
  );
}
