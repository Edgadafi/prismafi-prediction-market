/**
 * IDL (Interface Definition Language) del smart contract
 *
 * Este IDL corresponde al contrato complejo con:
 * - Verificación humana (ProofOfHumanity, BrightID, Gitcoin Passport)
 * - Integración con Oracles (Chainlink)
 * - Meta-predictions
 * - Sistema de reputación
 * - Moderación comunitaria
 *
 * Program ID: 6b4kfh6kr9X6ka2H5C1qhK1jdnGmX65Ni85pC5qzLQB7
 */

export const IDL = {
  version: '0.1.0',
  name: 'prediction_market',
  instructions: [
    {
      name: 'createMarket',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'question',
          type: 'string',
        },
        {
          name: 'description',
          type: 'string',
        },
        {
          name: 'endTime',
          type: 'i64',
        },
        {
          name: 'category',
          type: 'string',
        },
      ],
    },
    {
      name: 'placeBet',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'marketVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'outcome',
          type: 'bool',
        },
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'resolveMarket',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'winningOutcome',
          type: 'bool',
        },
      ],
    },
    {
      name: 'claimWinnings',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'marketVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: 'Market',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'question',
            type: 'string',
          },
          {
            name: 'description',
            type: 'string',
          },
          {
            name: 'category',
            type: 'string',
          },
          {
            name: 'endTime',
            type: 'i64',
          },
          {
            name: 'totalYesAmount',
            type: 'u64',
          },
          {
            name: 'totalNoAmount',
            type: 'u64',
          },
          {
            name: 'resolved',
            type: 'bool',
          },
          {
            name: 'winningOutcome',
            type: {
              option: 'bool',
            },
          },
          {
            name: 'createdAt',
            type: 'i64',
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'UserPosition',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'market',
            type: 'publicKey',
          },
          {
            name: 'outcome',
            type: 'bool',
          },
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'claimed',
            type: 'bool',
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
  ],
  events: [
    {
      name: 'MarketCreated',
      fields: [
        {
          name: 'market',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'authority',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'question',
          type: 'string',
          index: false,
        },
        {
          name: 'endTime',
          type: 'i64',
          index: false,
        },
      ],
    },
    {
      name: 'BetPlaced',
      fields: [
        {
          name: 'market',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'outcome',
          type: 'bool',
          index: false,
        },
        {
          name: 'amount',
          type: 'u64',
          index: false,
        },
        {
          name: 'totalYes',
          type: 'u64',
          index: false,
        },
        {
          name: 'totalNo',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'MarketResolved',
      fields: [
        {
          name: 'market',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'winningOutcome',
          type: 'bool',
          index: false,
        },
        {
          name: 'totalYes',
          type: 'u64',
          index: false,
        },
        {
          name: 'totalNo',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'WinningsClaimed',
      fields: [
        {
          name: 'market',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amount',
          type: 'u64',
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'QuestionTooLong',
      msg: 'Question too long (max 200 characters)',
    },
    {
      code: 6001,
      name: 'DescriptionTooLong',
      msg: 'Description too long (max 1000 characters)',
    },
    {
      code: 6002,
      name: 'CategoryTooLong',
      msg: 'Category too long (max 50 characters)',
    },
    {
      code: 6003,
      name: 'InvalidEndTime',
      msg: 'End time must be in the future',
    },
    {
      code: 6004,
      name: 'InvalidAmount',
      msg: 'Invalid bet amount',
    },
    {
      code: 6005,
      name: 'MarketResolved',
      msg: 'Market is already resolved',
    },
    {
      code: 6006,
      name: 'MarketExpired',
      msg: 'Market has expired',
    },
    {
      code: 6007,
      name: 'OutcomeMismatch',
      msg: 'Cannot change outcome after first bet',
    },
    {
      code: 6008,
      name: 'AlreadyResolved',
      msg: 'Market is already resolved',
    },
    {
      code: 6009,
      name: 'MarketNotExpired',
      msg: 'Market has not expired yet',
    },
    {
      code: 6010,
      name: 'Unauthorized',
      msg: 'Unauthorized',
    },
    {
      code: 6011,
      name: 'MarketNotResolved',
      msg: 'Market is not resolved yet',
    },
    {
      code: 6012,
      name: 'AlreadyClaimed',
      msg: 'Winnings already claimed',
    },
    {
      code: 6013,
      name: 'LosingPosition',
      msg: 'This is a losing position',
    },
  ],
} as const

export type PredictionMarketIDL = typeof IDL
