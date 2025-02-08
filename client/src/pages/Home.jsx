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
        <div className='transform -translate-y-20'>
            <h1 className='mb-6' style= {{fontFamily: 'Karantina, cursive'}}>Welcome to Play<span className='text-customRed'>Wave</span></h1>
            <div className='flex flex-col items-center'>
            <input
                type="file"
                accept="video/*"
                onChange={fileChangeHandler}
                className="mb-4 mr-1 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none"            />
            <button 
                onClick={handleVideo}
                style= {{fontFamily: 'Karantina, cursive', backgroundColor: '#B37270', color: 'white', fontSize: '1rem', fontWeight: 'bold'}}
            >
                Upload Video
            </button>
            </div>
        </div>
    );
};

export default Home;
