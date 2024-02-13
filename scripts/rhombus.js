function calculateRhombusArea(){
    //Base Triangle
    const diagonalFirstInput = document.getElementById('diagonal-first-rhombus')
    const diagonalFirstInputValue = diagonalFirstInput.value;
    const diagonalFirst = parseFloat(diagonalFirstInputValue);


    //Height Triangle
    const diagonalSecondInput = document.getElementById('diagonal-second-rhombus')
    const diagonalSecondInputValue = diagonalSecondInput.value;
    const diagonalSecond = parseFloat(diagonalSecondInputValue);
 

    //Calculate Area
    const area = 0.5 * diagonalFirst * diagonalSecond;
   

    //displaye area
    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;
}