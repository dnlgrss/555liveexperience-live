import React from 'react'
// Nextjs
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link'
//Components
import Header from '@/components/Layout/Header';
import AccordionMenu from '@/components/UI/AccordionMenu';
import Credits from '@/components/Layout/Credits';
// Apollo
import { client } from '@/helpers/apollo';
import { gql } from '@apollo/client';
// Parser
import parse from 'html-react-parser';
import VimeoVideo from '@/components/UI/VimeoVideo';
import { transformVimeoLink } from '@/helpers/vimeo';
import { getImageData } from '@/helpers/images';

export const getServerSideProps = async ({ params }) => {
    const { slug } = params
    console.log(slug);
    const GET_PAGE = gql`
    query Event($id: ID!) {
        work(id: $id, idType: SLUG) {
            works {
                video
                title
                relatedWorks {
                    ... on Work {
                        id
                        slug
                        works {
                            title
                            featuredImage{
                            altText
                            mediaItemUrl
                            }
                        }
                    }
                }
                previousWorks {
                    ... on PreviousWork {
                        id
                        previousWorks {
                            title
                            description
                            image1 {
                                altText
                                mediaItemUrl
                            }
                            image2 {
                                altText
                                mediaItemUrl
                            }
                            image3 {
                                altText
                                mediaItemUrl
                            }
                            image4 {
                                altText
                                mediaItemUrl
                            }
                        }
                    }
                }
                location
                intro2
                intro
                category
                client
                date
                featuredImage{
                    altText
                    mediaItemUrl
                }
                headerPicture {
                    altText
                    mediaItemUrl
                }
                image1 {
                    altText
                    mediaItemUrl
                }
                image2 {
                    altText
                    mediaItemUrl
                }
                image3 {
                    altText
                    mediaItemUrl
                }
                image4 {
                    altText
                    mediaItemUrl
                }
            }
            slug
            seo {
                fullHead
                title
                metaDesc
            }
        }
    }
  `

    const res = await client.query({
        query: GET_PAGE,
        variables: {
            id: slug
        }
    })

    if (!res?.data?.work?.works) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const data = res?.data

    return {
        props: {
            data
        }
    }
}

const single = ({ data }) => {
    const seo = data?.work?.seo
    const { works } = data?.work
    const { relatedWorks } = works
    const { previousWorks } = works
    const images = getImageData(works)

    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.metaDesc} />
                <link rel="icon" href="/favicon.ico" />
                {parse(seo.fullHead)}</Head>
            <Header />
            <div className="video-container">
                <VimeoVideo
                    verticalVideoUrl={transformVimeoLink(works.video)}
                    horizontalVideoUrl={transformVimeoLink(works.video)}
                />
                <h1 className='working-title'>
                    {works.title}
                </h1>
            </div>
            <div className='work-intro'>
                <p>{works.intro}</p>
                <p>{works.intro2}</p>
            </div>
            <div className='work-labels'>
                <p>{works.category}</p>
                <p>{works.client}</p>
                <p>{works.date} | {works.location}</p>
            </div>
            <div className='work-images'>
                {images.map((img, index) => (
                    <Image
                        key={index}
                        src={img.url}
                        alt={img.alt}
                        fill={true}
                    />
                ))}
            </div>
            <div className="previous-edition-section">
                {!!previousWorks && <h2>Previous Editions</h2>}
                {!!previousWorks && <AccordionMenu previousWorks={previousWorks} />}
            </div>
            <div className="related-projects-section">
                {!!relatedWorks && <h2>Related Projects</h2>}
                <div>
                    {!!relatedWorks && relatedWorks.map(work => (
                        <div className='related-projects' key={work.slug}>
                            <div className='related-project'>
                                <Link href={`${work.slug}`}>
                                    <Image src={work.works.featuredImage.mediaItemUrl} alt={work.works.featuredImage.altText} fill={true} />
                                </Link>
                                <Link href={`${work.slug}`} className='related-title'>
                                    {work.works.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Credits />
        </>
    )
}

export default single
