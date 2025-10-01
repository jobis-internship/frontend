/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TableCell,  } from '../../pages/Main';
import { useNavigate } from 'react-router-dom';
import datas from './data';

type Product = {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    username: string;
    role: string;
  };
};

export default function WriteCompo() {

  let [data, setData] = useState<Product[]>(datas)


  let navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000');
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error("오류:", error);
      }
    };
    fetchData();
  }, []);

  return(
    <>
      {
        data.map((a, i)=>{
          return(
            <>
              <TableRow key={i}>
                <TableCell>
                  <Span onClick={()=>{
                    navigate(`/detail/${i}`)
                  }}>{a.title}</Span>
                </TableCell>
                <TableCell>{a.author.username}</TableCell>
                <TableCell>{a.author.role}</TableCell>
                <TableCell>
                  <DeleteButton onClick={()=>{
                    const remove = data.filter((x) => x.id !== a.id);
                    setData(remove)
                  }}>삭제</DeleteButton>
                </TableCell>
              </TableRow>
            </>
          )
        })
      }
      
    </>
  )
}

const Span = styled.span`
  cursor: pointer;
`

const DeleteButton = styled.div`
  font-size: 18px;
  color: #ef4444;
  cursor: pointer;
`;

const TableRow = styled.tr`
  background-color: white;
  border-bottom: 1px solid #d5d5d5;
`
