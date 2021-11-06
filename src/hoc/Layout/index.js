import { theme } from './styled';
import { ThemeProvider } from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import React from 'react';

export default function Layout({ children, activeDocMeta }) {
  return (
    <ThemeProvider theme={theme}>
      <Header activeDocMeta={activeDocMeta} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
