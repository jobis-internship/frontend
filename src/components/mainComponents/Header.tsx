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
  padding: 20px;
  border-bottom: 1px solid gray;
`

const SearchLogout = styled.div`
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 6px 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
`;

