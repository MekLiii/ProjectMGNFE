import styled from "styled-components";

const Container = styled.div``

const Title = styled.span`
  color: ${({ theme }) => theme.fonts.color};
  font-family:  ${({ theme }) => theme.font.family};
`
const StyledForm = styled.form`
  width: 100%;
  height: 50%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color:${({ theme }) => theme.colors.lightGray};
`;
export { StyledForm,Title };
