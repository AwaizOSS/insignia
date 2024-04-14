import path from "path";
import { spawn } from "child_process";

import express from "express";
import cors from "cors";
import { Server as SocketIO } from "socket.io";

const app = express();

// app.use(cors());

const server = app.listen(3000, () => {
  console.log("App running on port 3000");
});
const io = new SocketIO(server);

const options = [
  "-i",
  "-",
  "-c:v",
  "libx264",
  "-preset",
  "ultrafast",
  "-tune",
  "zerolatency",
  "-r",
  `${25}`,
  "-g",
  `${25 * 2}`,
  "-keyint_min",
  25,
  "-crf",
  "25",
  "-pix_fmt",
  "yuv420p",
  "-sc_threshold",
  "0",
  "-profile:v",
  "main",
  "-level",
  "3.1",
  "-c:a",
  "aac",
  "-b:a",
  "128k",
  "-ar",
  128000 / 4,
  "-f",
  "flv",

  // replace your-stream-key with your actual stream key
  `rtmp://a.rtmp.youtube.com/live2/your-stream-key`,
];

const ffmpegProcess = spawn("ffmpeg", options);

ffmpegProcess.stdout.on("data", (data) => {
  console.log(`ffmpeg stdout: ${data}`);
});

ffmpegProcess.stderr.on("data", (data) => {
  console.error(`ffmpeg stderr: ${data}`);
});

ffmpegProcess.on("close", (code) => {
  console.log(`ffmpeg child process exited with code ${code}`);
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);
  socket.on("binarystream", (stream) => {
    console.log(stream);
    ffmpegProcess.stdin.write(stream, (err) => {
      // console.log("Err", err);
    });
  });
});
