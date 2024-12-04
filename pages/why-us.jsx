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

  const words = ["an award-winning", "a production", "a creative", "a global", "a fan-first", "a happiness-first", "a technology-first"];
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
      <div className="why-us-page">
        <div>
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
                <p>We are the architects of exceptional sports & music encounters worldwide, with a primary emphasis in Europe and Middle East from our Head Quarters in Dubai, Riyadh and Brussels.</p>
              </div>
              <div className="main-text">
                <div>
                  <p>Where technology meets creativity. That is what we provide to our clients and partners through the carefully crafted Master Control Room tailor made for each project. Constant innovation is our most important pursuit: we strive to offer our clients the best program using the newest technologies available on market.</p>
                </div>
                <div>
                  <p>Our Master Control Room allows us to coordinate every aspect of large-scale shows, including audio control, video content, lighting, cast management and live broadcast. This integration in the one and only MCR allows everyone to access the necessary information and instructions to deliver a flawless, distinctive, and unparalleled experience for our audience. The MCR is the muscle from all our projects allowing our creative team to imagine bigger, better and more spectacular shows.</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="subheaders">
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
              <p>Born from a successful collaboration among various parties, the Happiness Program continues to elevate the VIP Paddock Tour Experience for a select group of superfans, the best ambassadors, the most loyal, the hardcore fans who deserv to be rewarded for their unconditional passion.</p>
              <p>Originally designed for the Formula 1 superfans, this exclusive experience has now been extended to other events, including football events and music festivals. Emotions run high as superfans enter the Paddock, the locker rooms of the Saudi football team, or the backstage area of a famous DJ set at Tomorrowland, meeting the pilots, mechanics, technicians, and superstars who bring the magic to life. Every moment is captured by the 555 camera crew, while our Master Control Room ensures this enchanting and emotional experience is live fed on screens throughout the venue. This extraordinary opportunity leaves a lasting impact and is a privilege reserved for the most dedicated superfans.</p>
            </div>
          </div>
        </div> */}
        </div>
        <Credits />
      </div>
    </>
  )
}
