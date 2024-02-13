function calculateEllipseArea(){
    //a-axis-input
    const aAxisInputEllipse = document.getElementById('a-axis-input-ellipse')
    const aAxisInputEllipseValue = aAxisInputEllipse.value;
    const aAxisInput = parseFloat(aAxisInputEllipseValue);

    //b-axis-input
    const bAxisInputEllipse = document.getElementById('b-axis-input-ellipse')
    const bAxisInputEllipseValue = bAxisInputEllipse.value;
    const bAxisInput = parseFloat(bAxisInputEllipseValue);


    //Calculate Area
    const area = 3.1416 * aAxisInput * bAxisInput;

    //displaye area
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;
}