import styled from "@emotion/styled";
export const Button = () => {
  return (
    <div>
      <ButtonStyle>
        <Text>로그인</Text>
      </ButtonStyle>
    </div>
  );
};

const ButtonStyle = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  background-color: #2563eb;
  border: none;
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 15px;
  color: white;
`;
