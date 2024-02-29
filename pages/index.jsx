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

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
    // window.scrollBy({ top: '100vh', left: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setShowScrollDown(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <div className='frontpage'>
        <div className="container">
          {screenWidth < 480
            ?
            <>
              <p className='quote' style={{ fontFamily: "'Marchellia', sans-serif", marginBottom: '56px' }}>“If everything seems under control, you’re not going fast enough.”</p>
            </>
            :
            <>
              <Image src={QuoteDesktop} alt='555 Live Experience - Andretti Quote' className='quote-homepage' />
            </>
          }
        </div>
        {showScrollDown && (
          <div className="scroll-down-link" onClick={scrollDown}>
            <p>Scroll Down</p>
          </div>
        )}
      </div>
      <VimeoVideo
        verticalVideoUrl="https://player.vimeo.com/video/108883988"
        horizontalVideoUrl="https://player.vimeo.com/video/260272259"
        isHome={true}
      />
      <div className="circle-quote">
        <Image src={CircleQuote} alt='Positive impact on your live experience' />
      </div>
      <Credits />
    </>
  )
}
