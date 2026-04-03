---
sidebar_position: 3
---

# Architecture

In this chapter we provide a first overview about the architecture, the following diagram shows the basic entities of
Fusio:

![architecture](/img/bootstrap/architecture_small.png)

## Operation

An operation provides a way to invoke an action which executes the business logic of your API, it is assigned to a
specific HTTP method and path i.e. `GET /hello/world`. Besides this the operation describes through a schema how the
parameters, incoming and outgoing data of your endpoint is designed. Fusio then also uses those schemas to validate
request data and to automatically generate an OpenAPI specification or client SDK.

## Action

The action contains the actual business logic of your API i.e. to proxy a request to a remote API or directly selects
data from a database table. You can use either one of our [existing actions](/docs/backend/api/action/) to solve your
problem or you can also easily [build your own](/docs/development/custom_action) action.

## Schema

The schema simply describes a JSON payload. We use a schema to describe i.e. request/response data of a route
or also event payloads which are dispatched by the system. Every schema is based on [TypeSchema](https://typeschema.org/)
which we also use to generate a client SDK or other specifications like OpenAPI.

## Event

An event gets dispatched by an action in your API, it can be used to create an async workflow where external parties are
notified in case a specific event occurred at your API. I.e. you could create an event "contract_created" and dispatch
this event everytime a contract was created at your API, then external users can register a webhook and Fusio will
invoke this webhook once a contract was created. You can describe the payload of your event also by a schema.

## Cronjob

A cronjob provides a way to invoke an action at a periodical interval.

## Trigger

A trigger gets invoked if an event was dispatched. Each trigger has an assigned
action which then gets executed.

## Connection

A connection provides access to a remote service. I.e. we have a SQL connection which works with a SQL database or a
HTTP connection which works with a remote HTTP server. One key concept is that a connection always uses an external
library to connect to the remote service i.e for the SQL connection we use the `doctrine/dbal` library and for the HTTP
connection we use `guzzlehttp/guzzle`. A connection returns always a fully configured client which you can use in your
action. A remote service can be also an external API i.e. we provide connections to Stripe or also AWS which works with
the official SDK. In your action you can then use those connections to implement your business logic.
