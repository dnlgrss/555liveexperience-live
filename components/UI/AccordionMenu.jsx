import React, { useState, useEffect } from 'react';
// Nextjs
import Image from 'next/image'
// Icons
import { FaPlus, FaMinus } from 'react-icons/fa6'; // You need to install react-icons
import PlusWhite from 'public/assets/img/icon/PLUS_white.svg'
import PlusBlack from 'public/assets/img/icon/PLUS_black.svg'
import MinusWhite from 'public/assets/img/icon/MINUS_white.svg'
import MinusBlack from 'public/assets/img/icon/MINUS_black.svg'
// Components
import VimeoVideo from './VimeoVideo';
// Helpers
import { transformVimeoLink } from '@/helpers/vimeo';
import { getImageData } from '@/helpers/images';

const AccordionMenu = ({ previousWorks }) => {
    const [openItemId, setOpenItemId] = useState(null);
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

    const toggleItem = (id) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    const hasExtraData = (event) => {
        return event.description || event.image1;
    };

    return (
        <div>
            {previousWorks.map(event => (
                <div key={event.id} className="accordion-item" style={{ opacity: openItemId === event.id ? 1 : 0.6 }}>
                    <div className={`accordion-title ${hasExtraData(event.previousWorks) ? '' : 'no-linker'}`} onClick={() => hasExtraData(event.previousWorks) && toggleItem(event.id)}>
                        {event.previousWorks.title}
                        <div>
                            {screenWidth < 480 ?
                                hasExtraData(event.previousWorks) && (openItemId === event.id ? <Image src={MinusBlack} style={{ width: '30px', fontSize: '20px' }} alt='minus icon' /> : <Image src={PlusBlack} style={{ width: '30px', fontSize: '20px' }} alt='plus icon' />)
                                :
                                hasExtraData(event.previousWorks) && (openItemId === event.id ? <Image src={MinusWhite} style={{ width: '30px', height: '30px', fontSize: '20px' }} alt='minus icon' /> : <Image src={PlusWhite} style={{ width: '30px', height: '30px' }} alt='plus icon' />)
                            }
                        </div>
                    </div>
                    {openItemId === event.id && (
                        <div className="accordion-content">
                            {event.previousWorks.hasVideo ?
                                event.previousWorks.video &&
                                <VimeoVideo
                                    verticalVideoUrl={transformVimeoLink(event.previousWorks.video)}
                                    horizontalVideoUrl={transformVimeoLink(event.previousWorks.video)}
                                    isAccordion={true}
                                />
                                :
                                <div className="header-picture-accordion">
                                    <Image src={event.previousWorks.headerImage.mediaItemUrl} alt={event.previousWorks.headerImage.altText} fill={true} />
                                </div>
                            }
                            <div className="accordion-grid">
                                {screenWidth < 480 &&
                                    event.previousWorks.description && <p>{event.previousWorks.description}</p>}
                                {screenWidth < 480 && <br />}
                                {screenWidth < 480 && <br />}
                                {screenWidth < 480 &&
                                    event.previousWorks.description2 && <p>{event.previousWorks.description2}</p>}
                                {event.previousWorks.description &&
                                    <div className='accordion-labels'>
                                        <div>
                                            <p className='work-label'>Category</p>
                                            <p className='greyed-out'>{event.previousWorks.category}</p>
                                        </div>
                                        <div>
                                            <p className='work-label'>Client</p>
                                            <p className='greyed-out'>{event.previousWorks.client}</p>
                                        </div>
                                        <div>
                                            <p className='work-label'>Location</p>
                                            <p className='greyed-out'>{event.previousWorks.location}</p>
                                            {/* | {event.previousWorks.date} */}
                                        </div>
                                    </div>
                                }
                                <div>
                                    {screenWidth > 480 &&
                                        event.previousWorks.description && <p>{event.previousWorks.description}</p>}
                                    <br />
                                    {screenWidth > 480 &&
                                        event.previousWorks.description2 && <p>{event.previousWorks.description2}</p>}
                                </div>
                            </div>
                            <div className="accordion-image-container">
                                {event.previousWorks.image1 && getImageData(event.previousWorks).map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img.url}
                                        alt={img.alt}
                                        fill={true}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AccordionMenu;
