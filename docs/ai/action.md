
# Action Agent

The action agent helps you to build custom action business logic.
You can simply describe what you want to build and the agent tries
to generate the fitting action logic. For example we could describe
the following logic:

> Create an action which returns popular composers of the 19th century

For the action agent Fusio has a special view which shows on the right
the generated code in an editor.

![action_agent](/img/ai/action_agent.png)

You can of course send also more messages to improve or fix the generated
code. If you use the "Execute" button Fusio will create/update the action
and execute it and directly return the response of the action.

![action_agent_execute](/img/ai/action_agent_execute.png)

Through this you have an easy feedback loop to work together with the LLM
agent to produce the fitting logic. Internally the agent has access to all
tools regarding connections, and it can also discover the structure of your
database.
