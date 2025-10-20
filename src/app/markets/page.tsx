'use client'

import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import {
  MOCK_MARKETS,
  getActiveMarkets,
  getMarketOdds,
  CATEGORIES,
  type MockMarket,
} from '@/lib/mock'
import { Clock, TrendingUp, Users } from 'lucide-react'

export default function MarketsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter markets
  const filteredMarkets = getActiveMarkets().filter((market) => {
    const matchesCategory =
      selectedCategory === 'All' || market.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      market.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Layout>
      <div className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Explore Markets
            </h1>
            <p className="text-gray-400 text-lg">
              {filteredMarkets.length} active prediction markets
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search markets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Markets Grid */}
          {filteredMarkets.length === 0 ? (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-400">No markets found</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMarkets.map((market) => (
                <MarketCard key={market.id} market={market} />
              ))}
            </div>
          )}

          {/* Demo Banner */}
          <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="text-white font-bold mb-2">Demo Mode</h3>
                <p className="text-gray-400 text-sm">
                  You&apos;re viewing mock data for demonstration. Connect your
                  wallet and deploy the smart contract to interact with real
                  on-chain markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function MarketCard({ market }: { market: MockMarket }) {
  const { yesPercentage, noPercentage, totalPool } = getMarketOdds(market)
  const daysLeft = Math.ceil(
    (market.endTime.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  )

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
      {/* Icon */}
      <div className="h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
        <span className="text-5xl">{market.imageUrl}</span>
      </div>

      {/* Category Badge */}
      <div className="mb-3">
        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-medium">
          {market.category}
        </span>
      </div>

      {/* Question */}
      <h3 className="text-white font-bold mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
        {market.question}
      </h3>

      {/* Odds */}
      <div className="mb-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-green-400 font-bold text-lg">
            YES {yesPercentage}%
          </span>
          <span className="text-red-400 font-bold text-lg">
            NO {noPercentage}%
          </span>
        </div>

        {/* Odds Bar */}
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden flex">
          <div
            className="bg-gradient-to-r from-green-500 to-green-400"
            style={{ width: `${yesPercentage}%` }}
          />
          <div
            className="bg-gradient-to-r from-red-500 to-red-400"
            style={{ width: `${noPercentage}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <Users className="w-3 h-3" />
          <span>{totalPool.toFixed(1)} SOL</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <Clock className="w-3 h-3" />
          <span>{daysLeft}d left</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <TrendingUp className="w-3 h-3" />
          <span>Active</span>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all">
        Trade
      </button>
    </div>
  )
}
