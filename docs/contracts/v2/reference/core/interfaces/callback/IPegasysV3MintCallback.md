Any contract that calls IJingoV3PoolActions#mint must implement this interface

## Functions

### jingoV3MintCallback

```solidity
  function jingoV3MintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes data
  ) external
```

Called to `msg.sender` after minting liquidity to a position from IJingoV3Pool#mint.

In the implementation you must pay the pool tokens owed for the minted liquidity.
The caller of this method must be checked to be a JingoV3Pool deployed by the canonical JingoV3Factory.

#### Parameters:

| Name          | Type    | Description                                                                   |
| :------------ | :------ | :---------------------------------------------------------------------------- |
| `amount0Owed` | uint256 | The amount of token0 due to the pool for the minted liquidity                 |
| `amount1Owed` | uint256 | The amount of token1 due to the pool for the minted liquidity                 |
| `data`        | bytes   | Any data passed through by the caller via the IJingoV3PoolActions#mint call |
