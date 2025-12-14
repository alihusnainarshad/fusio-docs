---
sidebar_position: 6
---

# Bundle

A bundle can be used to share local action, schema, event, cronjob and trigger configurations with the Fusio community.

## Configuration

![bundle_create](/img/backend/development/bundle_create.png)

### Name

The name of the bundle.

### Version

Version of the bundle. If you change your bundle you should also increase the version.

### Icon

Icon of the bundle

### Summary

Short summary of the bundle

### Description

Long description of the bundle, may also contain markdown syntax

### Cost

Optional cost of the bundle

### Actions

Local actions which are included in this bundle

### Schemas

Local schemas which are included in this bundle

### Events

Local events which are included in this bundle

### Cronjobs

Local cronjobs which are included in this bundle

### Triggers

Local triggers which are included in this bundle

## Marketplace

To submit the bundle to the marketplace you need to configure the marketplace credentials under System / Config.
To obtain those credentials you can register an account at the [Marketplace](https://www.fusio-project.org/marketplace)
website. Then you can use the "Publish" button at the summary to submit your bundle to the marketplace.

This creates a new bundle at the remote marketplace. To make the bundle visible to all Fusio users you finally need to
publish the bundle at the [marketplace app](https://marketplace.fusio-project.org/). After this your bundle can be
installed from the Fusio marketplace.
