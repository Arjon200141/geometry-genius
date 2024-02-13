function calculateParallelogramArea(){
    //Base Triangle
     const baseInputParallelogram = document.getElementById('base-input-parallelogram')
     const baseInputParallelogramValue = baseInputParallelogram.value;
     const baseParallelogram = parseFloat(baseInputParallelogramValue);
  

     //Height Triangle
     const heightInputParallelogram = document.getElementById('height-input-parallelogram')
     const heightInputParallelogramValue = heightInputParallelogram.value;
     const heightParallelogram = parseFloat(heightInputParallelogramValue);


      //Calculate Area
     const area = baseParallelogram * heightParallelogram;


     //displaye area
     const parallelogramArea = document.getElementById('parallelogram-area');
     parallelogramArea.innerText = area;
}