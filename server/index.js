import express from "express";
import cors from "cors";
import multer from "multer";
import { v1 as uuidv4 } from "uuid";
import logger from "./logger/logger.js";
import path from "path";
import fs from "fs";
import { spawn } from "child_process";

const app = express();

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + uuidv4() + path.extname(file.originalname));
    }
});

// Multer Middleware
const upload = multer({ storage: storage });

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:5173"],
        credentials: true,
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"]
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Root Route
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
    logger.info("GET / successful");
});

// Video Upload & Processing Route
app.post("/uploads", upload.single("file"), function (req, res) {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const lessonId = uuidv4();
    const videoPath = req.file.path;
    const outputPath = `./uploads/courses/${lessonId}`;
    const hlsPath = `${outputPath}/index.m3u8`;

    logger.info(`Processing HLS for: ${hlsPath}`);
    console.log(`Processing HLS for: ${hlsPath}`);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }

    // FFmpeg Command Arguments
    const ffmpegArgs = [
        "-i", videoPath,
        "-codec:v", "libx264",
        "-codec:a", "aac",
        "-hls_time", "10",
        "-hls_playlist_type", "vod",
        "-hls_segment_filename", `${outputPath}/segment%03d.ts`,
        "-start_number", "0",
        hlsPath
    ];

    // Spawn FFmpeg Process
    const ffmpegProcess = spawn("ffmpeg", ffmpegArgs);

    // Capture FFmpeg Logs
    ffmpegProcess.stdout.on("data", (data) => {
        logger.info(`FFmpeg stdout: ${data}`);
        console.log(`FFmpeg stdout: ${data}`);
    });

    ffmpegProcess.stderr.on("data", (data) => {
        logger.error(`FFmpeg stderr: ${data}`);
        console.error(`FFmpeg stderr: ${data}`);
    });

    // Handle FFmpeg Completion
    ffmpegProcess.on("close", (code) => {
        if (code === 0) {
            const videoUrl = `http://localhost:3000/uploads/courses/${lessonId}/index.m3u8`;
            res.json({
                message: "File uploaded and converted successfully",
                videoUrl: videoUrl,
                lessonId: lessonId
            });
        } else {
            logger.error(`FFmpeg process exited with code ${code}`);
            res.status(500).json({ error: "Video processing failed" });
        }
    });
});

// Start Server
app.listen(3000, () => {
    console.log("App is running at port 3000");
});
