
# Architect Agent

The architect agent is an agent which helps to build complete operations, it delegates
the generation of the action, schema and database to the sub-agents. This increases the
quality of the output since the architect agent is only responsible to build a high level
blueprint and each sub-agent generates the actual implementation. For example we could
describe the following:

> Create a Twitter like app where users can publish messages, a user can follow other users and each user has a timeline where the messages of each followed user is shown

The LLM then tries to generate all operations to implement the described use case
and shows them as preview on the right s.

![architect_agent](/img/ai/architect_agent.png)

The action, schema and database fields are prompts which are passed to the sub-agents.
It is also possible to select a different sub-agent in case you want to create an agent for your case.
If you click on "Execute" the agent will create all actions, schemas, database and the operations.

![architect_agent_execute](/img/ai/architect_agent_execute.png)

Note the LLM can of course make mistakes and you should see this only as a starting point
to quickly build a first prototype of your app.
