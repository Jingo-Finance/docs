import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '372'),
    exact: true
  },
  {
    path: '/api/',
    component: ComponentCreator('/api/', '2f4'),
    routes: [
      {
        path: '/api/subgraph/guides/examples',
        component: ComponentCreator('/api/subgraph/guides/examples', 'df6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/api/subgraph/overview',
        component: ComponentCreator('/api/subgraph/overview', '0a2'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/concepts/',
    component: ComponentCreator('/concepts/', '5dd'),
    routes: [
      {
        path: '/concepts/glossary',
        component: ComponentCreator('/concepts/glossary', '5f4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/concepts/jingo-protocol',
        component: ComponentCreator('/concepts/jingo-protocol', 'ab2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/concepts/overview',
        component: ComponentCreator('/concepts/overview', '593'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/concepts/protocol/concentrated-liquidity',
        component: ComponentCreator('/concepts/protocol/concentrated-liquidity', 'e0c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/concepts/protocol/fees',
        component: ComponentCreator('/concepts/protocol/fees', '5e3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/concepts/protocol/integration-issues',
        component: ComponentCreator('/concepts/protocol/integration-issues', '031'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/concepts/protocol/oracle',
        component: ComponentCreator('/concepts/protocol/oracle', '949'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/concepts/protocol/range-orders',
        component: ComponentCreator('/concepts/protocol/range-orders', '934'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/concepts/protocol/swaps',
        component: ComponentCreator('/concepts/protocol/swaps', '7c2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/concepts/resources',
        component: ComponentCreator('/concepts/resources', '3a9'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/contracts/',
    component: ComponentCreator('/contracts/', '838'),
    routes: [
      {
        path: '/contracts/permit2/overview',
        component: ComponentCreator('/contracts/permit2/overview', 'a4f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/permit2/reference/allowance-transfer',
        component: ComponentCreator('/contracts/permit2/reference/allowance-transfer', 'c09'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/permit2/reference/signature-transfer',
        component: ComponentCreator('/contracts/permit2/reference/signature-transfer', '730'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/universal-router/overview',
        component: ComponentCreator('/contracts/universal-router/overview', '249'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/universal-router/technical-reference',
        component: ComponentCreator('/contracts/universal-router/technical-reference', 'ed7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/advanced-topics/fees',
        component: ComponentCreator('/contracts/v1/concepts/advanced-topics/fees', 'e6c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/advanced-topics/math',
        component: ComponentCreator('/contracts/v1/concepts/advanced-topics/math', 'a90'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/advanced-topics/pricing',
        component: ComponentCreator('/contracts/v1/concepts/advanced-topics/pricing', 'c4d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/advanced-topics/research',
        component: ComponentCreator('/contracts/v1/concepts/advanced-topics/research', '9f3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/advanced-topics/security',
        component: ComponentCreator('/contracts/v1/concepts/advanced-topics/security', 'e2e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/advanced-topics/understanding-returns',
        component: ComponentCreator('/contracts/v1/concepts/advanced-topics/understanding-returns', '8ff'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/core-concepts/flash-swaps',
        component: ComponentCreator('/contracts/v1/concepts/core-concepts/flash-swaps', '100'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/core-concepts/oracles',
        component: ComponentCreator('/contracts/v1/concepts/core-concepts/oracles', '37b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/core-concepts/pools',
        component: ComponentCreator('/contracts/v1/concepts/core-concepts/pools', '2a0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/core-concepts/swaps',
        component: ComponentCreator('/contracts/v1/concepts/core-concepts/swaps', '965'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/protocol-overview/ecosystem-participants',
        component: ComponentCreator('/contracts/v1/concepts/protocol-overview/ecosystem-participants', 'b24'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/protocol-overview/glossary',
        component: ComponentCreator('/contracts/v1/concepts/protocol-overview/glossary', 'fc3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/protocol-overview/how-jingo-works',
        component: ComponentCreator('/contracts/v1/concepts/protocol-overview/how-jingo-works', '080'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/concepts/protocol-overview/smart-contracts',
        component: ComponentCreator('/contracts/v1/concepts/protocol-overview/smart-contracts', '9ee'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/interface-integration/custom-interface-linking',
        component: ComponentCreator('/contracts/v1/guides/interface-integration/custom-interface-linking', 'a95'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/interface-integration/iframe-integration',
        component: ComponentCreator('/contracts/v1/guides/interface-integration/iframe-integration', '1f0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/interface-integration/using-the-api',
        component: ComponentCreator('/contracts/v1/guides/interface-integration/using-the-api', '7bd'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/smart-contract-integration/building-an-oracle',
        component: ComponentCreator('/contracts/v1/guides/smart-contract-integration/building-an-oracle', '9cd'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/smart-contract-integration/getting-pair-addresses',
        component: ComponentCreator('/contracts/v1/guides/smart-contract-integration/getting-pair-addresses', '8e4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/smart-contract-integration/providing-liquidity',
        component: ComponentCreator('/contracts/v1/guides/smart-contract-integration/providing-liquidity', '3a0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/smart-contract-integration/quick-start',
        component: ComponentCreator('/contracts/v1/guides/smart-contract-integration/quick-start', 'e8b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/smart-contract-integration/supporting-meta-transactions',
        component: ComponentCreator('/contracts/v1/guides/smart-contract-integration/supporting-meta-transactions', '69f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/smart-contract-integration/trading-from-a-smart-contract',
        component: ComponentCreator('/contracts/v1/guides/smart-contract-integration/trading-from-a-smart-contract', 'b7c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/guides/smart-contract-integration/using-flash-swaps',
        component: ComponentCreator('/contracts/v1/guides/smart-contract-integration/using-flash-swaps', '260'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/overview',
        component: ComponentCreator('/contracts/v1/overview', '3d8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/API/entities',
        component: ComponentCreator('/contracts/v1/reference/API/entities', '3f3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/API/overview',
        component: ComponentCreator('/contracts/v1/reference/API/overview', '983'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/API/queries',
        component: ComponentCreator('/contracts/v1/reference/API/queries', 'e1e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/Governance/governance-reference',
        component: ComponentCreator('/contracts/v1/reference/Governance/governance-reference', 'f1a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/smart-contracts/common-errors',
        component: ComponentCreator('/contracts/v1/reference/smart-contracts/common-errors', '3e1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/smart-contracts/factory',
        component: ComponentCreator('/contracts/v1/reference/smart-contracts/factory', '7bb'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/smart-contracts/library',
        component: ComponentCreator('/contracts/v1/reference/smart-contracts/library', 'e33'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/smart-contracts/pair',
        component: ComponentCreator('/contracts/v1/reference/smart-contracts/pair', 'cdf'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/smart-contracts/Pair-ERC-20',
        component: ComponentCreator('/contracts/v1/reference/smart-contracts/Pair-ERC-20', '41d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/smart-contracts/router-01',
        component: ComponentCreator('/contracts/v1/reference/smart-contracts/router-01', '31f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v1/reference/smart-contracts/router-02',
        component: ComponentCreator('/contracts/v1/reference/smart-contracts/router-02', '815'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/flash-integrations/calling-flash',
        component: ComponentCreator('/contracts/v2/guides/flash-integrations/calling-flash', '638'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/flash-integrations/final-contract',
        component: ComponentCreator('/contracts/v2/guides/flash-integrations/final-contract', '095'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/flash-integrations/flash-callback',
        component: ComponentCreator('/contracts/v2/guides/flash-integrations/flash-callback', 'aa5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/flash-integrations/inheritance-constructors',
        component: ComponentCreator('/contracts/v2/guides/flash-integrations/inheritance-constructors', '3a7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/governance/liscense-modifications',
        component: ComponentCreator('/contracts/v2/guides/governance/liscense-modifications', '4ec'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/liquidity-mining/overview',
        component: ComponentCreator('/contracts/v2/guides/liquidity-mining/overview', 'b63'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/local-environment',
        component: ComponentCreator('/contracts/v2/guides/local-environment', '605'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/providing-liquidity/collect-fees',
        component: ComponentCreator('/contracts/v2/guides/providing-liquidity/collect-fees', '2d9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/providing-liquidity/decrease-liquidity',
        component: ComponentCreator('/contracts/v2/guides/providing-liquidity/decrease-liquidity', 'c81'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/providing-liquidity/increase-liquidity',
        component: ComponentCreator('/contracts/v2/guides/providing-liquidity/increase-liquidity', '9ea'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/providing-liquidity/mint-a-position',
        component: ComponentCreator('/contracts/v2/guides/providing-liquidity/mint-a-position', '3d6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/providing-liquidity/setting-up',
        component: ComponentCreator('/contracts/v2/guides/providing-liquidity/setting-up', 'bed'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/providing-liquidity/the-full-contract',
        component: ComponentCreator('/contracts/v2/guides/providing-liquidity/the-full-contract', '204'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/swaps/multihop-swaps',
        component: ComponentCreator('/contracts/v2/guides/swaps/multihop-swaps', 'bd3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/guides/swaps/single-swaps',
        component: ComponentCreator('/contracts/v2/guides/swaps/single-swaps', '590'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/overview',
        component: ComponentCreator('/contracts/v2/overview', 'd6e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/callback/IJingoV3FlashCallback',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/callback/IJingoV3FlashCallback', '784'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/callback/IJingoV3MintCallback',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/callback/IJingoV3MintCallback', '6b2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/callback/IJingoV3SwapCallback',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/callback/IJingoV3SwapCallback', '68a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/IERC20Minimal',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/IERC20Minimal', '7b7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/IJingoV3Factory',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/IJingoV3Factory', 'ea7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/IJingoV3Pool',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/IJingoV3Pool', 'c70'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/IJingoV3PoolDeployer',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/IJingoV3PoolDeployer', 'e81'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolActions',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolActions', 'cee'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolDerivedState',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolDerivedState', '5d3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolEvents',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolEvents', 'c21'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolImmutables',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolImmutables', '1d9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolOwnerActions',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolOwnerActions', 'c8e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolState',
        component: ComponentCreator('/contracts/v2/reference/core/interfaces/pool/IJingoV3PoolState', '066'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/JingoV3Factory',
        component: ComponentCreator('/contracts/v2/reference/core/JingoV3Factory', '1ae'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/JingoV3Pool',
        component: ComponentCreator('/contracts/v2/reference/core/JingoV3Pool', '086'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/JingoV3PoolDeployer',
        component: ComponentCreator('/contracts/v2/reference/core/JingoV3PoolDeployer', 'b21'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/BitMath',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/BitMath', '288'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/FixedPoint128',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/FixedPoint128', '8a6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/FixedPoint96',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/FixedPoint96', 'd93'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/FullMath',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/FullMath', '576'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/LiquidityMath',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/LiquidityMath', 'cc7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/LowGasSafeMath',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/LowGasSafeMath', '340'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/Oracle',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/Oracle', 'a7a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/Position',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/Position', '931'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/SafeCast',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/SafeCast', '25e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/SecondsOutside',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/SecondsOutside', 'bfa'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/SqrtPriceMath',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/SqrtPriceMath', 'bdf'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/SwapMath',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/SwapMath', '4b8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/Tick',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/Tick', '40e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/TickBitmap',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/TickBitmap', 'a6d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/TickMath',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/TickMath', '80c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/TransferHelper',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/TransferHelper', '8d8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/core/libraries/UnsafeMath',
        component: ComponentCreator('/contracts/v2/reference/core/libraries/UnsafeMath', '2b8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/deployments',
        component: ComponentCreator('/contracts/v2/reference/deployments', '36b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/error-codes',
        component: ComponentCreator('/contracts/v2/reference/error-codes', '605'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/Governance/overview',
        component: ComponentCreator('/contracts/v2/reference/Governance/overview', 'ee6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/overview',
        component: ComponentCreator('/contracts/v2/reference/overview', 'b8d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/base/BlockTimestamp',
        component: ComponentCreator('/contracts/v2/reference/periphery/base/BlockTimestamp', '945'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/base/ERC721Permit',
        component: ComponentCreator('/contracts/v2/reference/periphery/base/ERC721Permit', 'a2a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/base/LiquidityManagement',
        component: ComponentCreator('/contracts/v2/reference/periphery/base/LiquidityManagement', '15c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/base/Multicall',
        component: ComponentCreator('/contracts/v2/reference/periphery/base/Multicall', '1b2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/base/PeripheryImmutableState',
        component: ComponentCreator('/contracts/v2/reference/periphery/base/PeripheryImmutableState', '85a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/base/PeripheryPayments',
        component: ComponentCreator('/contracts/v2/reference/periphery/base/PeripheryPayments', '2fc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/base/PeripheryPaymentsWithFee',
        component: ComponentCreator('/contracts/v2/reference/periphery/base/PeripheryPaymentsWithFee', '61b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/base/PoolInitializer',
        component: ComponentCreator('/contracts/v2/reference/periphery/base/PoolInitializer', 'a3e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/base/SelfPermit',
        component: ComponentCreator('/contracts/v2/reference/periphery/base/SelfPermit', '564'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/external/IERC1271',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/external/IERC1271', '454'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/external/IERC20PermitAllowed',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/external/IERC20PermitAllowed', 'e15'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/external/IWETH9',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/external/IWETH9', 'ea7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IERC20Metadata',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IERC20Metadata', 'dfa'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IERC721Permit',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IERC721Permit', '6e1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IMulticall',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IMulticall', 'e7a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/INonfungiblePositionManager',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/INonfungiblePositionManager', '12e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/INonfungibleTokenPositionDescriptor',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/INonfungibleTokenPositionDescriptor', '303'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IPeripheryImmutableState',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IPeripheryImmutableState', '0d0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IPeripheryPayments',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IPeripheryPayments', '212'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IPeripheryPaymentsWithFee',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IPeripheryPaymentsWithFee', '4bf'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IPoolInitializer',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IPoolInitializer', '34f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IQuoter',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IQuoter', 'e8c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IQuoterV2',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IQuoterV2', 'a58'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/ISelfPermit',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/ISelfPermit', 'c81'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/ISwapRouter',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/ISwapRouter', '7e3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/ITickLens',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/ITickLens', '94d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/interfaces/IV3Migrator',
        component: ComponentCreator('/contracts/v2/reference/periphery/interfaces/IV3Migrator', 'e94'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/lens/Quoter',
        component: ComponentCreator('/contracts/v2/reference/periphery/lens/Quoter', 'cf2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/lens/QuoterV2',
        component: ComponentCreator('/contracts/v2/reference/periphery/lens/QuoterV2', '6a2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/lens/TickLens',
        component: ComponentCreator('/contracts/v2/reference/periphery/lens/TickLens', '85a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/Base64',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/Base64', '513'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/BytesLib',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/BytesLib', '4fc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/CallbackValidation',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/CallbackValidation', '225'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/ChainId',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/ChainId', '1a1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/HexStrings',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/HexStrings', 'c30'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/LiquidityAmounts',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/LiquidityAmounts', 'fba'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/NFTDescriptor',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/NFTDescriptor', '6b9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/NFTSVG',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/NFTSVG', '2dd'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/OracleLibrary',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/OracleLibrary', '0c8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/Path',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/Path', '3ca'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/PoolAddress',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/PoolAddress', '275'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/PoolTicksCounter',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/PoolTicksCounter', '02c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/PositionKey',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/PositionKey', 'a3a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/TokenRatioSortOrder',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/TokenRatioSortOrder', 'd8c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/TransferHelper',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/TransferHelper', '810'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/libraries/WeightedOracleLibrary',
        component: ComponentCreator('/contracts/v2/reference/periphery/libraries/WeightedOracleLibrary', '4ae'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/NonfungiblePositionManager',
        component: ComponentCreator('/contracts/v2/reference/periphery/NonfungiblePositionManager', 'cfa'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/NonfungibleTokenPositionDescriptor',
        component: ComponentCreator('/contracts/v2/reference/periphery/NonfungibleTokenPositionDescriptor', '652'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/staker/Design',
        component: ComponentCreator('/contracts/v2/reference/periphery/staker/Design', '137'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/staker/interfaces/IJingoV3Staker',
        component: ComponentCreator('/contracts/v2/reference/periphery/staker/interfaces/IJingoV3Staker', '8ca'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/staker/JingoV3Staker',
        component: ComponentCreator('/contracts/v2/reference/periphery/staker/JingoV3Staker', '33a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/staker/libraries/IncentiveId',
        component: ComponentCreator('/contracts/v2/reference/periphery/staker/libraries/IncentiveId', '140'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/staker/libraries/NFTPositionInfo',
        component: ComponentCreator('/contracts/v2/reference/periphery/staker/libraries/NFTPositionInfo', 'a3a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/staker/libraries/RewardMath',
        component: ComponentCreator('/contracts/v2/reference/periphery/staker/libraries/RewardMath', 'b13'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/SwapRouter',
        component: ComponentCreator('/contracts/v2/reference/periphery/SwapRouter', '5a5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/Base64Test',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/Base64Test', 'fce'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/LiquidityAmountsTest',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/LiquidityAmountsTest', '547'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/MockTimeNonfungiblePositionManager',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/MockTimeNonfungiblePositionManager', '743'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/MockTimeSwapRouter',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/MockTimeSwapRouter', '591'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/NFTDescriptorTest',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/NFTDescriptorTest', '926'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/PathTest',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/PathTest', '85b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/PeripheryImmutableStateTest',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/PeripheryImmutableStateTest', 'fbe'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/PoolAddressTest',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/PoolAddressTest', '029'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/SelfPermitTest',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/SelfPermitTest', '8c1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/TestCallbackValidation',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/TestCallbackValidation', 'bb1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/TestERC20',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/TestERC20', 'e70'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/TestERC20Metadata',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/TestERC20Metadata', 'ba6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/TestERC20PermitAllowed',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/TestERC20PermitAllowed', '3f1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/TestJingoV3Callee',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/TestJingoV3Callee', 'c95'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/TestMulticall',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/TestMulticall', '69c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/TestPositionNFTOwner',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/TestPositionNFTOwner', 'cd0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/test/TickLensTest',
        component: ComponentCreator('/contracts/v2/reference/periphery/test/TickLensTest', 'a41'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/contracts/v2/reference/periphery/V3Migrator',
        component: ComponentCreator('/contracts/v2/reference/periphery/V3Migrator', '4c1'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/sdk',
    component: ComponentCreator('/sdk', '0a0'),
    routes: [
      {
        path: '/sdk/core/overview',
        component: ComponentCreator('/sdk/core/overview', 'a87'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/classes/CurrencyAmount',
        component: ComponentCreator('/sdk/core/reference/classes/CurrencyAmount', '05b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/classes/Ether',
        component: ComponentCreator('/sdk/core/reference/classes/Ether', 'ae6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/classes/Fraction',
        component: ComponentCreator('/sdk/core/reference/classes/Fraction', '493'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/classes/NativeCurrency',
        component: ComponentCreator('/sdk/core/reference/classes/NativeCurrency', '059'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/classes/Percent',
        component: ComponentCreator('/sdk/core/reference/classes/Percent', 'e39'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/classes/Price',
        component: ComponentCreator('/sdk/core/reference/classes/Price', '349'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/classes/Token',
        component: ComponentCreator('/sdk/core/reference/classes/Token', 'e58'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/enums/Rounding',
        component: ComponentCreator('/sdk/core/reference/enums/Rounding', 'f58'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/enums/SupportedChainId',
        component: ComponentCreator('/sdk/core/reference/enums/SupportedChainId', 'e14'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/enums/TradeType',
        component: ComponentCreator('/sdk/core/reference/enums/TradeType', 'b98'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/core/reference/overview',
        component: ComponentCreator('/sdk/core/reference/overview', 'e3e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/swap-widget/guides/examples',
        component: ComponentCreator('/sdk/swap-widget/guides/examples', '41e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/swap-widget/guides/getting-started',
        component: ComponentCreator('/sdk/swap-widget/guides/getting-started', '9a6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/swap-widget/overview',
        component: ComponentCreator('/sdk/swap-widget/overview', '8fc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/swap-widget/reference/v1',
        component: ComponentCreator('/sdk/swap-widget/reference/v1', '350'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/guides/fetching-data',
        component: ComponentCreator('/sdk/v1/guides/fetching-data', 'ad2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/guides/getting-pair-addresses',
        component: ComponentCreator('/sdk/v1/guides/getting-pair-addresses', '52b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/guides/pricing',
        component: ComponentCreator('/sdk/v1/guides/pricing', '918'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/guides/quick-start',
        component: ComponentCreator('/sdk/v1/guides/quick-start', 'd64'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/guides/trading',
        component: ComponentCreator('/sdk/v1/guides/trading', 'd64'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/overview',
        component: ComponentCreator('/sdk/v1/overview', '1ac'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/reference/fetcher',
        component: ComponentCreator('/sdk/v1/reference/fetcher', '6e0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/reference/fractions',
        component: ComponentCreator('/sdk/v1/reference/fractions', 'f4e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/reference/getting-started',
        component: ComponentCreator('/sdk/v1/reference/getting-started', '64c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/reference/other-exports',
        component: ComponentCreator('/sdk/v1/reference/other-exports', 'ee4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/reference/pair',
        component: ComponentCreator('/sdk/v1/reference/pair', '004'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/reference/route',
        component: ComponentCreator('/sdk/v1/reference/route', 'ab2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/reference/token',
        component: ComponentCreator('/sdk/v1/reference/token', 'b8b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v1/reference/trade',
        component: ComponentCreator('/sdk/v1/reference/trade', 'fec'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/guides/background',
        component: ComponentCreator('/sdk/v3/guides/background', '4b2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/guides/liquidity/liquidity-fees',
        component: ComponentCreator('/sdk/v3/guides/liquidity/liquidity-fees', '2de'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/guides/liquidity/minting',
        component: ComponentCreator('/sdk/v3/guides/liquidity/minting', '5d5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/guides/liquidity/modifying-position',
        component: ComponentCreator('/sdk/v3/guides/liquidity/modifying-position', '270'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/guides/liquidity/swap-and-add',
        component: ComponentCreator('/sdk/v3/guides/liquidity/swap-and-add', '138'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/guides/quoting',
        component: ComponentCreator('/sdk/v3/guides/quoting', '7c7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/guides/routing',
        component: ComponentCreator('/sdk/v3/guides/routing', 'f27'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/guides/trading',
        component: ComponentCreator('/sdk/v3/guides/trading', 'e6f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/overview',
        component: ComponentCreator('/sdk/v3/overview', 'b68'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/FullMath',
        component: ComponentCreator('/sdk/v3/reference/classes/FullMath', '84b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/LiquidityMath',
        component: ComponentCreator('/sdk/v3/reference/classes/LiquidityMath', 'a44'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/Multicall',
        component: ComponentCreator('/sdk/v3/reference/classes/Multicall', 'af2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/NonfungiblePositionManager',
        component: ComponentCreator('/sdk/v3/reference/classes/NonfungiblePositionManager', 'df1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/NoTickDataProvider',
        component: ComponentCreator('/sdk/v3/reference/classes/NoTickDataProvider', '57c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/Payments',
        component: ComponentCreator('/sdk/v3/reference/classes/Payments', '961'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/Pool',
        component: ComponentCreator('/sdk/v3/reference/classes/Pool', '7c6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/Position',
        component: ComponentCreator('/sdk/v3/reference/classes/Position', '365'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/PositionLibrary',
        component: ComponentCreator('/sdk/v3/reference/classes/PositionLibrary', '881'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/Route',
        component: ComponentCreator('/sdk/v3/reference/classes/Route', '6c3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/SelfPermit',
        component: ComponentCreator('/sdk/v3/reference/classes/SelfPermit', 'be2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/SqrtPriceMath',
        component: ComponentCreator('/sdk/v3/reference/classes/SqrtPriceMath', '554'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/Staker',
        component: ComponentCreator('/sdk/v3/reference/classes/Staker', '41a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/SwapMath',
        component: ComponentCreator('/sdk/v3/reference/classes/SwapMath', '6df'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/SwapQuoter',
        component: ComponentCreator('/sdk/v3/reference/classes/SwapQuoter', '35f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/SwapRouter',
        component: ComponentCreator('/sdk/v3/reference/classes/SwapRouter', 'a66'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/Tick',
        component: ComponentCreator('/sdk/v3/reference/classes/Tick', '3cc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/TickLibrary',
        component: ComponentCreator('/sdk/v3/reference/classes/TickLibrary', '567'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/TickList',
        component: ComponentCreator('/sdk/v3/reference/classes/TickList', 'c7a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/TickListDataProvider',
        component: ComponentCreator('/sdk/v3/reference/classes/TickListDataProvider', 'f28'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/TickMath',
        component: ComponentCreator('/sdk/v3/reference/classes/TickMath', '6ff'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/classes/Trade',
        component: ComponentCreator('/sdk/v3/reference/classes/Trade', 'bfc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/enums/FeeAmount',
        component: ComponentCreator('/sdk/v3/reference/enums/FeeAmount', '784'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/AllowedPermitArguments',
        component: ComponentCreator('/sdk/v3/reference/interfaces/AllowedPermitArguments', 'cda'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/BestTradeOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/BestTradeOptions', '1bc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/ClaimOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/ClaimOptions', 'b5c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/CollectOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/CollectOptions', 'ac7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/CommonAddLiquidityOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/CommonAddLiquidityOptions', '8bb'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/FeeOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/FeeOptions', '3b0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/IncentiveKey',
        component: ComponentCreator('/sdk/v3/reference/interfaces/IncentiveKey', '07a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/IncreaseSpecificOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/IncreaseSpecificOptions', 'a94'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/MethodParameters',
        component: ComponentCreator('/sdk/v3/reference/interfaces/MethodParameters', '716'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/MintSpecificOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/MintSpecificOptions', 'a41'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/NFTPermitOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/NFTPermitOptions', 'ad0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/QuoteOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/QuoteOptions', '7c6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/RemoveLiquidityOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/RemoveLiquidityOptions', 'f52'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/SafeTransferOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/SafeTransferOptions', 'da2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/StandardPermitArguments',
        component: ComponentCreator('/sdk/v3/reference/interfaces/StandardPermitArguments', '347'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/SwapOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/SwapOptions', 'b89'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/TickConstructorArgs',
        component: ComponentCreator('/sdk/v3/reference/interfaces/TickConstructorArgs', '713'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/TickDataProvider',
        component: ComponentCreator('/sdk/v3/reference/interfaces/TickDataProvider', '018'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/interfaces/WithdrawOptions',
        component: ComponentCreator('/sdk/v3/reference/interfaces/WithdrawOptions', 'b50'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/v3/reference/overview',
        component: ComponentCreator('/sdk/v3/reference/overview', 'd27'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/web3-react/guides/connect-wallet',
        component: ComponentCreator('/sdk/web3-react/guides/connect-wallet', '78f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/web3-react/guides/connectors',
        component: ComponentCreator('/sdk/web3-react/guides/connectors', 'f40'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/web3-react/guides/switch-chains',
        component: ComponentCreator('/sdk/web3-react/guides/switch-chains', '573'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/sdk/web3-react/overview',
        component: ComponentCreator('/sdk/web3-react/overview', '385'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd0f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
