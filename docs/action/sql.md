
# SQL

## Fetch All

```php
<?php

use Fusio\Worker;
use Fusio\Engine;
use Psr\Log\LoggerInterface;

return function(Worker\ExecuteRequest $request, Worker\ExecuteContext $context, Engine\ConnectorInterface $connector, Engine\Response\FactoryInterface $response, Engine\DispatcherInterface $dispatcher, LoggerInterface $logger) {
    /** @var \Doctrine\DBAL\Connection $connection */
    $connection = $connector->getConnection('System');

    $params = [];
    $query = 'SELECT id, title, content, insert_date FROM my_table';

    $entries = [];
    $result = $connection->fetchAllAssociative($query, $params);
    foreach ($result as $row) {
        $entries[] = [
            'id' => (int) $row['id'],
            'name' => $row['title'],
            'description' => $row['content'],
            'insertDate' => $row['insert_date'],
        ];
    }

    return $response->ok([
        'entries' => $entries,
    ]);
};

```

## Fetch Assoc

```php
<?php

use Fusio\Worker;
use Fusio\Engine;
use Psr\Log\LoggerInterface;

return function(Worker\ExecuteRequest $request, Worker\ExecuteContext $context, Engine\ConnectorInterface $connector, Engine\Response\FactoryInterface $response, Engine\DispatcherInterface $dispatcher, LoggerInterface $logger) {
    /** @var \Doctrine\DBAL\Connection $connection */
    $connection = $connector->getConnection('System');

    $id = $request->getArguments()->get('id');

    $query = 'SELECT id, title, content, insert_date FROM my_table WHERE id = :id';

    $row = $connection->fetchAssociative($query, ['id' => $id]);
    if (empty($row)) {
        return $response->notFound('Row not found');
    }

    return $response->ok($row);
};

```

## Insert

```php
<?php

use Fusio\Worker;
use Fusio\Engine;
use Psr\Log\LoggerInterface;

return function(Worker\ExecuteRequest $request, Worker\ExecuteContext $context, Engine\ConnectorInterface $connector, Engine\Response\FactoryInterface $response, Engine\DispatcherInterface $dispatcher, LoggerInterface $logger) {
    /** @var \Doctrine\DBAL\Connection $connection */
    $connection = $connector->getConnection('System');

    $payload = $request->getPayload();

    $name = $payload->name ?? null;
    if (empty($name)) {
        return $response->badRequest('No name provided');
    }

    $connection->insert('my_table', [
        'name' => $name,
    ]);

    return $response->created([
        'success' => true,
    ]);
};

```

