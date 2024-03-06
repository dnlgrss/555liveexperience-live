//React
import React, { useState, useEffect } from 'react';
//Nextjs
import Head from 'next/head';
// Font
// Apollo
import { client } from '@/helpers/apollo';
import { gql } from '@apollo/client';
// Parser
import parse from 'html-react-parser';
import Header from '@/components/Layout/Header';
import Credits from '@/components/Layout/Credits';

export const getStaticProps = async () => {
  // Fetching SEO page
  const GET_PAGE = gql`
    query fecthPageSEO($id: ID = "our-network") {
      page(id: $id, idType: URI) {
        slug
        title
        content
      seo{
          metaDesc
          fullHead
          title
        }
      }
    }
  `
  const res = await client.query({
    query: GET_PAGE
  })
  const data = res.data.page

  return {
    props: {
      data
    }
  }
}

export default function ourNetwork({ data }) {
  const { seo } = data

  const words = ["event experts", "technicians", "professionals", "freelancers", "creatives"];
  // const words = ["EVENT EXPERTS", "TECHNICIANS", "PROFESSIONALS", "FREELANCERS", "CREATIVES"];
  // const [currentWord, setCurrentWord] = useState(words[0]);
  // const [animation, setAnimation] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0].split('').map(char => ({ char, visible: false })));
  const [wordIndex, setWordIndex] = useState(0);
  // State to store screen width
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    // Set initial value
    setScreenWidth(window.innerWidth);

    // Handler to call on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect runs only on mount and unmount

  useEffect(() => {
    const revealChar = setTimeout(() => {
      setCurrentWord((current) => {
        const isComplete = current.every(({ visible }) => visible);
        if (!isComplete) {
          return current.map((obj, index) => ({
            ...obj,
            visible: index <= current.findIndex(({ visible }) => !visible) ? true : obj.visible,
          }));
        }
        return current;
      });
    }, 20); // Delay between revealing each character

    const isCurrentWordComplete = currentWord.every(({ visible }) => visible);
    if (isCurrentWordComplete) {
      const resetAndNextWord = setTimeout(() => {
        const nextWordIndex = (wordIndex + 1) % words.length;
        setCurrentWord(words[nextWordIndex].split('').map(char => ({ char, visible: false })));
        setWordIndex(nextWordIndex);
      }, 2000); // Delay before moving to the next word

      return () => clearTimeout(resetAndNextWord);
    }

    return () => clearTimeout(revealChar);
  }, [currentWord, wordIndex]);

  // useEffect(() => {
  //   let index = 0;
  //   const intervalId = setInterval(() => {
  //     setAnimation('slide-down'); // Start slide-down animation

  //     setTimeout(() => {
  //       index = (index + 1) % words.length;
  //       setCurrentWord(words[index]);
  //       setAnimation('slide-up'); // Start slide-up animation
  //     }, 500); // Halfway through the interval

  //   }, 2000); // Change word every 2000ms (2 seconds)

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDesc} />
        <link rel="icon" href="/favicon.ico" />
        {parse(seo.fullHead)}
      </Head>
      <Header />
      <div className="network-page">
        <div>
          <h1 className='network-h1'>Our Network</h1>
          <div className="our-network-container">
            <p className='network-intro-p'>We are specialised in Music-Industry – Large Scale Sport Events – Public Events – Corporate Events – Live Broadcasted Events – Brand Activations. Join us in creating shared moments across global fan bases, turning every event into a timeless phenomenon.</p>
            <div className="network-quote">
              <p>We are always  </p>
              <p>looking for talented</p>
              <div className="animated-word">
                {currentWord.map(({ char, visible }, index) => (
                  <p key={index} style={{ visibility: visible ? 'visible' : 'hidden', height: `${screenWidth < 480 ? '48px' : '73px'}` }}>
                    {/* <p key={index} style={{ visibility: visible ? 'visible' : 'hidden', fontFamily: "'Marchellia', sans-serif", height: '49px', paddingTop: '7px' }}> */}
                    {char === ' ' ? '\u00A0' : char}
                  </p>
                ))}
              </div>
              <p>from all over the world.</p>
            </div>
            <p>Get in touch!</p>
          </div>
        </div>
        <Credits />
      </div>
    </>
  )
}
