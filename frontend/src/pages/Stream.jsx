import { useEffect, useRef } from "react";
import { socket } from "../utils/socket";

const Stream = () => {
  const videoRef = useRef();

  useEffect(() => {
    const loadHandler = async () => {
      const video = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      videoRef.current.srcObject = video;
    };

    window.addEventListener("load", loadHandler);
  }, []);

  const handleClick = () => {
    console.log(videoRef.current.srcObject);
    const mediaRecorder = new MediaRecorder(videoRef.current.srcObject, {
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 2500000,
      framerate: 25,
    });

    mediaRecorder.ondataavailable = (e) => {
      socket.emit("binarystream", e.data);
    };
    mediaRecorder.start(25);
  };

  return (
    <div>
      <video autoPlay muted ref={videoRef}></video>
      <button
        className="bg-black text-white px-2  rounded-md"
        onClick={handleClick}
      >
        Start
      </button>
    </div>
  );
};

export default Stream;
