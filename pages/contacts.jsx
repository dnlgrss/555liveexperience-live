//React
import React from 'react';
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
    query fecthPageSEO($id: ID = "contacts") {
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

export default function contacts({ data }) {
  const fullHead = parse(data?.seo?.fullHead)
  return (
    <>
      <Head>{fullHead}</Head>
      <Header />
      <h1 className='network-h1'>Get in Touch</h1>
      <p>For new inquiries contact</p>
      <div className="contact-area">
        <p className="name">Marc van Sintruyen</p>
        <a href="mailto: marc.vansintruyen@555liveexperience.com" className="email">marc.vansintruyen@555liveexperience.com</a>
        <p className="name">Alexandre Molina</p>
        <a href="mailto: alex.molina@555liveexperience.com" className="email">alex.molina@555liveexperience.com</a>
      </div>
      <div className="address-area">
        <p>Find us in Dubai | Riyadh | Brussels</p>
        <p className="grey">No. 06.01</p>
        <p className="grey">The Offices 2 At One Central</p>
        <p className="grey">Dubai</p>
        <p className="grey">United Arab Emirates</p>
      </div>
      <div className="social-area">
        <p>Follow us</p>
        <a href="https://www.linkedin.com/company/555-live-events/" className="social">Linkedin</a>
        <a href="https://www.instagram.com/555.live/" className="social">Instagram</a>
        <a href="#" className="social">Vimeo</a>
      </div>
      <Credits />
    </>
  )
}
