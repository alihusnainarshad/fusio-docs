
# Development

The development chapter covers how you can use Fusio as a framework. This means
instead of using the backend to configure your API you can use it like a classical
framework where you define your logic in source files. For a practical insight
you can take a look at our [framework repository](https://github.com/apioo/fusio-framework)
which provides a small example API.

In essence Fusio is a system like a CMS which works with a database since it
implements all common logic which you need for a production API like user and
app management, rate limiting or scope handling. Fusio has a deployment
system which allows you to move your complete configuration into source files
by defining the configuration in PHP and YAML files. This allows you to build
complex API projects by building custom actions using dependency injection.

* [Deployment System](./deployment_system.md)
* [Folder Structure](./folder_structure.md)
* [Custom Action](./custom_action.md)
* [Dependency Injection](./dependency_injection.md)
