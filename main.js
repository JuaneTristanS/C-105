Webcam.set({
    height: 350,
    width: 300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").value = '<img id="result_image" src=" ' + data_uri + ' ">';
    });
}

console.log('ml5.js version : ', ml5.version);

object_name = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0S_N1xB6J/model.json", image_loaded);

function image_loaded() {
    console.log("Model is Loaded");
}

function identify() {
    img = document.getElementById("result_image");
    object_name.classify(img, get_result);
}

function get_result(error, result) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accu").innerHTML = confidence[0].accu.toFixed(3);
    }
}