let wWidth = 800;
let wHeight = 400;
let resolution = 5;

let cols;
let rows;
let currentGeneration;
let chanceOfInfection = 350000;
let chanceOfInfectionSpread = 100;
var cnv;


// TODO: Add buttons for Restarting, pause/resume, and stop sketch
function setup(){
  cnv = createCanvas(wWidth, wHeight);

  let xStart = (windowWidth-wWidth)/2;
  let yStart = (windowHeight-wHeight+100)/2;

  //this puts the canvas in the middle of the screen.
  // TODO: this currently doesn't sit under the horizontal ruler on page
  //        without the +100 for yStart
  cnv.position(xStart,yStart);

  cols = wWidth/resolution;
  rows = wHeight/resolution;

  currentGeneration = createGeneration(cols, rows);

  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      let inf = floor(random(chanceOfInfection));
      let newPair = {state: floor(random(2)), infected:  inf == 33 ? 1:0}; //probability if this cell is infected

      currentGeneration[i][j] = newPair;  //each cell is binary - can be either 1 or 0
    }
  }
}

function draw(){
    background(0);

    //draw the current generation
    for(let i = 0; i < cols; i++){
      for(let j = 0; j < rows; j++){
        let x = i*resolution;
        let y = j*resolution;

        if(currentGeneration[i][j].state == 1 && currentGeneration[i][j].infected == 0)
        {
          fill(255);
          stroke(0);

          rect(x,y,resolution-1,resolution-1);
        }
        else if(currentGeneration[i][j].state == 1 && currentGeneration[i][j].infected == 1){
          fill(0,255,0);
          stroke(0);

          rect(x,y,resolution-1,resolution-1);
        }
        else{;}
      }
    }

    //compute the next generation with rules
    let nextGeneration = createGeneration(cols, rows);

    for(let i = 0; i < cols; i++){
      for(let j = 0; j < rows; j++){
        let state = currentGeneration[i][j].state;
        let infected = currentGeneration[i][j].infected;

        let neighborCount = neighborhood(currentGeneration,i,j);
        let isInfected = isNeighborInfected(currentGeneration,i,j);

        //dead cells with 3 neighbors yeilds life
        if(state == 0 && neighborCount == 3){
          //is one of the neighbors infected?
          if(isInfected == 1){
            let pair = {state: 1, infected: 1};
            nextGeneration[i][j] = pair;
          }
          else{
            let inf = floor(random(chanceOfInfection));
            let pair = {state: 1, infected:  inf == 33 ? 1:0};
            nextGeneration[i][j] = pair;
          }
        }
        //live cell with more than 3 neighbors, or less than 2 neighbors yields death
        else if(state == 1 && (neighborCount < 2 || neighborCount > 3)){
          let pair = {state: 0, infected: 0};
          nextGeneration[i][j] = pair;
        }
        //else the cell stays the same to the next generation
        else
        {
          let pair = {state: state, infected: infected};
          nextGeneration[i][j] = pair;
        }
      }
    }

    currentGeneration = nextGeneration;
}

//create the 2d array
function createGeneration(col, rows){
  let ret = new Array(cols);

  for(let i = 0; i < ret.length; i++){
    ret[i] = new Array(rows);
  }

  return ret;
}

//count the number of neighbors for the cell at x,y
function neighborhood(currentGeneration, x, y){
  let count = 0;
  //edge cases - treat them as cyclic <- prob not a word
  for(let i = -1; i < 2; i++){
    for(let j = -1; j < 2; j++){
      //exclude the node whose neighborhood it is

        let a = (x + i + cols)% cols;   //x is the starting coord, cols is how wide the box is, i is which box it is
        let b = (y + j + rows)% rows;
        count += currentGeneration[a][b].state;

    }
  }
  count -= currentGeneration[x][y].state;
  return count;
}

//count the number of neighbors for the cell at x,y
function isNeighborInfected(currentGeneration, x, y){
  let inf = false;
  //edge cases - treat them as cyclic <- prob not a word
  for(let i = -1; i < 2; i++){
    for(let j = -1; j < 2; j++){
      //exclude the node whose neighborhood it is

        let a = (x + i + cols)% cols;   //x is the starting coord, cols is how wide the box is, i is which box it is
        let b = (y + j + rows)% rows;
        if(currentGeneration[a][b].infected == 1){
          inf = true;
        }
    }
  }
  return inf;
}
