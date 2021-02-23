import React, { useState, useCallback, useEffect } from 'react';
import { css } from '@emotion/react';
import { useLunr } from 'react-lunr';
import { graphql, Link, useStaticQuery } from 'gatsby';

type SearchModalProps = {
  query: string;
  onCloseModal: () => void;
};

type SearchResultType = {
  id: string;
  title: string;
  slug: string;
};

export default function SearchModal({ query, onCloseModal }: SearchModalProps) {
  const queryData = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);
  const index = queryData.localSearchPages.index;
  const store = queryData.localSearchPages.store;

  const [queryModal, setQueryModal] = useState(query);
  const [searchResult, setSearchResult] = useState<SearchResultType[]>([]);
  const results = useLunr<SearchResultType>(queryModal, index, store);

  // 최초 모달 실행시 넘겨받은 query 를 이용한 검색결과 보여줌
  useEffect(() => {
    setSearchResult(results);
  }, []);

  const onChangeQuery = useCallback((e) => {
    setQueryModal(e.target.value);
  }, []);

  // 모달 입력창을 통해 검색시 검색결과 보여줌
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSearchResult(results);

      setQueryModal('');
    },
    [results]
  );

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <div css={SearchModalWrapper} onClick={onCloseModal}>
      <div css={SearchModalStyle} onClick={stopPropagation}>
        <h1>🔎포스팅 검색하기</h1>
        <form onSubmit={onSubmit} css={SearchFormStyle}>
          <input
            name="query"
            value={queryModal}
            onChange={onChangeQuery}
            placeholder="검색어를 입력하세요."
          />
        </form>
        <div css={SearchResultWrapper}>
          {searchResult.map((data) => (
            <div className="search-result">
              <Link to={`${data.slug}`}>{data.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SearchModalWrapper = css`
  position: fixed;
  z-index: 1300;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const SearchModalStyle = css`
  position: absolute;
  top: 40%;
  left: 50%;
  /* 50%, 50%만큼 이동시켰다가 다시 거기서 -50%, -50%만큼 이동시켜버리네. 그래서 정확히 가운데가 됨. 이건 개꿀팀이다. */
  transform: translate(-50%, -50%);
  text-align: center;

  min-width: 60rem;
  background: white;
  padding: 3rem;
  border-radius: 20px;

  h1 {
    margin-bottom: 2rem;
  }
`;

const SearchFormStyle = css`
  input {
    width: 100%;
    border: 2px solid gray;
    padding: 1rem;
  }
`;

const SearchResultWrapper = css`
  margin: 3rem 0;

  .search-result {
    padding: 1.5rem 10px;
    text-align: left;
    border: 1px solid gray;
    margin: 1.5rem 0;

    font-size: 1.6rem;
    font-weight: bold;
  }
`;
