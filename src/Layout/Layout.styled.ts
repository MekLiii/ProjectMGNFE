import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  min-width: 100%;
`;
const OutletChildren = styled.div`
  height: 90%;
  max-height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { Body, OutletChildren };
