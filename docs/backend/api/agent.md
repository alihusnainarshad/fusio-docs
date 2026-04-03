---
sidebar_position: 9
---

# Agent

An agent helps to work with a remote LLM agent

## Configuration

![agent_create](/img/backend/api/agent_create.png)

### Connection

Must be an Agent connection to a remote LLM i.e. Ollama, ChatGPT, Gemini, etc. 

### Type

The type of this agent, in most cases this is General unless you want to build Fusio specific agents.

### Name

The name of the agent

### Description

A short description of the agent

### Introduction

The introduction prompt which tells the LLM what this agent does

### Tools

All tools which this agent can access

### Outgoing

In case you want that the agent returns structured output this is a schema which describes this output
