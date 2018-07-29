import React from "react";
import Footer from '../components/footer';
import Header from '../components/header';

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <Header/>
    {children()}
    <Footer/>
  </div>
