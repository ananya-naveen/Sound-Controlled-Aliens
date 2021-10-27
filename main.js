function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xAoiSius-/model.json',modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("resultLabel").innerHTML="I can hear- "+results[0].label;
        document.getElementById("resultConfidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("resultLabel").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("resultConfidence").style.color="rgb("+r+","+g+","+b+")";
        image1=document.getElementById("alien1");
        image2=document.getElementById("alien2");
        image3=document.getElementById("alien3");
        image4=document.getElementById("alien4");
        if(results[0].label=="Clap"){
            image1.src="aliens-01.gif";
            image2.src="aliens-02.png";
            image3.src="aliens-03.png";
            image4.src="aliens-04.png";
        }
        else if(results[0].label=="Snap"){
            image1.src="aliens-01.png";
            image2.src="aliens-02.gif";
            image3.src="aliens-03.png";
            image4.src="aliens-04.png";
        }
        else if(results[0].label=="Bell"){
            image1.src="aliens-01.png";
            image2.src="aliens-02.png";
            image3.src="aliens-03.gif";
            image4.src="aliens-04.png";
        }
        else{
            image1.src="aliens-01.png";
            image2.src="aliens-02.png";
            image3.src="aliens-03.png";
            image4.src="aliens-04.gif";
        }
    }
}