import styled from "@emotion/styled";

export const PwInput = () => {
  return (
    <Container>
      <Text>비밀번호</Text>
      <InputStyle placeholder="비밀번호를 입력" />
    </Container>
  );
};

const InputStyle = styled.input`
  border-radius: 6px;
  width: 100%;
  height: 52px;
  font-size: 18px;
  padding: 0 12px;
  border: 1px solid #000;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
