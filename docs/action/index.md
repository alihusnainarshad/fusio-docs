
# Action

An action contains the business logic of your API endpoint. At the core an Action is a PHP class that receives an
incoming request and returns a response.

```php
<?php

namespace App\Action;

use Fusio\Engine;

class MyAction implements Engine\ActionInterface
{
    public function handle(Engine\RequestInterface $request, Engine\ParametersInterface $configuration, Engine\ContextInterface $context): mixed
    {
        return [
            'hello' => 'world'
        ];
    }
}
```

Once defined, this action can be bound to an [Operation](/docs/operation/index.md) so that it executes for a specific
HTTP method and path.

## Configuration

Fusio allows you to build actions that are configurable directly from the backend. In the example below, we add a
`message` configuration parameter so a user can customize the response without changing the code.

```php
<?php

namespace App\Action;

use Fusio\Engine;

class MyAction extends Engine\ActionAbstract
{
    public function handle(Engine\RequestInterface $request, Engine\ParametersInterface $configuration, Engine\ContextInterface $context): mixed
    {
        return [
            'hello' => $configuration->get('message'),
        ];
    }

    public function configure(Engine\Form\BuilderInterface $builder, Engine\Form\ElementFactoryInterface $elementFactory): void
    {
        $builder->add($elementFactory->newInput('message', 'Message', 'text', 'The message which should be returned'));
    }
}
```

In the backend, this parameter is now exposed via a generated form:

![action_configuration](/img/action/action_configuration.png)

This concept makes actions highly reusable for both developers and non-technical users. We also provide a
[preset of actions](/docs/backend/api/action/index.md) for common tasks. If you build an action you'd like to share,
check out our [Adapter](https://www.fusio-project.org/adapter) page. See our
[custom action](/docs/development/custom_action.md) documentation for more details.

## Worker

Fusio provides Worker actions, which allow you to develop logic directly in the backend without building custom PHP
classes.

![worker_php_designer](/img/action/worker_php_designer.png)

This also enables you to build actions in other languages like JavaScript or Python, which is ideal if your team is more
familiar with those ecosystems. The following pages provide a first insight how you can solve common tasks.

* [SQL](./sql)
* [HTTP](./http)

Take a look at the [PHP API](./php_api) for a complete reference of the internal API.

## Development

Internally every action is always a PHP class which handles the actual logic.
Instead of using the `Worker` actions you can also directly implement your action
as PHP class which implements an `ActionInterface`. Take a look at the
[custom action](/docs/development/custom_action) guide, this is intended for
developers who like to build OOP systems using PHP classes and dependency injection.
