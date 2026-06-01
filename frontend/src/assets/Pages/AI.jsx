import React, { useState, useEffect, useRef } from 'react';
import { IoSend } from 'react-icons/io5';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Footer from '../Footer';

const AI = () => {
  const [message, setMessage] = useState("");
  const [isResponseScreen, setIsResponseScreen] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null); // To scroll to bottom when new message appears


  const handleCardClick = (text) => {
    setMessage(text);
  };

  const hitRequest = () => {
    if (message) {
      generateResponse(message);
    } else {
      alert("You must write something...!");
    }
  };

  const generateResponse = async (msg) => {
    if (!msg) return;

    const genAI = new GoogleGenerativeAI("Add your own key");
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(msg);

    const responseText = result.response.text();

    // Dynamic formatting for lists or structured content
    let formattedResponse = responseText;
    if (/\d+\./.test(responseText) || /•/.test(responseText)) {
      formattedResponse = responseText.replace(/\d+\./g, "<strong>$&</strong>") // Bold for numbered lists
        .replace(/•/g, "<strong>•</strong>")      // Bold for bullets
        .replace(/\n/g, "<br/>");                  // Line breaks
    }

    const newMessages = [
      ...messages,
      { type: "userMsg", text: msg },
      { type: "responseMsg", text: formattedResponse },
    ];

    setMessages(newMessages); // Update messages with new response
    setIsResponseScreen(true);
    setMessage(""); // Clear input after sending
  };

  const newChat = () => {
    setIsResponseScreen(false);
    setMessages([]); // Clear previous chat
  };

  useEffect(() => {
    // Auto-scroll to the bottom when new messages are added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="w-screen h-screen flex flex-col   text-white relative overflow-scroll">
      <video
        id="fullscreen-video"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://www.pexels.com/download/video/8025557/"
          type="video/mp4"
        />
      </video>
      {isResponseScreen ? (
        <div className="flex-1 overflow-auto messages">
          <div className="header pt-[25px] flex items-center justify-between w-full px-[300px]">
            <h2 className='text-2xl'>Hey! I'm your trip adviser, ask me anything</h2>
            <button id='newChatBtn' className='bg-[#181818] p-[10px] rounded-[30px] cursor-pointer text-[14px] px-[20px]' onClick={newChat}>New Chat</button>
          </div>

          <div className="messages px-[300px] ">
            {messages?.map((msg, index) => (
              <div
                key={index}
                className={msg.type}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              ></div>
            ))}
            <div ref={messagesEndRef} /> {/* Reference to trigger auto-scroll */}
          </div>
        </div>
      ) : (
        <div className="flex-1 h-[80vh] flex items-center flex-col justify-center">
          <h1 className='text-4xl'>Hey, I am your trip advisor 😁</h1>
          <div className="boxes mt-[30px] flex items-center gap-2">
            <div className="card rounded-lg cursor-pointer transition-all px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px] bg-opacity-75 hover:bg-opacity-80 animate-slowFadeIn2" onClick={() => handleCardClick("Trip to Shimla with Family..")}>
              <p className='text-[18px]'>Trip to Shimla with Family..</p>
              <i
                className='absolute right-3 bottom-3 text-[18px] bg-cover bg-center w-[30px] h-[30px]'
                style={{
                  backgroundImage: `url(/family.png)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              ></i>
            </div>
            <div className="card rounded-lg cursor-pointer transition-all px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px] bg-opacity-75 hover:bg-opacity-80 animate-slowFadeIn2" onClick={() => handleCardClick("Top 5 destinations of Himachal Pradesh")}>
              <p className='text-[18px]'>Top 5 destinations of Himachal Pradesh...</p>
              <i
                className='absolute right-3 bottom-3 text-[18px] bg-cover bg-center w-[30px] h-[30px]'
                style={{
                  backgroundImage: `url(/top-10.png)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              ></i>
            </div>
            <div className="card rounded-lg cursor-pointer transition-all px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px] bg-opacity-75 hover:bg-opacity-80 animate-slowFadeIn2" onClick={() => handleCardClick("Tell me about Himachal Pradesh and how can I reach?")}>
              <p className='text-[18px]'>Tell me about Himachal Pradesh <br /> and how can I reach?</p>
              <i
                className='absolute right-3 bottom-3 text-[18px] bg-cover bg-center w-[30px] h-[30px]'
                style={{
                  backgroundImage: `url(/mountain.png)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              ></i>
            </div>
            <div className="card rounded-lg cursor-pointer transition-all px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px] bg-opacity-75 hover:bg-opacity-80 animate-slowFadeIn2" onClick={() => handleCardClick("Festivals of Himachal Pradesh")}>
              <p className='text-[18px]'>Festivals of Himachal Pradesh</p>
              <i
                className='absolute right-3 bottom-3 text-[18px] bg-cover bg-center w-[30px] h-[30px]'
                style={{
                  backgroundImage: `url(/lion-dance.png)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              ></i>
            </div>
          </div>
        </div>
      )}

      {/* Input box section at the bottom */}
      <div className="bottom w-full flex flex-col items-center py-4 bg-[#0E0E0E]">
        <div className="inputBox w-[60%] text-[15px] py-[7px] flex items-center bg-[#181818] rounded-[30px]">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className='p-[10px] pl-[15px] bg-transparent flex-1 outline-none border-none'
            placeholder='Write your message here...'
            id='messageBox'
          />
          {message && (
            <i className='text-green-500 text-[20px] mr-5 cursor-pointer' onClick={hitRequest}>
              <IoSend />
            </i>
          )}
        </div>
        <p className='text-[gray] text-[14px] my-4'>
          You can ask me anything regarding trip... 😊
        </p>
      </div>
      
      
    </div>
  );
};

export default AI;

