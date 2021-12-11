import { theme } from './styled';
import { ThemeProvider } from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import React, { useEffect, useState } from 'react';

export default function Layout({ children, activeDocMeta }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  if (!loader) {
    return (
      <ThemeProvider theme={theme}>
        <Header activeDocMeta={activeDocMeta} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    );
  }

  if (loader) {
    return <Preloader progressPercentage={50} />;
  }
}
