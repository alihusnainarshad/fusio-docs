---
sidebar_position: 2
---

# HTTP

This page shows how you can use the HTTP connection to request or proxy internal APIs.

## Request

```php
<?php

use Fusio\Worker;
use Fusio\Engine;
use Psr\Log\LoggerInterface;

return function(Worker\ExecuteRequest $request, Worker\ExecuteContext $context, Engine\ConnectorInterface $connector, Engine\Response\FactoryInterface $response, Engine\DispatcherInterface $dispatcher, LoggerInterface $logger) {
    /** @var \GuzzleHttp\Client $client */
    $client = $connector->getConnection('Http');

    $resp = $client->request('POST', '/my_api', [
        'json' => ['my_payload' => 'foobar']
    ]);

    if ($resp->getStatusCode() !== 200) {
        return $response->internalServerError('Could not call internal API');
    }

    $data = \json_decode((string) $resp->getBody());

    return $response->ok($data);
};

```

## Proxy

```php
<?php

use Fusio\Worker;
use Fusio\Engine;
use Psr\Log\LoggerInterface;

return function(Worker\ExecuteRequest $request, Worker\ExecuteContext $context, Engine\ConnectorInterface $connector, Engine\Response\FactoryInterface $response, Engine\DispatcherInterface $dispatcher, LoggerInterface $logger) {
    /** @var \GuzzleHttp\Client $client */
    $client = $connector->getConnection('Http');

    $resp = $client->request('POST', '/my_api', [
        'json' => ['my_payload' => 'foobar']
    ]);

    return $response->proxy($resp);
};

```
