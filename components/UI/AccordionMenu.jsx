import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6'; // You need to install react-icons
import PlusWhite from 'public/assets/img/icon/PLUS_white.svg'
import PlusBlack from 'public/assets/img/icon/PLUS_black.svg'
import MinusWhite from 'public/assets/img/icon/MINUS_white.svg'
import MinusBlack from 'public/assets/img/icon/MINUS_black.svg'
import VimeoVideo from './VimeoVideo';
import Image from 'next/image'
import { transformVimeoLink } from '@/helpers/vimeo';

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
                    <div className="accordion-title" onClick={() => hasExtraData(event.previousWorks) && toggleItem(event.id)}>
                        {event.previousWorks.title}
                        {screenWidth < 480 ?
                            hasExtraData(event.previousWorks) && (openItemId === event.id ? <Image src={MinusBlack} style={{ width: '30px' }} alt='minus icon' /> : <Image src={PlusBlack} style={{ width: '30px' }} alt='plus icon' />)
                            :
                            hasExtraData(event.previousWorks) && (openItemId === event.id ? <Image src={MinusWhite} style={{ width: '30px', height: '30px' }} alt='minus icon' /> : <Image src={PlusWhite} style={{ width: '30px', height: '30px' }} alt='plus icon' />)
                        }
                    </div>
                    {openItemId === event.id && (
                        <div className="accordion-content">
                            {event.previousWorks.video &&
                                <VimeoVideo
                                    verticalVideoUrl={transformVimeoLink(event.previousWorks.video)}
                                    horizontalVideoUrl={transformVimeoLink(event.previousWorks.video)}
                                />
                            }
                            {event.previousWorks.description && <p>{event.previousWorks.description}</p>}
                            {event.previousWorks.image1 && (
                                <img src={event.previousWorks.image1.mediaItemUrl} alt={event.previousWorks.image1.altText} />
                            )}
                            {/* Add more fields if necessary */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AccordionMenu;
