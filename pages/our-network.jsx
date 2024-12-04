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

  const words = ["professionals", "freelancers", "creatives", "technicians", "event experts", "performers/artists"];
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
            <p className='network-intro-p network-intro-p-width'>Enter the world of extraordinary events with us, where we excel in industries like Music, Sports, Corporate, Live Broadcast, Public Events, and Fan Bases. Whether it’s providing mere technical support or crafting captivating shows from inception to execution, we invite you to collaborate with us in delivering unparalleled experiences.</p>
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
            <div className='subheaders'>
              <div>
                <p className='join-us-width' style={{ marginLeft: '20px' }}>Join us as a team member or hire our services to give your audiences and fans the experience of a lifetime and witness the transformation of every occasion into a timeless moment.</p>
              </div>
              {/* <div>
                <div className='inner-grid'>
                  <p className='subheader' style={{ marginTop: '40px', marginBottom: '0' }}>The Happiness Program</p>
                  <div className='inner-grid-width'>
                    <p>Born from a successful collaboration among various parties, the Happiness Program continues to elevate the VIP Paddock Tour Experience for a select group of superfans, the best ambassadors, the most loyal, the hardcore fans who deserve to be rewarded for their unconditional passion.</p>
                    <p>Originally designed for the Formula 1 superfans, this exclusive experience has now been extended to other events, including football events and music festivals. Emotions run high as superfans enter the Paddock, the locker rooms of the Saudi football team, or the backstage area of a famous DJ set at Tomorrowland, meeting the pilots, mechanics, technicians, and superstars who bring the magic to life. Every moment is captured by the 555 camera crew, while our Master Control Room ensures this enchanting and emotional experience is live fed on screens throughout the venue. This extraordinary opportunity leaves a lasting impact and is a privilege reserved for the most dedicated superfans.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Credits />
      </div>
    </>
  )
}
