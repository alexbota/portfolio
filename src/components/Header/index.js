import React, { useState, useEffect } from 'react';
import Logo from '../../images/Logo.svg';
import { Button, Li } from './styled';
import { FaArrowRight } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';
import { debounce } from '../../utilities/helpers';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const themeContext = useContext(ThemeContext);

  const list = [
    { page: 'Work', link: '#work' },
    { page: 'Insights', link: '#insights' },
    { page: 'Contact', link: '#contact' },
  ];

  const handleOpenMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    if (!isOpen) {
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
    }

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const styles = {
    navbarStyles: {
      position: 'fixed',
      height: '65px',
      width: '100%',
      textAlign: 'center',
      transition: 'top 0.6s, background 0.5s',
      background: `${
        isOpen
          ? themeContext.colors.background.secondary
          : themeContext.colors.background.primary
      }`,
      top: visible ? '0' : '-65px',
      zIndex: 100,
    },
    containerStyles: {
      overflow: 'hidden',
      transform: `${isOpen ? 'translateY(-75px)' : 'translateY(1200px)'}`,
      transition: 'transform 1.2s',
    },
    modalStyles: {
      display: 'flex',
      alignItems: 'flex-end',
      position: 'fixed',
      top: '65px',
      left: 0,
      width: '100%',
      height: '100vh',
      background: `${
        isOpen
          ? themeContext.colors.background.secondary
          : themeContext.colors.background.primary
      }`,
      transition: '0.5s',
      backdropFilter: 'blur(3px)',
      visibility: `${isOpen ? 'visible' : 'hidden'}`,
      zIndex: `${isOpen ? '100' : '-1'}`,
      color: themeContext.colors.text.primary,
    },
  };

  return (
    <>
      <div style={{ height: '65px' }} />
      <nav style={styles.navbarStyles} className="shadow-md">
        <div className="flex justify-between items-center mx-4 h-full">
          <img className="w-12" src={Logo} alt="logo" />
          <Button isOpen={isOpen} onClick={handleOpenMenu}>
            <span />
            <span />
          </Button>
          <div style={{ width: '45px' }} />
        </div>
      </nav>
      <div style={styles.modalStyles}>
        <div style={styles.containerStyles} className="mx-6">
          <h3
            className="text-3xl md:text-4xl lg:text-5xl mb-8"
            style={{
              color: themeContext.colors.text.secondary,
            }}
          >
            Discover
          </h3>
          <ul>
            <Li className="transform -translate-x-12 sm:-translate-x-14 md:-translate-x-16 lg:-translate-x-18 mb-5">
              <span />
              <div className="flex items-center">
                <FaArrowRight className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl mr-3" />
                <Link className="text-4xl md:text-5xl lg:text-6xl" to="/">
                  Profile
                </Link>
              </div>
            </Li>
            {list.map((e) => {
              return (
                <Li
                  key={e.page}
                  className="transform -translate-x-12 sm:-translate-x-14 md:-translate-x-16 lg:-translate-x-18 mb-5 text-background-intermediary"
                >
                  <span />
                  <div className="flex items-center">
                    <FaArrowRight className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl mr-3" />
                    <Link
                      className="text-4xl md:text-5xl lg:text-6xl"
                      to="/404/"
                    >
                      {e.page}
                    </Link>
                  </div>
                </Li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
