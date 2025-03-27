import React, { ReactNode, useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { groqAI, Message } from "../utils/groqAI";
import ReactMarkdown from 'react-markdown';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [chatVisible, setChatVisible] = useState(false);
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setChatVisible(!chatVisible);

  // Initialize chat with greeting when first opened
  useEffect(() => {
    if (chatVisible && conversation.length === 0) {
      setConversation([{
        role: 'assistant',
        content: `Hi there! I'm Phanee's AI assistant. Feel free to ask me anything about his background, projects, or skills!`
      }]);
    }
  }, [chatVisible, conversation.length]);

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  // Adjust chat container position based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (chatContainerRef.current) {
        const isMobile = window.innerWidth < 640; // sm breakpoint
        if (isMobile) {
          chatContainerRef.current.style.width = 'calc(100% - 2rem)';
          chatContainerRef.current.style.right = '1rem';
          chatContainerRef.current.style.left = '1rem';
          chatContainerRef.current.style.bottom = '5rem';
        } else {
          chatContainerRef.current.style.width = '';
          chatContainerRef.current.style.left = '';
          chatContainerRef.current.style.right = '1.5rem';
          chatContainerRef.current.style.bottom = '5rem';
        }
      }
    };

    if (chatVisible) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chatVisible]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: input };
    const updatedConversation = [...conversation, userMessage];
    setConversation(updatedConversation);
    setInput("");
    setIsLoading(true);

    try {
      // Get AI response - pass the updated conversation history
      const aiResponse = await groqAI(input, updatedConversation);
      const assistantMessage: Message = { role: 'assistant', content: aiResponse };
      setConversation([...updatedConversation, assistantMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setConversation([...updatedConversation, { 
        role: 'assistant', 
        content: "Sorry, I encountered an error. Please try again." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-custom">
      <main id="page-content" className="container mx-auto px-4 py-4 max-w-4xl">
        {children}
      </main>

      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg hover:bg-black-700 z-50 transition-all duration-300"
        aria-label={chatVisible ? "Close chat" : "Open chat"}
      >
        {chatVisible ? <FaTimes size={18} /> : <FaRobot size={18} />}
      </button>

      {/* AI Chat Widget */}
      {chatVisible && (
        <div 
          ref={chatContainerRef}
          className="fixed bg-white rounded-lg shadow-lg z-40 border border-gray-200 flex flex-col" 
          style={{ 
            maxHeight: '70vh',
            maxWidth: '450px',
            width: window.innerWidth < 640 ? 'calc(100% - 2rem)' : '350px',
            bottom: '5rem',
            right: '1.5rem'
          }}
        >
          {/* Header with Phanee AI title */}
          <div className="bg-black text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <FaRobot className="mr-2" />
              <h3 className="font-semibold">Phanee AI</h3>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-300"
              aria-label="Close chat"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Conversation History */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversation.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`p-3 rounded-lg ${
                    msg.role === 'user' ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-900'
                  } max-w-[85%]`}
                >
                  {msg.role === 'assistant' ? (
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] p-3 rounded-lg bg-gray-100 text-gray-900">
                  <p className="animate-pulse">Thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Auto-scroll anchor */}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Phanee..."
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-gray-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`bg-black text-white p-2 rounded-r-lg focus:outline-none focus:ring-2 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Layout;