
# Database Agent

The database agent helps to generate a database schema for a relational
database like Postgres or Mysql. In the message you need to describe what
entries you like to persist for example:

> Create a table to store todo entries

The LLM tries to generate the fitting tables and foreign key relations
and shows a preview on the right s.

![database_agent](/img/ai/database_agent.png)

If the schema looks good you can use the "Execute" button to actually
create the schema on the selected connection.
