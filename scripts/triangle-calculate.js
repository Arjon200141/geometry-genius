function calculateTriangleArea(){
    //Base Triangle
    const baseInput = document.getElementById('base-input-triangle')
    const baseInputValue = baseInput.value;
    const base = parseFloat(baseInputValue);
    console.log( base);

    //Height Triangle
    const heightInput = document.getElementById('height-input-triangle')
    const heightInputValue = heightInput.value;
    const height = parseFloat(heightInputValue);
    console.log( height);

    //Calculate Area
    const area = 0.5*base*height;
    console.log('Area of the triangle is ',area);

    //displaye area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}