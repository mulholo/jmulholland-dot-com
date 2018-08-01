import React from "react";
import Footer from '../components/footer';
import Header from '../components/header';

import styled from 'styled-components';

const StyledPage = styled.div`
  margin: 0 auto;
  padding: 1.25rem 1rem;
  max-width: 650px;
`;

export default ({ children }) =>
  <StyledPage>
    <Header/>
    {children()}
    <Footer/>
  </StyledPage>
