import React from 'react';
import styles from './MovieTab.module.css';

const types = ['All', 'Movie', 'Series', 'Episode'];

export default function MovieTab({ setType, type, setPage }) {
  function handleClick(e) {
    if (e.target.innerText !== 'All') {
      setType(e.target.innerText);
      setPage(1);
    } else {
      setType('');
      setPage(1);
    }
  }

  // 탭 메뉴 active 처리
  // 1. map의 인덱스와 activeIndex 상태를 비교하여 active
  // 2. MovieTab 으로 Type 을 Prop 으로 받아서 Item 과 비교하여 active
  return (
    <div className={styles.movie_tab}>
      {types.map((item) => (
        <button
          onClick={handleClick}
          key={item}
          type="button"
          // 삼항 연산자 안에 삼항 연산자를 쓸 수 있다.
          className={
            type === (item === 'All' ? '' : item) ? styles.active : styles
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
}
