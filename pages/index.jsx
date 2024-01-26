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


const inter = Inter({ subsets: ['latin'] })

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
  const fullHead = parse(data?.seo?.fullHead)
  const [showScrollDown, setShowScrollDown] = useState(true);

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
      <Head>{fullHead}</Head>
      <Header />
      <div className='frontpage'>
        <p className='quote' style={{ marginBottom: '56px' }}>“If everything seems under control, you’re not going fast enough.”</p>
        <p className='quote'>- M. Andretti</p>
        {showScrollDown && (
          <div className="scroll-down-link" onClick={scrollDown}>
            <p>Scroll Down</p>
          </div>
        )}
      </div>
      <div className="circle-quote">
        <Image src={CircleQuote} style={{ backgroundColor: 'black' }} />
      </div>
      <Credits />
    </>
  )
}
