# ✈️ Airport Search App 
This project is a performance-optimized airport search interface built with **Next.js** and **React**. It focuses on responsive UI, efficient API usage, and scalable rendering for large data sets.

## 🔍 Features & Optimizations

### 🚀 Frontend

| # | Optimization | Description |
|--|--------------|-------------|
| 1 | **Debounced Search Input** | Prevents excessive API calls by waiting 300ms after user stops typing |
| 2 | **AbortController** | Cancels stale API calls to avoid race conditions |
| 3 | **Minimum Query Length** | Avoids API calls for short or empty input |
| 4 | **Loading & Error UI** | Provides feedback while fetching or on failure |
| 5 | **Virtualized List Rendering** | Uses `react-window` for performance with large datasets |
| 6 | **Responsive Grid** | Adapts grid layout across mobile, tablet, and desktop |
| 7 | **No Results Message** | Friendly message shown when no matches found |

---

### 🛠️ Backend 

| 1 | **Cache the airports data since it's static |
| 2 | **Pre-process data for more efficient searching |
| 3 | **Simple substring matching (faster than regex for large datasets) |


---
1. What are some edge cases you would take care of before shipping this to production?


 - Network failures: Ensure graceful handling and retries or offline fallback.
 - Empty results: Show helpful suggestions like “Try searching for ‘Paris’ or ‘NYC’.”
 - Keyboard accessibility: Tab navigation, screen reader support, proper aria-* attributes.
 - Unusual input: Handle accents, diacritics, or mixed casing (e.g., “São” or “delHi”).
 - Mobile UX: Ensure the keyboard doesn’t obstruct the sticky search bar or scroll behavior.
 - Caching: Add cache headers or server-side caching (e.g., Redis, Cloudflare)
 - Text Search Indexing: Use MongoDB text indexes or ElasticSearch for fuzzy search
 - Lean API Payloads: Send only essential airport fields (e.g. name, city, IATA)
 - Accessibility Enhancements :  Keyboard focus, ARIA labels, and improved contrast
 - Highlight Matching Text : Highlights parts of results that match the search query


2. What would you change if you could attempt this challenge again?
   - Start with virtualization and sticky layout first, as they heavily influence UX and performance early on.
   - Create test coverage for debounce and fetch hooks, to better simulate API behavior.
   - Use Storybook or a UI sandbox to speed up component design and test responsiveness in isolation.
   - Consider infinite scroll as an alternative to virtual scroll for simplicity and API compatibility.
  
3. What's important for you to work well in a fully remote team?

    - Clear communication: Async updates and clarity around scope, especially in Slack/docs.
    - Trust: Room to make decisions, but also confidence that the team supports one another
    - Strong documentation: Well-documented API contracts, code conventions, and onboarding guides
    - Frequent feedback loops: Not just on deliverables, but on process — retros, async design reviews, etc.



---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Window](https://react-window.vercel.app/) for virtualization


## 🚧 Setup & Run Locally

```bash

npm install
npm run dev
