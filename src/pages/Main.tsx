/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Header from "../components/mainComponents/Header"
import WriteCompo from '../components/mainComponents/ListComponent';
import { useNavigate } from 'react-router-dom';


export default function DashBoard() {
  const navigate = useNavigate()
  return (
    <>
      <Header/>
      <Container>
        <Nav>
          <h1>게시글 목록</h1>
          <Button onClick={() => navigate('/post')}>새 게시글 작성</Button>
        </Nav>
        <TableDiv>
        <Table>
          <thead>
            <TableRow>
              <TableCell width="40%">제목</TableCell>
              <TableCell width="25%">작성자</TableCell>
              <TableCell width="25%">작성일</TableCell>
              <TableCell width="10%">관리</TableCell>
            </TableRow>
          </thead>
          <tbody>
            <WriteCompo />
          </tbody>
        </Table>
        </TableDiv>
      </Container>
    </>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
`

const Nav = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: 20px;
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

const TableDiv = styled.div`
  border: 1px solid #d5d5d5;
  border-radius: 10px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;

`

export const TableRow = styled.tr`
  background-color: #f0f0f0; 
  border-bottom: 1px solid #d5d5d5;
`

export const TableCell = styled.td`
  height: 58px;
  padding: 12px 0 12px 38px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
`
