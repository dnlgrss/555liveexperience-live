export const transformVimeoLink = (originalLink) => {
    // Check if the original link is valid and contains "vimeo.com"
    if (originalLink && originalLink.includes("vimeo.com")) {
        // Extract the video ID from the original link
        const videoId = originalLink.split("/").pop();
        // Construct the new link with the extracted video ID
        const transformedLink = `https://player.vimeo.com/video/${videoId}`;
        return transformedLink;
    } else {
        // Return original link if it's not a valid Vimeo link
        return originalLink;
    }
}
