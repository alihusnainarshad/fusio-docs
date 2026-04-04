---
sidebar_position: 1
---

# Versioning

Versioning your API endpoints is an important concept in case you have many
users and you still want to evolve your API without breaking existing clients.
In Fusio you can version your operations simply through the path i.e.
`/v1/my/operation`. Besides the path based versioning Fusio provides
a stability flag for each operation. 

## Stability

In Fusio the idea is that every operation can go through the following life cycle:

* Experimental
* Stable
* Deprecated
* Legacy

### Experimental

The initial state of every operation. In this state all changes to the schema and
action are directly reflected at the endpoint. It should be used for developing
and testing.

### Stable

Once the operation is in production you can mark the operation as stable. On
transition from `Experimental` to `Stable` Fusio fixes the action and schema
version so that further changes are not reflected directly at the operation.
In this state it is also no longer possible to make any changes to the operation.

### Deprecated

In case you no longer want to support this operation you can mark it as deprecated.
In this state the SDK method is also automatically marked as deprecated so
users know that it is no longer supported.

### Legacy

After a deprecation period you can mark the operation as legacy which means that
the operation is no longer available and should not be used.
