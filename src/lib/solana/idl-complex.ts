/**
 * IDL (Interface Definition Language) del smart contract COMPLETO
 *
 * Este es el IDL del contrato complejo con todas las funcionalidades:
 * - Verificación humana
 * - Integración con Oracles
 * - Meta-predictions
 * - Sistema de reputación
 * - Moderación comunitaria
 */

export const IDL_COMPLEX = {
  version: '0.1.0',
  name: 'prediction_market',
  instructions: [
    {
      name: 'initialize',
      accounts: [
        {
          name: 'multisigGovernance',
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
      args: [],
    },
    {
      name: 'createMarket',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userProfile',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'creator',
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
          name: 'marketData',
          type: {
            defined: 'MarketData',
          },
        },
        {
          name: 'evidenceRequirements',
          type: {
            defined: 'EvidenceRequirements',
          },
        },
      ],
    },
    {
      name: 'submitEvidence',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'evidence',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userProfile',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'submitter',
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
          name: 'evidenceData',
          type: {
            defined: 'EvidenceData',
          },
        },
      ],
    },
    {
      name: 'placePrediction',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'marketPoolAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
        {
          name: 'outcome',
          type: {
            defined: 'Outcome',
          },
        },
      ],
    },
    {
      name: 'voteOnEligibility',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'eligibilityRegistry',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'eligibilityVote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userProfile',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'voter',
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
          name: 'vote',
          type: 'bool',
        },
        {
          name: 'reason',
          type: 'string',
        },
      ],
    },
    {
      name: 'reportContent',
      accounts: [
        {
          name: 'marketAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'contentReport',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userProfile',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'reporter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'market',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'reportType',
          type: {
            defined: 'ModerationType',
          },
        },
        {
          name: 'reason',
          type: 'string',
        },
      ],
    },
    {
      name: 'emergencyPauseMarket',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'multisigGovernance',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'emergencyAction',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'signer',
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
          name: 'reason',
          type: 'string',
        },
      ],
    },
    {
      name: 'verifyHumanIdentity',
      accounts: [
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'verifier',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'proofData',
          type: {
            defined: 'HumanProofData',
          },
        },
      ],
    },
    {
      name: 'createMetaPrediction',
      accounts: [
        {
          name: 'parentMarketAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'metaMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userProfile',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'creator',
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
          name: 'parentMarket',
          type: 'publicKey',
        },
        {
          name: 'metaData',
          type: {
            defined: 'MetaPredictionData',
          },
        },
      ],
    },
    {
      name: 'resolveMarketWithOracle',
      accounts: [
        {
          name: 'market',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oracleAuthority',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'oracleData',
          type: {
            defined: 'OracleData',
          },
        },
      ],
    },
    {
      name: 'updateReputation',
      accounts: [
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'updater',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'accuracyScore',
          type: 'u8',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'PredictionMarket',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'creator',
            type: 'publicKey',
          },
          {
            name: 'status',
            type: {
              defined: 'MarketStatus',
            },
          },
          {
            name: 'createdAt',
            type: 'i64',
          },
          {
            name: 'resolutionDate',
            type: 'i64',
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
            name: 'evidenceRequirements',
            type: {
              defined: 'EvidenceRequirements',
            },
          },
          {
            name: 'totalPool',
            type: 'u64',
          },
          {
            name: 'yesPool',
            type: 'u64',
          },
          {
            name: 'noPool',
            type: 'u64',
          },
          {
            name: 'totalParticipants',
            type: 'u32',
          },
          {
            name: 'resolutionData',
            type: {
              option: {
                defined: 'ResolutionData',
              },
            },
          },
          {
            name: 'moderationFlags',
            type: {
              vec: {
                defined: 'ModerationFlag',
              },
            },
          },
          {
            name: 'reputationThreshold',
            type: 'u8',
          },
          {
            name: 'humanVerifiedRequired',
            type: 'bool',
          },
          {
            name: 'oracleIntegration',
            type: {
              option: {
                defined: 'OracleIntegration',
              },
            },
          },
          {
            name: 'metaMarkets',
            type: {
              vec: 'publicKey',
            },
          },
        ],
      },
    },
    {
      name: 'UserProfile',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'user',
            type: 'publicKey',
          },
          {
            name: 'reputationScore',
            type: 'u32',
          },
          {
            name: 'totalPredictions',
            type: 'u32',
          },
          {
            name: 'correctPredictions',
            type: 'u32',
          },
          {
            name: 'accuracyRate',
            type: 'u8',
          },
          {
            name: 'humanVerified',
            type: 'bool',
          },
          {
            name: 'humanProof',
            type: {
              option: {
                defined: 'HumanProofData',
              },
            },
          },
          {
            name: 'createdAt',
            type: 'i64',
          },
          {
            name: 'lastActivity',
            type: 'i64',
          },
          {
            name: 'badges',
            type: {
              vec: {
                defined: 'Badge',
              },
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'MarketStatus',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Active',
          },
          {
            name: 'Paused',
          },
          {
            name: 'Resolved',
          },
          {
            name: 'Disputed',
          },
          {
            name: 'Blacklisted',
          },
        ],
      },
    },
    {
      name: 'Outcome',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Yes',
          },
          {
            name: 'No',
          },
          {
            name: 'Other',
            fields: [
              {
                type: 'u8',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'EvidenceType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Scientific',
          },
          {
            name: 'Governmental',
          },
          {
            name: 'Media',
          },
          {
            name: 'Community',
          },
          {
            name: 'ChainlinkOracle',
          },
        ],
      },
    },
    {
      name: 'ModerationType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Automatic',
          },
          {
            name: 'Community',
          },
          {
            name: 'Legal',
          },
        ],
      },
    },
    {
      name: 'HumanProofType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'ProofOfHumanity',
          },
          {
            name: 'BrightID',
          },
          {
            name: 'GitcoinPassport',
          },
        ],
      },
    },
    {
      name: 'Badge',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'HighAccuracy',
          },
          {
            name: 'EarlyAdopter',
          },
          {
            name: 'EvidenceContributor',
          },
          {
            name: 'CommunityModerator',
          },
          {
            name: 'OracleValidator',
          },
        ],
      },
    },
    {
      name: 'MarketData',
      type: {
        kind: 'struct',
        fields: [
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
            name: 'resolutionDate',
            type: 'i64',
          },
          {
            name: 'initialLiquidity',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'EvidenceRequirements',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'minEvidenceCount',
            type: 'u8',
          },
          {
            name: 'requiredTypes',
            type: {
              vec: {
                defined: 'EvidenceType',
              },
            },
          },
          {
            name: 'oracleRequired',
            type: 'bool',
          },
          {
            name: 'scientificPeerReview',
            type: 'bool',
          },
          {
            name: 'governmentSourceRequired',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'EvidenceData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'evidenceType',
            type: {
              defined: 'EvidenceType',
            },
          },
          {
            name: 'sourceUrl',
            type: 'string',
          },
          {
            name: 'description',
            type: 'string',
          },
          {
            name: 'credibilityScore',
            type: 'u8',
          },
          {
            name: 'verified',
            type: 'bool',
          },
          {
            name: 'submittedAt',
            type: 'i64',
          },
          {
            name: 'verifier',
            type: {
              option: 'publicKey',
            },
          },
        ],
      },
    },
    {
      name: 'ResolutionData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'outcome',
            type: {
              defined: 'Outcome',
            },
          },
          {
            name: 'resolvedAt',
            type: 'i64',
          },
          {
            name: 'oracleData',
            type: {
              option: {
                defined: 'OracleData',
              },
            },
          },
          {
            name: 'evidenceUsed',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'resolutionMethod',
            type: {
              defined: 'ResolutionMethod',
            },
          },
        ],
      },
    },
    {
      name: 'ResolutionMethod',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Oracle',
          },
          {
            name: 'CommunityVote',
          },
          {
            name: 'ExpertPanel',
          },
          {
            name: 'TimeBased',
          },
        ],
      },
    },
    {
      name: 'OracleData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'oracleProvider',
            type: 'string',
          },
          {
            name: 'dataSource',
            type: 'string',
          },
          {
            name: 'value',
            type: 'string',
          },
          {
            name: 'confidence',
            type: 'u8',
          },
          {
            name: 'timestamp',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'OracleIntegration',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'provider',
            type: 'string',
          },
          {
            name: 'feedAddress',
            type: 'publicKey',
          },
          {
            name: 'updateFrequency',
            type: 'u64',
          },
          {
            name: 'thresholdConfidence',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'ModerationFlag',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'flagType',
            type: {
              defined: 'ModerationType',
            },
          },
          {
            name: 'reason',
            type: 'string',
          },
          {
            name: 'flaggedBy',
            type: 'publicKey',
          },
          {
            name: 'flaggedAt',
            type: 'i64',
          },
          {
            name: 'resolved',
            type: 'bool',
          },
          {
            name: 'resolution',
            type: {
              option: 'string',
            },
          },
        ],
      },
    },
    {
      name: 'HumanProofData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'proofType',
            type: {
              defined: 'HumanProofType',
            },
          },
          {
            name: 'proofId',
            type: 'string',
          },
          {
            name: 'verifiedAt',
            type: 'i64',
          },
          {
            name: 'verifier',
            type: 'publicKey',
          },
          {
            name: 'expiresAt',
            type: {
              option: 'i64',
            },
          },
        ],
      },
    },
    {
      name: 'MetaPredictionData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'question',
            type: 'string',
          },
          {
            name: 'description',
            type: 'string',
          },
          {
            name: 'predictionType',
            type: {
              defined: 'MetaPredictionType',
            },
          },
          {
            name: 'mediaAnalysis',
            type: {
              option: {
                defined: 'MediaAnalysisData',
              },
            },
          },
        ],
      },
    },
    {
      name: 'MetaPredictionType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'MediaAccuracy',
          },
          {
            name: 'PublicReaction',
          },
          {
            name: 'MarketInfluence',
          },
          {
            name: 'ExpertOpinion',
          },
        ],
      },
    },
    {
      name: 'MediaAnalysisData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'sentimentScore',
            type: 'i8',
          },
          {
            name: 'biasDetection',
            type: {
              vec: 'string',
            },
          },
          {
            name: 'sourceCredibility',
            type: 'u8',
          },
          {
            name: 'factCheckResults',
            type: {
              vec: {
                defined: 'FactCheckResult',
              },
            },
          },
          {
            name: 'analysisTimestamp',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'FactCheckResult',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'claim',
            type: 'string',
          },
          {
            name: 'verdict',
            type: {
              defined: 'FactCheckVerdict',
            },
          },
          {
            name: 'confidence',
            type: 'u8',
          },
          {
            name: 'sources',
            type: {
              vec: 'string',
            },
          },
        ],
      },
    },
    {
      name: 'FactCheckVerdict',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'True',
          },
          {
            name: 'False',
          },
          {
            name: 'Misleading',
          },
          {
            name: 'Unverified',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InsufficientReputation',
      msg: 'Insufficient reputation to perform this action',
    },
    {
      code: 6001,
      name: 'InvalidQuestionLength',
      msg: 'Question must be between 10 and 200 characters',
    },
    {
      code: 6002,
      name: 'InvalidDescriptionLength',
      msg: 'Description must be less than 500 characters',
    },
    {
      code: 6003,
      name: 'InvalidResolutionDate',
      msg: 'Resolution date must be in the future',
    },
    {
      code: 6004,
      name: 'MarketNotActive',
      msg: 'Market is not in active status',
    },
    {
      code: 6005,
      name: 'InsufficientOracleConfidence',
      msg: 'Oracle confidence below threshold',
    },
    {
      code: 6006,
      name: 'HumanVerificationRequired',
      msg: 'Human verification required for this market',
    },
    {
      code: 6007,
      name: 'UnauthorizedEmergencyAction',
      msg: 'Unauthorized to perform emergency actions',
    },
    {
      code: 6008,
      name: 'InvalidInputParameters',
      msg: 'Invalid input parameters',
    },
  ],
} as const

export type PredictionMarketComplexIDL = typeof IDL_COMPLEX
