
# Dependency Injection

Fusio uses the [Symfony DI component](https://symfony.com/doc/current/components/dependency_injection.html) to manage
dependencies. The `resources/container.php` file contains the main DI configuration file to define all services for your
app. We recommend to enable autowiring for specific folders so that you don`t need to manually register a service. I.e.
if you follow the recommended Fusio folder structure you could enable auto-wiring on the following folders.

```php
<?php

use Fusio\Engine\Adapter\ServiceBuilder;
use PSX\Framework\Dependency\Configurator;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $container) {
    $services = ServiceBuilder::build($container);
    $services = Configurator::services($services);

    $services->load('App\\Action\\', __DIR__ . '/../src/Action');
    $services->load('App\\Connection\\', __DIR__ . '/../src/Connection');

    $services->load('App\\Service\\', __DIR__ . '/../src/Service')
        ->public();

    $services->load('App\\Table\\', __DIR__ . '/../src/Table')
        ->exclude('Generated')
        ->public();

    $services->load('App\\View\\', __DIR__ . '/../src/View');
};

```

Through this you only need to add a class at the specific folder and it automatically available for the system and
you can then also include every dependency at the constructor. I.e. you could paste the following custom action code to
the `src/Action/MyAction.php` and you can then use the action class `App\Action\MyAction` directly at an operation. 

```php
<?php

namespace App\Action;

use Fusio\Engine\ActionAbstract;
use Fusio\Engine\ContextInterface;
use Fusio\Engine\ParametersInterface;
use Fusio\Engine\RequestInterface;

class MyAction extends ActionAbstract
{
    public function handle(RequestInterface $request, ParametersInterface $configuration, ContextInterface $context): mixed
    {
        $body = [
            'hello' => 'world',
        ];

        return $this->response->build(200, [], $body);
    }
}

```

We have created also a sample project showing all best practices of Fusio at:
https://github.com/apioo/fusio-sample-cms

## Folders

The following folders are auto-wired by the DI container, we recommend to use those standard folders but you are of
course free to structure the folders how you like.

### Action

The action folder contains action classes which either extend from `Fusio\Engine\ActionAbstract` or
`Fusio\Engine\ActionInterface`. An action contains the business logic and i.e. invokes another endpoints or fetches
data from a database. You can then reference those classes either directly in an operations yaml file or you can select
action at the backend.

### Connection

The connection folder contains connection classes which either extend from `Fusio\Engine\ConnectionAbstract` or
`Fusio\Engine\ConnectionInterface`. A connection provides a connection to a remote system i.e. it could return an
connection to a database or also a client SDK. Connections can be used in your action to complete a specific task.

### Service

A service is a general PHP class which contains business logic independent of the Fusio context. In general the service
should contain the logic to create, update or delete a specific entity.

### Table

The table folder contains table classes which are automatically generated from your schema. By default Fusio only works
with a migration system where you define the table structure, then you can use the following command to generate all
tables s.

```
php bin/fusio generate:table
```

Fusio does not come with an ORM system by default but you are of course free to include any ORM you like.

### View

View classes are also classes to produce a specific view i.e. a collection or entity response. Those classes do not work
on a concrete table but they can use the table classes to create a fitting response.

## Debug

To debug the container and see all available services you can use the following command s.

```
php bin/fusio debug:container
```
