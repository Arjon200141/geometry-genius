function calculateRectangleArea(){
    //Width
    const widthRectangle = document.getElementById('width-rectangle');
    const widthValue = widthRectangle.value;
    const width = parseFloat(widthValue);

    //length
    const lengthRectangle = document.getElementById('length-rectangle');
    const lengthValue = lengthRectangle.value;
    const length = parseFloat(lengthValue);

    //Calculate Area
    const area = width * length;

    //Display Area 
    const calculateRectangleArea =  document.getElementById('rectangle-area');
    calculateRectangleArea.innerText = area;
}