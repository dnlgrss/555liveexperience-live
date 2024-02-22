export const getImageData = (works) => {
    let images = [];
    let i = 1; // Start with image1

    while (works[`image${i}`]) {
        const imageData = works[`image${i}`];
        if (imageData.mediaItemUrl && imageData.altText) {
            images.push({
                url: imageData.mediaItemUrl,
                alt: imageData.altText
            });
        }
        i++; // Move to the next image
    }

    return images;
}
