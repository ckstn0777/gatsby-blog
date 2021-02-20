import React from 'react';
import { css } from '@emotion/react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';

type Props = {
  totalCount: number;
};

function CreatePageNumber(start: number, end: number): Array<number> {
  const PageArray = [];
  for (let i = start; i <= end; i++) {
    PageArray.push(i);
  }
  return PageArray;
}

export default function Pagenation({ totalCount }: Props) {
  const location = useLocation(); // url 정보를 가져오기 위해

  const limit = 5; // 페이지당 5개씩
  const count = 5; // 페이지네이션 번호가 5개씩 끊어서 보여주기

  const page =
    location.pathname === '/' ? 1 : parseInt(location.pathname.split('/')[2]); // 현재 페이지
  const totalPage = Math.ceil(totalCount / limit); // 총 페이지 수

  // 5개씩 페이지네이션 할 예정
  // 예를 들어 3이면 1~5까지. 근데 totalPage가 4라면 1~4까지
  const start = (Math.ceil(page / count) - 1) * count + 1;
  const end = start + (count - 1) > totalPage ? totalPage : start + (count - 1);

  return (
    <div css={PagenationWrapper}>
      <ul>
        {start !== 1 ? <Link to={`/pages/${start - 1}`}>👈</Link> : null}
        {CreatePageNumber(start, end).map((v, idx) =>
          v === 1 ? (
            <li key={idx}>
              <Link to="/" activeClassName="active">
                {v}
              </Link>
            </li>
          ) : (
            <li key={idx}>
              <Link to={`/pages/${v}`} activeClassName="active">
                {v}
              </Link>
            </li>
          )
        )}
        {start + (count - 1) < totalPage ? (
          <Link to={`/pages/${end + 1}`}>👉</Link>
        ) : null}
      </ul>
    </div>
  );
}

const PagenationWrapper = css`
  margin: 2rem 0 4rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: center;
  }

  li {
    background: #81d4fa;
    border-radius: 50px;
    width: 3.3rem;
    height: 3.3rem;
    text-align: center;
    color: white;
    margin: 0 1rem;

    cursor: pointer;
  }

  a {
    font-size: 2rem;
    padding: 0.4rem 1.2rem;
  }

  a.active {
    background: #03a9f4;
    border-radius: 50px;
  }

  img {
    padding: 0 1rem;
  }
`;
