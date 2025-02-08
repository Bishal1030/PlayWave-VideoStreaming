# PlayWave: Video Streaming App


This web application is a Node.js-based Express server designed for Adaptive Video Streaming using HTTP Live Streaming (HLS). It enables users to upload videos, converts them into multiple quality levels using FFmpeg, and provides a streamable URL. This proof-of-concept demonstrates how high-tech organizations can implement scalable, efficient, and adaptive video streaming to enhance their e-learning platforms, video-sharing services, and enterprise-level content delivery systems.
---

## 📜 Table of Contents

- [About The Project](#about-the-project)
- [Documents](#documents)
- [Overview](#overview)
- [Build With](#build-with)
- [Getting Started](#getting-started)
- [Showcase](#showcase)
- [Contribution](#contribution)
- [License](#license)
- [Credits](#credits)

---

## 🎯 About The Project

PlayWave is an intuitive video streaming platform that allows users to upload videos, transcode them using **FFmpeg**, and stream them using **HLS/DASH protocols**. Designed for performance and scalability, it provides a smooth experience for both **content creators** and **viewers**.

---

## 📄 Documents

Find all the architecture and design documents in the **documents** folder:

- [📜 Architecture Design Document (ADD)](https://docs.google.com/document/d/1NDdKjVpmyU0XsuU9hug-WwuQgxMOEJ7qYrbXcowA4_A/edit?usp=sharing)
- [📜 High-Level Design (HLD)](https://docs.google.com/document/d/1Iy6VMGecBGZWS-3VTBLAoyaLZnp5ehZigVJXZpNd2zo/edit?usp=sharing)
- [📜 Low-Level Design (LLD)](https://docs.google.com/document/d/1J44Jz9v8nM1AdTe0qqYRZoNfEDarSrM_VbPgfkXHaGw/edit?usp=sharing)

---

## 🔎 Overview

- **Upload & Store** videos locally using **Multer**.
- **Process & Transcode** videos with **FFmpeg**.
- **Stream** videos with **adaptive bitrate streaming (HLS/DASH)**.
- **User-friendly UI** built with **React.js**.
- **Deployed using Vercel** for quick and seamless hosting.

---

## 🛠️ Build With

<a href="https://react.dev" target="_blank">
    <img align="left" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React.js" height="42px"/>
</a>
<a href="https://tailwindcss.com" target="_blank">
    <img align="left" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="TailwindCSS" height="42px"/>
</a>
<a href="https://nodejs.org" target="_blank">
    <img align="left" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" height="42px"/>
</a>
<a href="https://expressjs.com" target="_blank">
    <img align="left" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" height="42px"/>
</a>
<a href="https://ffmpeg.org" target="_blank">
    <img align="left" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/FFmpeg_Logo_new.svg" alt="FFmpeg" height="42px"/>
</a>
<a href="https://vercel.com" target="_blank">
    <img align="left" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original-wordmark.svg" alt="Vercel" height="42px"/>
</a>

<br/><br/>

- **Frontend:** React.js, TailwindCSS
- **Backend:** Node.js, Express.js
- **Video Processing:** FFmpeg
- **Storage:** Local server directory
- **Deployment:** Vercel

---

## 🚀 Getting Started

### 1️⃣ Fork & Clone the Repository

```sh
git clone https://github.com/Bishal1030/PlayWave-VideoStreaming.git
```
### 1️⃣ Navigate to the project directory

```sh
cd PlayWave-VideoStreaming
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start Development Server

```sh
npm start
```

### 4️⃣ Visit the App

```sh
http://localhost:3000
```

---

## 🎥 Showcase

🚧 **Coming Soon!** 🚧

(Screenshots and videos will be added here in the future.)

---

## 🤝 Contribution

Want to contribute? Follow these steps:

1️⃣ **Fork the Repository**
```sh
git clone https://github.com/your-username/PlayWave-VideoStreaming.git
```

2️⃣ **Create a New Branch**
```sh
git checkout -b feature-branch-name
```

3️⃣ **Make Your Changes & Commit**

***Add your changes:***
```sh
git add .
```
***Commit your changes***
```sh
git commit -m "Your message here"
```


4️⃣ **Push to Your Fork**
```sh
git push origin feature-branch-name
```

5️⃣ **Create a Pull Request**

Go to [Original Repo](https://github.com/Bishal1030/PlayWave-VideoStreaming.git) and **submit a pull request**. 🚀

---

## ⚖️ License

### Apache License 2.0

```
Apache License
Copyright (c) 2022 Bishal Shahi

"License" shall mean the terms and conditions for use, reproduction,
and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by
the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all
other entities that control, are controlled by, or are under common
control with that entity. For the purposes of this definition,
"control" means (i) the power, direct or indirect, to cause the
direction or management of such entity, whether by contract or
otherwise, or (ii) ownership of fifty percent (50%) or more of the
outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity
exercising permissions granted by this License...
```

This project is licensed under the **Apache License 2.0**.

---

## 💡 Credits

Developed by **Bishal Shahi** ✨

🔗 **GitHub:** [Bishal1030](https://github.com/Bishal1030)  
🔗 **LinkedIn:** [Bishal Shahi](https://linkedin.com/in/bishal1030)  
🔗 **Leetcode:** [@BishalShahi](https://leetcode.com/u/vishal4shahi/)  

Special thanks to **Gigma** for inspiration on this project. 🙌
