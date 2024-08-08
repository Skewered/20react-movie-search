import { useEffect, useMemo, useState } from 'react';
import { sliceArrayByLimit } from '../lib/utils';
import styles from './Pagination.module.css';

export default function Pagination({ totalPage, limit, setPage, page }) {
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

  // 배열 생성되는 타이밍에 따라 useEffect, useMemo 를 구분하면서 사용 할 것.
  // 랜더링과 관계 없이, totalPage 가 변경될 경우 실행
  useMemo(() => {
    const pageGroup = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(pageGroup);
    setCurrentPageArray(pageGroup[0]);
  }, [totalPage]);

  useEffect(() => {
    // 이전 페이지, 다음 페이지로 이동을 확인함
    if (page % limit === 1) {
      // 페이지 번호 1이면 totalpagearr[0], 6이면 1
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      // 페이지 번호 5이면 totalpagearr[0], 10이면 1
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  return (
    <div className={styles.pagination}>
      {page !== 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>
          이전
        </button>
      )}

      {currentPageArray?.map((num) => (
        <button
          type="button"
          key={num}
          onClick={() => {
            setPage(num + 1);
          }}
          className={page === num + 1 ? styles.active : ''}
        >
          {num + 1}
        </button>
      ))}
      {page !== totalPage && (
        <button type="button" onClick={() => setPage(page + 1)}>
          다음
        </button>
      )}
    </div>
  );
}
