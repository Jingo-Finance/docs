---
id: overview
title: API Overview
---

This section explains the Jingo Subgraph and how to interact with it. The Jingo subgraph indexes data from the Jingo contracts over time. It organizes data about pairs, tokens, Jingo as a whole, and more. The subgraph updates any time a transaction is made on Jingo. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/subgraph/pegasys-fi/v1) - sandbox for querying data and endpoints for developers.

[Jingo V1 Subgraph](https://github.com/Jingo-Finance/v1-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of Jingo and also tracks historical data. It is currently used to power [pegasys.fi.info](https://pegasys.fi.info/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/about/introduction).

## Versions

The [Jingo V1 Subgraph](https://thegraph.com/explorer/subgraph/pegasys-fi/v1) only tracks data on Jingo V1.