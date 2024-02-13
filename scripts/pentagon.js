function calculatePentagonArea(){
    //Perimeter Pentagon
    const perimeterInputPentagon = document.getElementById('perimeter-input-pentagon')
    const perimeterInputPentagonValue = perimeterInputPentagon.value;
    const perimeterPentagon = parseFloat(perimeterInputPentagonValue);
   

    //Base Pentagon
    const baseInputPentagon = document.getElementById('base-input-pentagon')
    const baseInputPentagonValue = baseInputPentagon.value;
    const basePentagon = parseFloat(baseInputPentagonValue);
   


    //Calculate Area
    const area = 0.5 * perimeterPentagon * basePentagon;
   
    //displaye area
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;
}