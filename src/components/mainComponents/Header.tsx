import styled from '@emotion/styled';

export default function Header() {

  return(
    <>
      <Head>
        <h2>게시판 관리</h2>
        <SearchLogout>
          <SearchInput type="text" placeholder="검색" />
          <LogoutButton>로그아웃</LogoutButton>
        </SearchLogout>
      </Head>
    </>
  )
}

const Head = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 30px;
  border-bottom: 1px solid gray;
`

const SearchLogout = styled.div`
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  width: 230px;
  height: 26px;
  padding: 6px 14px;
  border-radius: 26px;
  border: 1px solid #ccc;
  outline: none;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-weight: 600;
  font-size:14px;
`;

