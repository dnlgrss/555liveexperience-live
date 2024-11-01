import React, { useState, useEffect, useRef } from 'react';

const VimeoVideo = ({ horizontalVideoUrl, verticalVideoUrl, isAccordion = false, isHome = false }) => {
    // State to store screen width
    const [screenWidth, setScreenWidth] = useState(null);
    const [viewportHeight, setViewportHeight] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    // useEffect(() => {
    //     // Function to get the viewport height
    //     const getViewportHeight = () => window.innerHeight;

    //     // Set the viewport height when the component mounts
    //     setViewportHeight(getViewportHeight());

    //     // Clean-up function is not necessary here since we are only setting the height once at load
    // }, []);


    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        setViewportHeight(vh * 100);  // Set the state for viewport height
    };

    useEffect(() => {
        setVH();
        setScreenWidth(window.innerWidth);

        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);

        return () => {
            window.removeEventListener('resize', setVH);
            window.removeEventListener('orientationchange', setVH);
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

    //Autoplay function
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsPlaying(true);
                } else {
                    setIsPlaying(false);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [videoRef]);

    const videoUrl = screenWidth > 480 ? horizontalVideoUrl : verticalVideoUrl;
    const marginWork = () => {
        if (isAccordion) {
            return screenWidth < 480 ? '0 auto 16px auto' : '0 auto 50px auto'
        }
        return screenWidth < 480 ? '0 auto 16px auto' : '0 auto 110px auto'
    }

    const renderComponent = () => {
        const autoplay = isPlaying ? 'autoplay=1' : 'autoplay=0';
        if (isHome) {
            return (
                // <div ref={videoRef} style={{ padding: '56.25% 0 0 0', position: 'relative', minHeight: `${screenWidth < 480 ? '103lvh' : 'calc(100dvh - 65px)'}`, maxHeight: `${screenWidth < 480 ? '103lvh' : 'calc(100dvh - 65px)'}`, margin: '0 auto', width: `${screenWidth < 480 ? 'calc(100lvw - 36px)' : 'calc(100dvw - 32px)'}` }}>
                // <div ref={videoRef} style={{ padding: '56.25% 0 0 0', position: 'fixed', top: `${viewportHeight}px`, left: '16px', minHeight: `${screenWidth < 480 ? 'calc(var(--vh, 1vh) * 100)' : 'calc(100dvh - 65px)'}`, maxHeight: `${screenWidth < 480 ? 'calc(var(--vh, 1vh) * 100)' : 'calc(100dvh - 65px)'}`, margin: '0 auto', width: `${screenWidth < 480 ? 'calc(100lvw)' : 'calc(100dvw - 32px)'}` }}>
                <div ref={videoRef} style={{ padding: '56.25% 0 0 0', position: 'relative', minHeight: `${screenWidth < 480 ? 'calc(var(--vh, 1vh) * 100)' : 'calc(100dvh - 65px)'}`, maxHeight: `${screenWidth < 480 ? 'calc(var(--vh, 1vh) * 100)' : 'calc(100dvh - 65px)'}`, margin: '0 auto', width: `${screenWidth < 480 ? 'calc(100lvw)' : 'calc(100dvw - 32px)'}` }}>
                    {/* <div ref={videoRef} style={{ padding: '56.25% 0 0 0', position: 'relative', minHeight: `${screenWidth < 480 ? 'calc(var(--vh, 1vh) * 100)' : 'calc(100dvh - 65px)'}`, maxHeight: `${screenWidth < 480 ? 'calc(var(--vh, 1vh) * 100)' : 'calc(100dvh - 65px)'}`, margin: '0 auto', width: `${screenWidth < 480 ? 'calc(100lvw)' : 'calc(100dvw - 32px)'}` }}> */}
                    {/* <div ref={videoRef} style={{ padding: '56.25% 0 0 0', position: 'relative', height: `${screenWidth < 480 ? 'calc(100dvh - 125px)' : 'calc(100dvh - 65px)'}`, margin: '0 auto', width: `${screenWidth < 480 ? '100%' : 'calc(100dvw - 32px)'}` }}> */}
                    <iframe
                        src={`${videoUrl}${autoplay}&muted=1&loop=1&controls=0`}
                        // src={`${videoUrl}autoplay=1&loop=1&muted=0&controls=1&sidedock=0&title=0&byline=0&fullscreen=false&pip=0`}
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '16px',
                            // width: `${screenWidth < 480 ? 'calc(90lvw)' : 'calc(100dvw - 32px)'}`,
                            width: `${screenWidth < 480 ? 'calc(100lvw - 32px)' : 'calc(100dvw - 32px)'}`,
                            // dvh is jumping window.height shoudn't but hard to use outside useEffect
                            // height: 'auto',
                            minHeight: `${screenWidth < 480 ? '100%' : 'calc(100lvh - 65px)'}`,
                            maxHeight: `${screenWidth < 480 ? '100%' : 'calc(100lvh - 65px)'}`,
                            // minHeight: `${screenWidth < 480 ? viewportHeight + 'px' : 'calc(100lvh - 65px)'}`,
                            // maxHeight: `${screenWidth < 480 ? viewportHeight + 'px' : 'calc(100lvh - 65px)'}`,
                            // height: `${screenWidth < 480 ? 'calc(100dvh - 125px)' : 'calc(100dvh - 65px)'}`,
                            border: '0',
                            // margin: '0 auto'
                        }}
                        title="555 Live Experience"
                        allowFullScreen
                        allow='autoplay'
                    ></iframe>
                </div>

                /*
                                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                    <iframe
                                        src="https://player.vimeo.com/video/925515575?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                        frameborder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '100 %'
                                        }}
                                        title="555 Live Experience">
                                    </iframe>
                                </div>
                */
            )
        } else {
            return (
                <div style={{ padding: '56.25% 0 0 0', position: 'relative', maxHeight: '100dvh', margin: `${marginWork()}`, width: 'auto', objectFit: 'cover' }}>
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
