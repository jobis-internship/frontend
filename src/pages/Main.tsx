/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Header from "../components/mainComponents/Header"
import WriteCompo from '../components/mainComponents/ListComponent';

export default function DashBoard() {
  return (
    <>
      <Header/>
      <div css={css`
        margin:30px 140px;
      `}>
        <Div>
          <h1>게시글 목록</h1>
          <Button>새 게시글 작성</Button>
        </Div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="40%">제목</TableCell>
              <TableCell width="25%">작성자</TableCell>
              <TableCell width="28%">작성일</TableCell>
              <TableCell width="7%">관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <WriteCompo/>
          </TableBody>
        </Table>
      </div>
    </>
  )
}

const Div = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  /* margin:30px 100px; */
`

const Button = styled.button`
  width:160px;
  height:45px;
  background-color: #0066ff;
  color:white;
  font-size:17px;
  border:0;
  border-radius:30px;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`

const Table = styled.table`
  width:100%;
  padding:0 20px;
  border:1px solid #d5d5d5;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  background-color: #f0f0f0; 
  text-align: left;
  color: #666;
  padding:20px;
`;

const TableBody = styled.tbody`
  color: #333;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #d5d5d5;
  padding:20px;
`;

export const TableCell = styled.td`
  padding: 12px 0 12px 38px;
  height: 58px;
  font-size: 20px;
  font-weight: bold;
`;
