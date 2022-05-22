function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier - ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tV-5fgEpr/model.json',nodelReady)
}

function modelReady() {
    classifier.classify(gotResults);
}