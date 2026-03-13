'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I am the SNEP Assistant. Ask me anything about our projects, loans, or membership.' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        // Create new message object
        const newUserMsg = { role: 'user', content: userMsg };

        // Update local state immediately
        const newHistory = [...messages, newUserMsg];
        setMessages(newHistory);
        setInput('');
        setIsLoading(true);

        try {
            // Send the last 10 messages (plus system prompt context) to the API
            // We slice to keep context window manageable
            const recentHistory = newHistory.slice(-10);

            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: recentHistory }),
            });

            const data = await res.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Helper to parse **bold** text
    const formatMessage = (text) => {
        if (!text) return "";
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, index) =>
            index % 2 === 1 ? <strong key={index}>{part}</strong> : part
        );
    };

    return (
        <div className={styles.widgetContainer}>
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <h3>SNEP Support</h3>
                        <button onClick={() => setIsOpen(false)} className={styles.closeBtn} aria-label="Close chat">
                            &times;
                        </button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`${styles.bubble} ${msg.role === 'user' ? styles.user : styles.bot}`}>
                                {formatMessage(msg.content)}
                            </div>
                        ))}
                        {isLoading && <div className={`${styles.bubble} ${styles.bot}`}>typing...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSubmit} className={styles.inputForm}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                            className={styles.input}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className={styles.sendBtn}>
                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M4 12h14M14 6l6 6-6 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            )}

            <button
                className={styles.toggleBtn}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chat"
            >
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                            d="M6 6l12 12M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                            d="M21 12a8 8 0 01-8 8H7l-4 3 1.2-4.8A8 8 0 015 4h8a8 8 0 018 8z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}
