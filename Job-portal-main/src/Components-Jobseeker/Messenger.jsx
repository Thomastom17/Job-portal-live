import React, { useState, useEffect, useRef } from 'react';
import './Messenger.css';
import { useJobs } from './Jobcontext';

export const Messenger = () => {
    const { chats, setChats} = useJobs();
    const [input, setInput] = useState("");
    const scrollRef = useRef(null);
    

    
    const employerChat = chats.find(c => c.role === "employer");

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [employerChat.messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMsg = {
            id: Date.now(),
            text: input,
            sender: "me", 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setChats(prev => prev.map(chat => 
            chat.id === employerChat.id ? { ...chat, messages: [...chat.messages, newMsg] } : chat
        ));
        setInput("");
    };

    return (
        <div className="web-messenger-container">
            <div className="E-chat-name">
                <div style={{ height: "100vh" }} className="web-sidebar">
                    <div className="sidebar-header"><h2>Messages</h2></div>
                    <div className="sidebar-item active">
                        <strong>{employerChat.name}</strong>
                    </div>
                </div>
            </div>

            <div className="web-main-chat">
                <header className="web-chat-header">
                    <strong>{employerChat.name}</strong>
                </header>
                <div className="web-chat-window" ref={scrollRef}>
                    {employerChat.messages.map((m) => (
                        <div key={m.id} className="web-msg-row">
                            <div className={`web-bubble web-${m.sender}`}>{m.text}</div>
                        </div>
                    ))}
                </div>
                <form className="web-input-bar" onSubmit={handleSend}>
                    <input className="web-text-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type HII..." />
                    <button type="submit" className="web-send-button">SEND</button>
                </form>
            </div>
        </div>
    );
};