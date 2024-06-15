"use client"
import React, {useEffect, useRef} from 'react';
import * as faceapi from 'face-api.js'

const FaceDetection = () => {
    let i = 0
    const videoRef = useRef()
    const canvasRef = useRef()
    useEffect(()=>{
        startVideo()
        videoRef && loadModels()

    },[])



    // OPEN YOU FACE WEBCAM
    const startVideo = ()=>{
        navigator.mediaDevices.getUserMedia({video:true})
            .then((currentStream)=>{
                videoRef.current.srcObject = currentStream
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    // LOAD MODELS FROM FACE API

    const loadModels = ()=>{
        Promise.all([
            // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
            faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
            faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
            faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
            faceapi.nets.faceExpressionNet.loadFromUri("/models")

        ]).then(()=>{
            faceMyDetect()
        })
    }

    const faceMyDetect = ()=>{
        setInterval(async()=>{
            const detections = await faceapi.detectAllFaces(videoRef.current,
                new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            console.log(detections)
            canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
            faceapi.matchDimensions(canvasRef.current,{
                width:940,
                height:650
            })

            const resized = faceapi.resizeResults(detections,{
                width:940,
                height:650
            })
            faceapi.draw.drawDetections(canvasRef.current,resized)
            faceapi.draw.drawFaceLandmarks(canvasRef.current,resized)
            faceapi.draw.drawFaceExpressions(canvasRef.current,resized)
                if(resized.length >0 ){
                    i++
                    if (i > 0){
                        console.log(resized.length,"OK")
                    }
                }
        },1000)
    }
    return (
        <div>
            <div className="myapp">
                <h1>FAce Detection</h1>
                <div className="appvide">

                    <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
                </div>
                <canvas ref={canvasRef} width="940" height="650"
                        className="appcanvas"/>
            </div>
        </div>
    );
};

export default FaceDetection;