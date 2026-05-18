import { useCallback, useRef, useState } from 'react';
import {
  endMarketingConversation,
  sendMarketingMessage,
} from './marketingAgentApi';

export interface MarketingMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

let _seq = 0;
const newId = (role: string) => `mkt-${Date.now()}-${_seq++}-${role}`;

export function useMarketingChat() {
  const [messages, setMessages] = useState<MarketingMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const conversationId = useRef<string | null>(null);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading || isComplete) return;

      const userMsg: MarketingMessage = {
        id: newId('user'),
        role: 'user',
        content: trimmed,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);
      setError(null);

      try {
        const data = await sendMarketingMessage(trimmed, conversationId.current);
        conversationId.current = data.conversation_id;
        setMessages((prev) => [
          ...prev,
          {
            id: newId('assistant'),
            role: 'assistant',
            content: data.message,
            timestamp: new Date().toISOString(),
          },
        ]);
        if (data.complete) setIsComplete(true);
      } catch (e) {
        setError(
          e instanceof Error
            ? e.message
            : 'Something went wrong. Please try again.',
        );
      } finally {
        setLoading(false);
      }
    },
    [loading, isComplete],
  );

  const endConversation = useCallback(async () => {
    if (!conversationId.current || isComplete) return;
    setLoading(true);
    try {
      const data = await endMarketingConversation(conversationId.current);
      if (data.message) {
        setMessages((prev) => [
          ...prev,
          {
            id: newId('assistant'),
            role: 'assistant',
            content: data.message,
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } catch {
      /* ending is best-effort — don't surface an error */
    } finally {
      setIsComplete(true);
      setLoading(false);
    }
  }, [isComplete]);

  const clearError = useCallback(() => setError(null), []);

  return {
    messages,
    loading,
    error,
    isComplete,
    sendMessage,
    endConversation,
    clearError,
  };
}
