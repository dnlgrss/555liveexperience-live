import React, { useState, useEffect } from 'react';

const VimeoVideo = ({ horizontalVideoUrl, verticalVideoUrl, isHome = false }) => {
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
    console.log(isHome);
    const videoUrl = screenWidth > 480 ? horizontalVideoUrl : verticalVideoUrl;

    const renderComponent = () => {
        if (isHome) {
            return (
                <div style={{ padding: '56.25% 0 0 0', position: 'relative', height: '100dvh', margin: '0 auto', width: 'calc(100dvw - 32px)' }}>)
                    <iframe
                        src={`${videoUrl}?autoplay=1&loop=1&muted=1&controls=0&sidedock=0&title=0`}
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            border: '0'
                        }}
                        allowFullScreen
                    ></iframe>
                </div>
            )
        } else {
            return (
                <div style={{
                    padding: '56.25% 0 0 0', position: 'relative', maxHeight: '100dvh', margin: '0 auto 110px auto', width: 'auto', objectFit: 'cover'
                }
                }>
                    <iframe
                        src={`${videoUrl}?autoplay=1&loop=1&muted=1&controls=0&sidedock=0&title=0`}
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            border: '0'
                        }}
                        allowFullScreen
                    ></iframe>
                </div>
            )
        }

    }

    return (
        renderComponent()
    )
};

export default VimeoVideo;
