// 8 kyu Surface Area and Volume of a Box

//Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// P
// R
// E
// P

function getSize(width, height, depth) {
    let area = (2 * width * height) + (2 * width * depth) + (2 * depth * height)
    let volume = width * height * depth
    const arr = [area, volume]
    return arr
}


