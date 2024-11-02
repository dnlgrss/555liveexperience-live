//React
import React, { useState, useEffect } from 'react';
//Nextjs
import Head from 'next/head';
import Image from 'next/image'
// Components
import Header from '@/components/Layout/Header'
// Font
import { Inter } from 'next/font/google'
// Image
import CircleQuote from '@/public/assets/img/mobile/circle-quote.svg'
// Apollo
import { client } from '@/helpers/apollo';
import { gql } from '@apollo/client';
// Parser
import parse from 'html-react-parser';
import Credits from '@/components/Layout/Credits';
import VimeoVideo from '@/components/UI/VimeoVideo';
// Assets Image
import QuoteDesktop from '@/public/assets/img/quote-desktop.svg'
import QuoteMobile from '@/public/assets/img/quote-mobile.svg'


export const getStaticProps = async () => {
  // Fetching SEO page
  const GET_PAGE = gql`
    query fecthPageSEO($id: ID = "homepage") {
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

export default function Home({ data }) {
  const { seo } = data
  const [showScrollDown, setShowScrollDown] = useState(true);
  // State to store screen width
  const [screenWidth, setScreenWidth] = useState(null);
  const [offsetTop, setOffsetTop] = useState(0);


  // It handles the start and stop autoplay on  scroll
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

  // const scrollDown = () => {
  //   window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  //   // window.scrollBy({ top: '100vh', left: 0, behavior: 'smooth' });
  // };

  // const handleScroll = () => {
  //   setShowScrollDown(window.scrollY === 0);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDesc} />
        <link rel="icon" href="/favicon.ico" />
        {parse(seo.fullHead)}
      </Head>
      <Header isHome={true} />
      {/*
      <div className='frontpage'>
        <div className="container">
          {screenWidth < 480
            ?
            <>
              <Image src={QuoteMobile} alt='555 Live Experience - Event Management Services' className='quote' />
            </>
            :
            <>
              <Image src={QuoteDesktop} alt='555 Live Experience - Event Management Services' className='quote-homepage' />
            </>
          }
        </div>
        {showScrollDown && (
          <div className="scroll-down-link" onClick={scrollDown}>
            <p>Scroll Down</p>
          </div>
        )}
      </div>
      */}

      {/* <div> */}
      {/* Version not transparent menu bar. Watch for destop not yet implemented, video not showing  */}
      {/* <div style={screenWidth < 480 ? { width: '100dvw', height: 'calc(100dvh - 82px)' } : { width: '100dvw', height: 'calc(100dvh - 82px)' }}> */}
      {/* Altra V2  */}
      {/* <div className='offsettop' style={screenWidth < 480 ? {
        height: '100dvh', marginTop: `-111px`,
      } : { height: '100vh' }}> */}
      <div className='offsettop' style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
        // position: `${screenWidth < 480 ? 'unset' : 'relative'}`
        // HERE MOBILE NEEDS NO POSITION:RELATIVE
        // DESKTOP DOES NEED POSITION:RELATIVE
      }}>
        <VimeoVideo
          verticalVideoUrl="https://player.vimeo.com/video/953510946"
          //https://player.vimeo.com/video/1025725213
          horizontalVideoUrl="https://player.vimeo.com/video/1025725213"
          // horizontalVideoUrl="https://player.vimeo.com/video/953511893"
          isHome={true}
        />
      </div>
      {/* </div> */}
      <div className="circle-quote">
        {/* <div className="circle-quote" style={{ marginTop: '200%' }}> */}
        <Image src={CircleQuote} alt='Positive impact on your live experience' />
      </div>
      <Credits />
    </>
  )
}
