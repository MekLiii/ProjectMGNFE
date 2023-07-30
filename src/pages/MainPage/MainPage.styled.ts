import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
  gap: 1rem;

  h3,
  span {
    color: ${({ theme }) => theme.font.color};
    font-family: ${({ theme }) => theme.font.family};
  }
  h3 {
    font-size: clamp(1.5rem, 3vw, 5rem);
  }
  span{
    cursor: pointer;
  }
`;
export { Container };
