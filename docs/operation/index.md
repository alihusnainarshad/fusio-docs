
# Operation

An operation describes a functional unit of logic that can be invoked by a remote
entity. Every operation is bound to a specific HTTP path and method but they can
also be triggered through an [AI Agent](/docs/ai), [MCP](/docs/protocol/mcp), [JSON-RPC](/docs/protocol/jsonrpc),
or [GraphQL](/docs/protocol/graphql).

![operation_detail](/img/operation/operation_detail.png)

## Structure

Every operation defines a strict contract for the following:

* **Query Parameters**: The variables accepted in the URL string.
* **Request Payload**: The data structure required to execute the operation.
* **Response Payload**: The data structure returned upon success or failure.

By providing this metadata, Fusio can automatically validate incoming data and
generate client SDKs.

## Execution

Each operation is linked to an Action, which contains the actual business logic.
Take a look at the [action](/docs/action/) page for all further details how
to configure and build custom actions.
