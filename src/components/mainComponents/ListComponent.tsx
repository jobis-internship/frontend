/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import datas from './data';
import { TableCell, TableRow } from '../../pages/Main';
import { useNavigate } from 'react-router-dom';
import Detail from '../../pages/Detail';

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
        // setData(response.data);
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
                <TableCell onClick={()=>{
                    navigate("/detail", { state: a })
                  }}>{a.title}</TableCell>
                <TableCell>{a.author.username}</TableCell>
                <TableCell>{a.author.role}</TableCell>
                <TableCell>
                  <DeleteButton>삭제</DeleteButton>
                </TableCell>
              </TableRow>
            </>
          )
        })
      }
      
    </>
  )
}

const DeleteButton = styled.button`
  /* background: none; */
  border: none;
  color: #ef4444;
  cursor: pointer;
`;