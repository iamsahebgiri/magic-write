import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const { sentence } = await req.json();
  if (sentence === '') {
    return new Response('No sentence was provided.');
  }


  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'user',
        content: `I want you to act as a resume builder expert who writes effective resume bullet points. I will provide a sentence from my resume, you need to rephrase it for my resume. Here's a specific framework to follow:

- Start with a strong Action Verb in past tense. Avoid using weak verbs.
- Remember, point should always tell the recruiter what you accomplished not responsibilities. 
- QUANTIFY impact using numbers and metrics.
- Don't use fillers (e.g. 'various', 'multiple'). Instead, be specific by using numbers (e.g. Don't say you 'implemented various features'. Instead, say you 'implemented 10+ features').
- Remove personal pronouns (e.g. I, my, their).
- 1-2 lines long. Short, succinct bullet points are key to your resume's readability.

Use the following format:
  • [Action Verb] [Task], resulting in [Metric] (e.g. Implemented XYZ, resulting in over $200K in annual revenue), or
  • [Action Verb] [Metric] [Task] (e.g. Doubled revenue to $100K through the implementation of XYZ)

SENTENCE:
- Designed a Linear style interface in Typescript to personalize the appearance with mobile-first in mind.

REPHRASED SENTENCE FOR RESUME:
- Developed a cutting-edge Linear style interface in TypeScript, prioritizing mobile-first design principles; enhanced user experience and achieved a 40% decrease in bounce rate.
- Engineered a personalized appearance feature for the interface, leveraging TypeScript to dynamically adapt UI elements; improved user engagement and increased session durations by 25%.
- Implemented a mobile-first design approach for the Linear style interface using TypeScript; optimized user interactions and achieved a 30% increase in mobile conversion rates.

List 5 such rewrites for the sentence "${sentence}" in bullet points starting with '•'.`,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
  // return new Response("Hello");
}
