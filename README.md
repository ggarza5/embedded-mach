# Mach.Exchange Widget Demo

This is a demo project showcasing how to embed the [Mach.Exchange](https://mach.exchange) cross-chain swap widget in a Next.js application. The widget allows users to perform seamless cross-chain swaps.

## Features

- 🔄 Cross-chain swaps
- 🎨 Customizable widget theme
- 📱 Responsive design
- 🚀 One-click deployment

## Quick Deploy

Deploy your own widget demo with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fggarza5%2Fembedded-mach)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the widget in action.

## Widget Configuration

The widget is embedded using an iframe with the following configuration options:

- `sellChain`: The source chain ID (10143 for Monad Testnet)
- `buyChain`: The destination chain ID (6342 for MegaEth Testnet)
- `showBranding`: Display Mach.Exchange branding
- `hideAIInput`: Hide AI input field
- `themePrimary`: Primary color theme
- `themeBackground`: Background color theme

You can customize these options by modifying the iframe URL parameters in `app/page.tsx`.

## Learn More

To learn more about Mach.Exchange and the widget integration:

- [Mach.Exchange Documentation](https://docs.mach.exchange)

## Support

For support and feedback, please visit our [Discord community](https://discord.gg/mach) or open an issue on GitHub.
