// utils/groqAI.ts
import axios from 'axios';
import { aboutMe } from './about-me';

// Message type definition
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Format the about me data into a system prompt
const formatAboutMeAsPrompt = () => {
  return `
This is ${aboutMe.name}'s personal portfolio website. Here's information about him:

- Full Name: ${aboutMe.name}
- Current Role: ${aboutMe.role}
- Education: ${aboutMe.education.join(', ')}
- Skills: ${aboutMe.skills.join(', ')}
- Experience: ${aboutMe.experience.map(exp => `${exp.role} at ${exp.company} (${exp.period})`).join('; ')}
- Projects: ${aboutMe.projects.map(proj => proj.name).join(', ')}
- Achievements: ${aboutMe.achievements.join(', ')}
- Interests: ${aboutMe.interests.join(', ')}
- Contact: Email: ${aboutMe.contact.email}, Portfolio: ${aboutMe.contact.portfolio}
- GitHub: ${aboutMe.contact.github}
- LinkedIn: ${aboutMe.contact.linkedin}

When answering questions, try to incorporate this information when relevant. Be concise but informative in your responses. Format code, urls and technical content properly using markdown.
`;
};

export const groqAI = async (prompt: string, conversationHistory: Message[] = []): Promise<string> => {
  try {
    // Get the system prompt with personal information
    const systemPrompt = formatAboutMeAsPrompt();
    
    // Prepare messages array with system prompt
    const messages: Message[] = [
      {
        role: 'system',
        content: systemPrompt
      }
    ];
    
    // Add conversation history (excluding system messages)
    if (conversationHistory.length > 0) {
      // Only include user and assistant messages from history
      const filteredHistory = conversationHistory.filter(msg => msg.role !== 'system');
      messages.push(...filteredHistory);
    }
    
    // No need to add the current prompt again as it's already in conversationHistory
    
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-8b-8192', // or whichever model you're using
        messages,
        temperature: 0.7,
        max_tokens: 1024
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const data = response.data as { choices: { message: { content: string } }[] };
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling Groq API:', error);
    return 'Sorry, I encountered an error while processing your request.';
  }
};