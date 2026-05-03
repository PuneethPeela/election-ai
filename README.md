# ElectIQ – Smart Election Assistant

ElectIQ is an AI-powered civic education platform designed to demystify the election process. It provides users with interactive guides, a smart timeline, and a functional assistant to answer critical voting questions.

## 🗳️ Project Overview
- **Vertical**: Civic Education & Election Readiness
- **Core Goal**: To empower citizens with accurate, easily accessible information about voting steps, deadlines, and registration.

## 🚀 How It Works
1. **Interactive Assistant**: Uses a natural language interface to answer common election queries (registration, ID laws, deadlines) instantly.
2. **Dynamic Timeline**: Visualizes the election cycle from registration to results, filtered by phase.
3. **Step-by-Step Guide**: Breaks down the complex civic process into 7 digestible stages.
4. **Actionable Checklist**: Allows users to track their personal readiness state locally.
5. **Google Integration**: Integrates Google Analytics (GA4) for insights and Google Fonts for a premium UI experience.

## 🛠️ Tech Stack & Evaluation Criteria
- **Frontend**: Vanilla HTML5, CSS3 (Modern dark-mode design with Glassmorphism), and ES6+ JavaScript.
- **Google Services**: 
  - **Google Analytics**: Real-time tracking and user engagement metrics.
  - **Google Fonts**: Custom 'Inter' and 'Outfit' typography for superior readability.
- **Accessibility (WCAG 2.1)**: Implemented ARIA labels, semantic HTML, and high-contrast colors to ensure inclusivity for all voters.
- **Security**: Client-side logic ensures no sensitive user data is sent to external servers unnecessarily.
- **Efficiency**: Zero external dependencies (no heavy frameworks), resulting in sub-1s load times.

## 📝 Assumptions
- Deadlines and dates in the timeline are based on general 2024 election cycles.
- The assistant is designed as a first-level support tool; users are directed to official Secretary of State websites for legal finality.

## ☁️ Deployment
This repository is configured for static hosting and can be instantly deployed to **Google Cloud Run** using a simple Docker wrapper or **Firebase Hosting**.

---
*Built for the Prompt-a-thon Hackathon 2024.*
