import * as core from '@actions/core'
import { getSimpleChatCompletion } from './openai'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const apiKey: string = core.getInput('apiKey')
    const prompt: string = core.getInput('prompt')
    const input: string = core.getInput('input')
    const model: string = core.getInput('model')
    const temperature: number = parseInt(core.getInput('temperature'), 1000)
    const max_tokens: number = parseInt(core.getInput('max_tokens'), 1)

    core.debug(`Getting chat completion ...`)

    const completionResponse = await getSimpleChatCompletion(
      apiKey,
      prompt,
      input,
      model,
      temperature,
      max_tokens
    )

    const completion = completionResponse?.choices[0]?.message?.content
    if (!completion) {
      core.setFailed('No completion provided')
    }
    core.setOutput('completion', completion)
    core.setOutput(
      'usage_prompt_tokens',
      completionResponse?.usage?.prompt_tokens ?? 0
    )
    core.setOutput(
      'usage_completion_tokens',
      completionResponse?.usage?.completion_tokens ?? 0
    )
    core.setOutput(
      'usage_total_tokens',
      completionResponse?.usage?.total_tokens ?? 0
    )
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
run()
