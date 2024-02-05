//React
import React, { useState, useEffect } from 'react';
//Nextjs
import Head from 'next/head';
import Image from 'next/image'
// Font
import { Inter } from 'next/font/google'
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

  const words = ["AN HAPPINESS FIRST", "A BREAKING BOUNDARIES", "A CREATIVE", "A PRODUCTION EVENT"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [animation, setAnimation] = useState(0);
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
    let index = 0;
    const intervalId = setInterval(() => {
      setAnimation('slide-down'); // Start slide-down animation

      setTimeout(() => {
        index = (index + 1) % words.length;
        setCurrentWord(words[index]);
        setAnimation('slide-up'); // Start slide-up animation
      }, 500); // Halfway through the interval

    }, 2000); // Change word every 2000ms (2 seconds)

    return () => clearInterval(intervalId);
  }, []);

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
        {screenWidth < 480 ?
          <p>We are a <br /> <span style={{ fontFamily: "'Marchellia', sans-serif" }} className={`animated-word ${animation}`}>{currentWord}</span> <br /> agency</p>
          :
          <p>We are a <br /> <span style={{ fontFamily: "'Marchellia', sans-serif" }} className={`animated-word ${animation}`}>{currentWord}</span> agency</p>
        }
      </div>
      <div className="why-us-container">
        <div className="intro">
          <p>We are the architects of extraordinary sports experiences, globally active with a focus on Europe and the Middle East, and headquartered in Belgium, KSA, and Dubai.</p>
        </div>
        <div className="main-text">
          <div>
            <p>With over 6 years of experience in creating live experiences for Formula 1 races worldwide, our fan-first philosophy drives us to create electrifying moments by challenging the status quo.</p>
          </div>
          <div>
            <p>We prioritize fans and their passion, crafting stories where athletes become heroes, complemented by live music, interactive fan zones, and captivating performances. Blending sport with spectacle, each moment becomes unforgettable. Fueled by our seasoned experts and vast network, we ensure flawless details. Additionally, our technical solutions enhance the fan experience for all kinds of events.</p>
          </div>
          <div>
            <p>In numerology, 555 signifies change and positive transformation. Similarly, choosing our services brings transformative experiences, turning events into milestones. With over 6 years of expertise and a dedicated team, partner with us for impactful, extraordinary moments. Embrace change, embrace excellence – invest in experiences that transcend the ordinary.</p>
          </div>
        </div>
      </div>
      <div className="subheaders">
        <div>
          <p className='subheader'>Our approach</p>
          <div>
            <p>We create live shows through a creative approach reflecting the use of the best technological solutions to ensure the maximum optimisation on assets and experiences.</p>
            <p>We are specialised in Music-Industry – Large Scale Sport Events – Public Events – Corporate Events – Live Broadcasted Events – Brand Activations.</p>
          </div>
        </div>
        <div>
          <p className='subheader'>MCR</p>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o icia deserunt mollit anim id est laborum.”</p>
        </div>
        <div>
          <p className='subheader'>The Happiness Projects</p>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o icia deserunt mollit anim id est laborum.”</p>
        </div>
      </div>
      <Credits />
    </>
  )
}
