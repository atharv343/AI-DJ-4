Believer="";
DM="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
scorerightWrist=0;
Song_name = "";


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
   Believer = loadSound("believer.mp3");
    DM = loadSound("Dance Monkey.mp3");
}

function draw(){
    image(video,0,0,600,530);

    fill("#00ff00");
    stroke("#ff0000");

    Song_name = "Believer is Playing";
    console.log(Song_name);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        DM.stop();
            Believer.play();
            document.getElementById("song_id").innerHTML = "Song Name: Believer";
        }
        if(Believer== false){
            circle(leftWrist_x,leftWrist_y,20);
            Believer.play();
               DM.stop();
                document.getElementById("song_id").innerHTML = "Song Name: Believer";
            }
    
    if(scorerightWrist > 0.2){
        circle(rightWrist_x,rightWrist_y,20);
        DM.play();
            Believer.stop();
            document.getElementById("song_id").innerHTML = "Song Name: Dance Monkey";
        }
        if(DM== false){
            circle(leftWrist_x,leftWrist_y,20);
            DM.play();
               Believer.stop();
                document.getElementById("song_id").innerHTML = "Song Name: Dance Monkey";
            }
        }



function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}
function stop(){
   DM.stop();
   Believer.stop();
}










      
