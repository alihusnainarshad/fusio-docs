
# Agent Call

Invokes a configured agent

## Configuration

### Agent

The agent which should be invoked

### Structured output

Indicates whether the agent returns structured output, in this case the response
contains only the structured output and not the complete output

## Execution

Sends the provided user prompt to the agent, optional it is possible to provide a
"previousId" to refer to an existing conversation. Note it is only possible to invoke
such an agent as authenticated user since all messages are stored for a specific
user, this means each user has its own chat history.

## Request

```json
{
  "previousId": "",
  "item": {
    "type": "text",
    "content": "how can I solve 8x + 7 = -23"
  }
}
```

## Response

```json
{
  "item": {
    "type": "text",
    "content": "The answer is: x = -15 / 4"
  }
}
```

## Response (structured output)

```json
{
  "steps": [
    {
      "explanation": "Start with the equation 8x + 7 = -23.",
      "output": "8x + 7 = -23"
    },
    {
      "explanation": "Subtract 7 from both sides to isolate the term with the variable.",
      "output": "8x = -23 - 7"
    },
    {
      "explanation": "Simplify the right side of the equation.",
      "output": "8x = -30"
    },
    {
      "explanation": "Divide both sides by 8 to solve for x.",
      "output": "x = -30 / 8"
    },
    {
      "explanation": "Simplify the fraction.",
      "output": "x = -15 / 4"
    }
  ],
  "final_answer": "x = -15 / 4"
}
```
