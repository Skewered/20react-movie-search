import { useReducer } from 'react';
import { useRef } from 'react';
import styles from './MovieSearch.module.css';

export default function MovieSearch({ setTitle, setType, setPage }) {
  const inputRef = useRef(null);

  // 빈 값을 검색한 경우, 최초 데이터가 나오게 하기
  // 쓰다가 내용을 전부 삭제한 경우 초기화
  function handleSearch() {
    if (inputRef.current.value.trim()) {
      setTitle(inputRef.current.value);
      setType('');
      setPage(1);
    } else {
      setTitle('spiderman');
    }
  }

  // function handleChange() {
  //   if (inputRef.current.value === '') {
  //     setTitle('spiderman');
  //   }
  // }

  return (
    <div className={styles.movie_search}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder="제목 검색"
          title="제목 검색"
          // onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit" onClick={handleSearch}>
          검색
        </button>
      </form>
    </div>
  );
}
