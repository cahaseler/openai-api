import OpenAI from 'openai'

/**
 * Generates a chat completion using the OpenAI API.
 *
 * @param {string} apiKey - The API key for accessing the OpenAI API.
 * @param {string} prompt - The prompt for the chat completion.
 * @param {string} input - The user input for the chat completion.
 * @param {string} model - The model to use for the chat completion.
 * @param {number} temperature - The temperature parameter for the chat completion.
 * @param {number} max_tokens - The max_tokens parameter for the chat completion.
 * @return {Promise} A Promise that resolves to the completion response.
 */
export async function getSimpleChatCompletion(
  apiKey: string,
  prompt: string,
  input: string,
  model: string,
  temperature: number,
  max_tokens: number
): Promise<OpenAI.Chat.ChatCompletion> {
  const openai = new OpenAI({
    apiKey
  })
  const messages: OpenAI.Chat.CreateChatCompletionRequestMessage[] = [
    {
      role: 'system',
      content: prompt
    },
    {
      role: 'user',
      content: input
    }
  ]
  const completion = await openai.chat.completions.create({
    messages,
    model,
    temperature,
    max_tokens
  })

  return completion
}
