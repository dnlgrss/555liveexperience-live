import React, { useEffect, useState } from 'react'
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
import RelatedProject from '@/components/UI/RelatedProject';

export const getServerSideProps = async ({ params }) => {
    const { slug } = params
    console.log(slug);
    const GET_PAGE = gql`
    query Event($id: ID!) {
        work(id: $id, idType: SLUG) {
            works {
                video
                hasVideo
                headerPicture{
                    altText
                    mediaItemUrl
                }
                title
                relatedWorks {
                    ... on Work {
                        id
                        slug
                        works {
                            title
                            shortTitle
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
                            video
                            title
                            description
                            category
                            client
                            location
                            date
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
                image5 {
                    altText
                    mediaItemUrl
                }
                image6 {
                    altText
                    mediaItemUrl
                }
                image7 {
                    altText
                    mediaItemUrl
                }
                image8 {
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
    const [startPosition, changePositon] = useState()
    const seo = data?.work?.seo
    const { works } = data?.work
    const { relatedWorks } = works
    const { previousWorks } = works
    const images = getImageData(works)
    // State to store screen width
    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        const header = document.querySelector('.header'); // Adjust the selector as needed

        const handleScroll = () => {
            if (window.scrollY > 0) {
                header.classList.remove('transparent');
            } else {
                header.classList.add('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial class assignment
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
        if (screenWidth < 480) return; // Skip the scroll logic if not on desktop

        const titleElement = document.querySelector('.working-title');
        const introElement = document.querySelector('.work-intro');
        const originalTitlePosition = titleElement.getBoundingClientRect().top + window.scrollY;
        const stopPosition = introElement.offsetTop - 80; // 20px above the .work-intro
        // const stopPosition = introElement.offsetTop - 80; // 20px above the .work-intro

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const titlePosition = originalTitlePosition + scrollPosition;

            if (titlePosition < stopPosition) {
                titleElement.style.transform = `translateY(${scrollPosition}px)`;
            } else {
                titleElement.style.transform = `translateY(${stopPosition - originalTitlePosition}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [screenWidth]);


    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.metaDesc} />
                <link rel="icon" href="/favicon.ico" />
                {parse(seo.fullHead)}</Head>
            <Header />
            {works.hasVideo ?
                <>
                    <VimeoVideo
                        verticalVideoUrl={transformVimeoLink(works.video)}
                        horizontalVideoUrl={transformVimeoLink(works.video)}
                    />
                    <h1 className='working-title'>
                        {works.title}
                    </h1>
                </>
                :
                <div className="header-picture">
                    {/* <Image src={works.headerPicture.mediaItemUrl} alt={works.headerPicture.altText} style={{ layout: 'fill', objectFit: 'cover' }} /> */}
                    <Image src={works.headerPicture.mediaItemUrl} alt={works.headerPicture.altText} style={{ layout: 'fill', objectFit: 'cover' }} fill={true} />
                    <h1 className='working-title'>
                        {works.title}
                    </h1>
                </div>
            }
            <div className='work-intro'>
                <p>{works.intro}</p>
                <p>{works.intro2}</p>
            </div>
            <div className='work-labels'>
                <div>
                    <p className='work-label'>Category</p>
                    <p>{works.category}</p>
                </div>
                <div>
                    <p className='work-label'>Client</p>
                    <p>{works.client}</p>
                </div>
                <div>
                    <p className='work-label'>Location</p>
                    <p>{works.date} | {works.location}</p>
                </div>
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
                            <RelatedProject work={work} />
                        </div>
                    ))}
                </div>
            </div>
            <Credits />
        </>
    )
}

export default single
