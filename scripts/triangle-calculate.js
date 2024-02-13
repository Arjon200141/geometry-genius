function calculateTriangleArea(){
    //Base Triangle
    const baseInput = document.getElementById('base-input-triangle')
    const baseInputValue = baseInput.value;
    const base = parseFloat(baseInputValue);

    //Height Triangle
    const heightInput = document.getElementById('height-input-triangle')
    const heightInputValue = heightInput.value;
    const height = parseFloat(heightInputValue);

    //Calculate Area
    const area = 0.5*base*height;

    //displaye area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}