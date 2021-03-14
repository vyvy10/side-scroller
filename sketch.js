var man;
let img, img2, img3;
// let rock;
let rocks = [];
let bombs = [];
let scene;


function setup() {
  createCanvas(400, 400);

  img = loadImage("Mathman2.png");
  img2 = loadImage("rock.png")
  img3 = loadImage("bomb.jpg")
  man = new Person(img);
  bckgrnd = loadImage("mountain.jpg")
  scene = 1
  // rock = new Obstacle(img2);

  //obstacles
  for (let i = 0; i < 10; i++) {
    rocks[i] = new Obstacle(img2, random(15));
  }
  //obstacles2
  for (let i = 0; i < 10; i++) {
    bombs[i] = new Obstacle2(img3, random(15));

  }


}

