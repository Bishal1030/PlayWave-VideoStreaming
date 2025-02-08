import React, { useState } from 'react';
import axios from 'axios';

const Home = ({ setLink }) => {
    const [fileChange, setFileChange] = useState(null);

    const fileChangeHandler = (e) => {
        setFileChange(e.target.files[0]);
    };

    const handleVideo = async () => {
        try {
            const formData = new FormData();
            formData.append("file", fileChange);

            const response = await axios.post("http://localhost:3000/uploads", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            const { videoUrl } = response.data;
            setLink(videoUrl); // Ensure setLink is called with videoUrl
            
        } catch (error) {
            console.error("Axios error:", error);
        }
    };

    return (
        <div>
            <h1>Welcome to Play<span style={{color: "orange"}}>Wave</span></h1>
            <input
                type="file"
                accept="video/*"
                onChange={fileChangeHandler}
            />
            <button 
                onClick={handleVideo}
                style={{marginBottom: "4rem", background: "blue"}}
            >
                Upload Video
            </button>
        </div>
    );
};

export default Home;
