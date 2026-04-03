
# Frontend

Besides its classical usage as API Gateway Fusio can be also used as backend for
a single page application. In this case your app can use the authorization system
of Fusio to access the protected endpoints of your API.

## SDK

With Fusio you can automatically generate a TypeScript SDK for your API which
you can then use in your frontend. Through this you have a complete type-safe
way to interact with your API. Take a look at the [generate SDK](/docs/development/generate_sdk)
page to see how this works. It is of course also possible to simply interact
with Fusio through an HTTP client without the SDK.

## Frameworks

It is possible to use Fusio with almost any frontend Framework like Angular, React
or Vue since you only interact with the REST API.

Fusio has special support for Angular since the type-safety of Fusio and Angular
is a great match. Take a look at the [Angular integration](./angular_integration) page
for more details.
