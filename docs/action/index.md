
# Action

An action contains the business logic of your API endpoint. Fusio provides out of the
box predefined actions which handle common tasks like selecting data from a table or
proxy a request to an internal API. You can discover all existing actions at the
[action index](/docs/backend/api/action/).

## Worker

Besides these available actions which can be configured Fusio provides `Worker` actions
which allow you to specify the action logic directly at the backend using a specific
programming language. These worker actions can be used to implement custom backend logic.

![worker_php_designer](/img/action/worker_php_designer.png)

The following pages provide a first insight how you can solve common tasks.

* [SQL](./sql)
* [HTTP](./http)

Take a look at the [PHP API](./php_api) for a complete reference of the internal API.

## Development

Internally every action is always a PHP class which handles the actual logic.
Instead of using the `Worker` actions you can also directly implement your action
as PHP class which implements an `ActionInterface`. Take a look at the
[custom action](/docs/development/custom_action) guide, this is intended for
developers who like to build OOP systems using PHP classes and dependency injection.
