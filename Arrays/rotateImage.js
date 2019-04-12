// given an n x n 2D matrix (image), rotate image by 90 degrees
function rotateImage(a) {
    let rotatedImage =[];

    let transposedArray = a[0].map((col, i) => a.map(row => row[i]));

    transposedArray.forEach((row) => {
        rotatedImage.push(row.reverse());
    })

    return rotatedImage;
}
