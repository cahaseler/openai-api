# OpenAI ChatGPT Action

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/cahaseler/openai-chatgpt-action.svg?style=flat)](https://github.com/cahaseler/openai-chatgpt-action/releases)
[![GitHub Marketplace](https://img.shields.io/badge/Marketplace-OpenAI%20ChatGPT%20Action-blue?logo=github)](https://github.com/marketplace/actions/openai-chatgpt-action)

This GitHub Action allows you to call the ChatGPT API with a simple prompt and response using your OpenAI API Key, directly from a GitHub Workflow.

## Usage

Include the step in your GitHub workflow YAML:

```yaml
- name: Get ChatGPT completion
  id: chatgpt
  uses: cahaseler/openai-chatgpt-action@v1
  with:
    apiKey: ${{ secrets.OPENAI_API_KEY }}
    prompt: 'Please generate github best practices formatted pull request content in markdown based on the following commit messages and diffs'
    input: 'put whatever you want in here'
    model: 'gpt-4'
    temperature: 1
    max_tokens: 200
```

## Inputs

| Name | Description | Required |
| --- | --- | :---: |
| `apiKey` | Your OpenAI API Key. | ✔ |
| `prompt` | Prompt for the chat completion. | ✔ |
| `input` | User input for the chat completion. | ✔ |
| `model` | The model to use for the chat completion. | ✔ |
| `temperature` | The temperature parameter for the chat completion (default: 1). | |
| `max_tokens` | The max tokens parameter for the chat completion (default: 1000). | |

## Outputs

| Name | Description |
| --- | --- |
| `completion` | The message content of the chat completion. |
| `usage_prompt_tokens` | The number of tokens used in the prompt. |
| `usage_completion_tokens` | The number of tokens used in the completion. |
| `usage_total_tokens` | The total number of tokens used. |

## License

[MIT](LICENSE)

## Need help?

Feel free to create an issue if you have questions or problems.
