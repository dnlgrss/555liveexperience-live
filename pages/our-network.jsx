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

const inter = Inter({ subsets: ['latin'] })

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
  const fullHead = parse(data?.seo?.fullHead)

  const words = ["EVENT EXPERTS", "TECHNICIANS", "PROFESSIONALS", "FREELANCERS", "CREATIVES"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [animation, setAnimation] = useState(0);

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
      <Head>{fullHead}</Head>
      <Header />
      <h1 className='network-h1'>Our Network</h1>
      <p>Join us in creating shared moments across global fan bases, turning every event into a timeless phenomenon.</p>
      <div className="network-quote">
        <p>We are always looking for talented <br /> <span className={`animated-word ${animation}`}>{currentWord}</span> <br /> from all over the world.</p>
      </div>
      <Credits />
    </>
  )
}
