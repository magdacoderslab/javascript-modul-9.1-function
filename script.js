var a=3,
    h=-10;

function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return ("nieprawidłowe dane");
    } else if (a > 0 && h > 0) {
        return (a * h / 2);
    }
}
console.log(getTriangleArea(10, 6));


var triangle1Area = getTriangleArea(10, 15);

console.log(triangle1Area);

var triangle2Area = getTriangleArea(4, 5);

console.log(triangle2Area);

var triangle3Area = getTriangleArea(2, 8);

console.log(triangle3Area);
