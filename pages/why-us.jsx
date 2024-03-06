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
    query fecthPageSEO($id: ID = "why-us") {
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

export default function whyUs({ data }) {
  const { seo } = data

  const words = ["a fan-first", "an happiness-first", "a creative", "a production event"];
  // const words = ["AN HAPPINESS-FIRST", "A BREAKING BOUNDARIES", "A CREATIVE", "A PRODUCTION EVENT"];
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

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDesc} />
        <link rel="icon" href="/favicon.ico" />
        {parse(seo.fullHead)}
      </Head>
      <Header />
      <div className="animated-line">
        <p>We are </p>
        <div className="animated-word">
          {currentWord.map(({ char, visible }, index) => (
            <p key={index} style={{ visibility: visible ? 'visible' : 'hidden', height: `${screenWidth < 480 ? '48px' : '73px'}` }}>
              {/* <p key={index} style={{ visibility: visible ? 'visible' : 'hidden', fontFamily: "'Marchellia', sans-serif", height: '39px', paddingTop: '7px' }}> */}
              {char === ' ' ? '\u00A0' : char}
            </p>
          ))}
        </div>
        <p> agency</p>
      </div>
      <div className="fixed-animated-container">
        {/* <div className="fixed-animated-container" style={screenWidth < 480 && { position: 'absolute', top: '50%' }}> */}
        <div className="why-us-container" >
          <div className="intro">
            <p>We are the architects of extraordinary sports experiences, globally active with a focus on Europe and the Middle East, and headquartered in Dubai, Riyadh, and Brussels.</p>
          </div>
          <div className="main-text">
            <div>
              <p>With over 6 years of experience in creating live experiences for Formula 1 races worldwide, our fan-first philosophy drives us to create electrifying moments by challenging the status quo.</p>
            </div>
            <div>
              <p>We prioritize fans and their passion, crafting stories where athletes become heroes, complemented by live music, interactive fan zones, and captivating performances. Blending sport with spectacle, each moment becomes unforgettable. Fueled by our seasoned experts and vast network, we ensure flawless details. Additionally, our technical solutions enhance the fan experience for all kinds of events.</p>
            </div>
          </div>
        </div>
        <div className="subheaders">
          <div>
            <p className='subheader'>Our approach</p>
            <div className='strict-width'>
              <p>We create live shows through a creative approach reflecting the use of the best technological solutions to ensure the maximum optimisation on assets and experiences.</p>
            </div>
          </div>
          <div>
            <p className='subheader'>MCR</p>
            <p className='strict-width'>Innovation is one of our most important incentive to always offer our customers the best and newest possibilities available on market. Our goal is to develop surprising experiences that touch, impress and create special memories. Our master control room allow us to coordinate every aspects of a big show including audio controlling, video contents, lights, show direction, activations and live broadcast.</p>
          </div>
          <div>
            <p className='subheader'>The Happiness Program</p>
            <div className='strict-width'>
              <p>The Happiness Program is a comprehensive package that stems from a successful collaboration between the F1 Event team, the local promotor, the team’s hospitality department and the 555-team. Its purpose is to enhance the VIP Paddock Tours Experience. We believe that this extraordinary experience should be earned and reserved exclusively for true F1 superfans.</p>
              <p>The emotions that overwhelm the lucky ones as they pass through the turnstiles of the paddock are truly magical. The 555 camera crew captivates the whole process and collaborates with the 555 Master Control Room Team so that this magical emotional experience appears on all the screens around the circuit when the daily edits are shown. The impact is truly remarkable.</p>
            </div>
          </div>
        </div>
        <Credits />
      </div>
    </>
  )
}
