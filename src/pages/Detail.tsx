import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import styled from '@emotion/styled';

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

export default function Detail() {

  const { id } = useParams();

  let [data, setData] = useState<Product[]>([])

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

  const datas = data.find((x) => x.id === Number(id));
  console.log(datas)

  return (
    <>
      <Div>
        <Title>{datas?.title}</Title>
        <Contents>{datas?.content}</Contents>
      </Div>
    </>
  )
}

const Div = styled.div`
  padding: 0 400px;
`

const Title = styled.p`
  font-size:50px;
  font-weight:600;
`

const Contents = styled.p`
  font-size: 30px;
`