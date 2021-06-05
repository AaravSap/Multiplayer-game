var ball, database
var position, ballPosition;

//.ref: / (root node)  ball/position

//.on : listens to writes

//.set: makes writes for all databases

//.update: changing the value leads to function update

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    console.log(database)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "brown";
    ballPosition = database.ref("ball/position")
    ballPosition.on("value", readPosition, showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref("ball/position").set({

        x: position.x + x,
        y: position.y + y

   })
}

function readPosition(data){
position = data.val()
ball.x = position.x 
ball.y = position.y 

}

function showError(){
console.log("error in writing to the database")
}
