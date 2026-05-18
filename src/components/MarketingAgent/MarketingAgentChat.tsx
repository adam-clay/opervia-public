import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMarketingChat } from './useMarketingChat';
import './MarketingAgentChat.scss';

const DEFAULT_COLOR = '#1e3a5f'; // brand blue ($blue-700)

// Routes where a sales concierge would be out of place.
const HIDDEN_PATHS = ['/sms-terms', '/privacy-policy', '/terms-of-service'];

const ChatIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const MarketingAgentChat: React.FC<{ primaryColor?: string }> = ({
  primaryColor = DEFAULT_COLOR,
}) => {
  const {
    messages,
    loading,
    error,
    isComplete,
    sendMessage,
    endConversation,
    clearError,
  } = useMarketingChat();

  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--agent-primary-color',
      primaryColor,
    );
  }, [primaryColor]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    const textarea = inputRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [userInput]);

  const handleSend = async (text?: string) => {
    const msg = (text ?? userInput).trim();
    if (!msg || loading) return;
    setUserInput('');
    await sendMessage(msg);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const chatWindow = (
    <div className="agent-chat__window agent-chat__window--floating">
      <div className="agent-chat__header">
        <div className="agent-chat__header-info">
          <div className="agent-chat__header-avatar">
            <ChatIcon size={20} />
          </div>
          <div>
            <div className="agent-chat__header-title">Opervia</div>
            <div className="agent-chat__header-subtitle">Sales assistant</div>
          </div>
        </div>
        <div className="agent-chat__header-actions">
          {!isComplete && messages.length > 0 && (
            <button
              className="agent-chat__header-btn agent-chat__header-btn--end"
              onClick={endConversation}
              title="End conversation"
              type="button"
            >
              End
            </button>
          )}
          <button
            className="agent-chat__header-btn"
            onClick={toggleOpen}
            title="Minimize"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      <div className="agent-chat__messages">
        {messages.length === 0 && !loading && (
          <div className="agent-chat__welcome">
            <div className="agent-chat__welcome-icon">
              <ChatIcon size={32} />
            </div>
            <p className="agent-chat__welcome-text">
              Hi! Ask me anything about Opervia.
            </p>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`agent-chat__message agent-chat__message--${
              msg.role === 'user' ? 'user' : 'assistant'
            }`}
          >
            <div className="agent-chat__message-bubble">{msg.content}</div>
          </div>
        ))}

        {loading && (
          <div className="agent-chat__message agent-chat__message--assistant">
            <div className="agent-chat__message-bubble">
              <div className="agent-chat__typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {error && (
        <div className="agent-chat__error">
          <span>{error}</span>
          <button onClick={clearError} type="button">
            x
          </button>
        </div>
      )}

      {!isComplete ? (
        <form
          className="agent-chat__input-area"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <textarea
            ref={inputRef}
            className="agent-chat__input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={loading ? 'Thinking...' : 'Type a message...'}
            disabled={loading}
            rows={1}
          />
          <button
            className="agent-chat__send-btn"
            type="submit"
            disabled={!userInput.trim() || loading}
            aria-label="Send message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      ) : (
        <div className="agent-chat__complete-bar">
          <span>Conversation ended</span>
        </div>
      )}

      <div className="agent-chat__powered-by">
        Powered by{' '}
        <a href="https://opervia.com" target="_blank" rel="noopener noreferrer">
          Opervia
        </a>
      </div>
    </div>
  );

  return (
    <div className="agent-chat">
      {isOpen && chatWindow}
      {isOpen ? (
        <button
          className="agent-chat__bubble agent-chat__bubble--close"
          onClick={toggleOpen}
          type="button"
          aria-label="Close chat"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      ) : (
        <button
          className="agent-chat__trigger"
          onClick={toggleOpen}
          type="button"
          aria-label="Open chat"
        >
          <img
            className="agent-chat__trigger-icon"
            src="/images/opervia-icon-icononly.png"
            alt="Opervia"
          />
          <span className="agent-chat__trigger-text">How can I help?</span>
        </button>
      )}
    </div>
  );
};

// Route-gated mount: hidden on legal pages, shown everywhere else.
export const MarketingAgentWidget: React.FC = () => {
  const { pathname } = useLocation();
  if (HIDDEN_PATHS.includes(pathname)) return null;
  return <MarketingAgentChat />;
};

export default MarketingAgentChat;
