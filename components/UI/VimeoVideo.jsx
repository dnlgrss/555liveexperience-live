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
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
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
    );
};

export default VimeoVideo;
