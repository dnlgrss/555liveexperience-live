import React, { useState, useEffect } from 'react';

const VimeoVideo = ({ horizontalVideoUrl, verticalVideoUrl }) => {
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

    const videoUrl = screenWidth > 480 ? horizontalVideoUrl : verticalVideoUrl;

    return (
        <div style={{ width: '100dvw', height: '100dvh' }}>
            <iframe
                src={`${videoUrl}?autoplay=1&loop=1&muted=1&controls=0&sidedock=0&title=0`}
                style={{
                    width: '100dvw',
                    height: '100dvh',
                    border: 'none',
                }}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VimeoVideo;
