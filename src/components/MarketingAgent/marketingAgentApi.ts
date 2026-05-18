// Thin client for the marketing sales concierge. Talks to the public
// `marketing-chat` Supabase edge function, which proxies to the AI service.
//
// Fully environment-driven — NO hardcoded URLs or keys. Set these in the
// hosting environment (Netlify):
//   VITE_SUPABASE_URL       e.g. https://id.opervia.com
//   VITE_SUPABASE_ANON_KEY  the public anon key (required by the Functions
//                            gateway even for public functions)
// If either is missing the widget surfaces a clear error rather than
// silently calling the wrong endpoint.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

export interface MarketingChatResponse {
  message: string;
  conversation_id: string;
  active_agent: string;
  complete: boolean;
}

async function call(body: Record<string, unknown>): Promise<MarketingChatResponse> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      'Chat is unavailable: VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not configured.',
    );
  }

  const res = await fetch(
    `${SUPABASE_URL.replace(/\/+$/, '')}/functions/v1/marketing-chat`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(body),
    },
  );

  let data: Record<string, unknown> = {};
  try {
    data = await res.json();
  } catch {
    /* fall through to status-based error */
  }

  if (!res.ok || data.success === false || data.error) {
    throw new Error((data.error as string) || `Request failed (${res.status})`);
  }
  return data as unknown as MarketingChatResponse;
}

export const sendMarketingMessage = (message: string, conversationId: string | null) =>
  call({ action: 'chat', message, conversationId });

export const endMarketingConversation = (conversationId: string) =>
  call({ action: 'end', conversationId });
