# 🚀 PrismaFi - Solana Prediction Markets

Una plataforma moderna y descentralizada de mercados de predicción construida en Solana con Next.js, TypeScript, y Tailwind CSS.

## ✨ Features

- **🎯 Prediction Markets**: Create and trade on real-world events
- **💰 Wallet Integration**: Connect with Solana wallets
- **📱 Responsive Design**: Mobile-first, beautiful UI
- **🔍 Search & Filters**: Find markets easily
- **📊 Analytics**: Real-time market data and charts
- **👥 Social Features**: Follow top predictors and squads
- **🎨 Modern UI**: Dark mode with smooth animations

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Headless UI
- **Blockchain**: Solana Web3.js, Wallet Adapter
- **State**: Zustand, TanStack Query, SWR
- **Charts**: Recharts
- **Icons**: Lucide React, Heroicons
- **Utils**: date-fns, numeral, clsx

## 🚀 Quick Start

### Option 1: Use the Setup Script

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

**Windows:**
```cmd
setup.bat
```

### Option 2: Manual Setup

1. **Clone and install:**
```bash
git clone <your-repo>
cd prediction-market
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open in browser:**
```
http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── market/            # Market pages
│   ├── portfolio/         # User portfolio
│   ├── activity/          # Trading activity
│   ├── squads/            # Prediction squads
│   ├── prophets/          # Top predictors
│   └── truth-mirror/      # Truth mirror feature
├── components/            # React components
│   ├── layout/           # Header, Footer, Layout
│   ├── market/           # Market-related components
│   ├── filters/          # Search and filter components
│   ├── prophets/         # Prophet/predictor components
│   ├── impact/           # Impact measurement
│   ├── nft/              # NFT-related components
│   ├── share/            # Social sharing
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and helpers
├── store/                # Zustand state management
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## 🎨 Design System

- **Colors**: Purple/pink gradients, dark theme
- **Typography**: Modern, clean fonts
- **Spacing**: Consistent Tailwind spacing
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js configuration
- **Prettier**: Code formatting
- **Conventional Commits**: Git commit messages

## 🌟 Key Components

### Header
- Responsive navigation
- Search functionality
- Wallet connection
- Mobile hamburger menu

### Market Components
- Market cards
- Trading interface
- Price charts
- Market creation

### Wallet Integration
- Multiple wallet support
- Connection status
- Transaction handling

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Docker
```bash
docker build -t prediction-market .
docker run -p 3000:3000 prediction-market
```

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

- **Discord**: [Your Discord Server]
- **Twitter**: [@YourTwitter]
- **Email**: support@predictmarket.com

---

**Built with ❤️ for the Solana ecosystem**