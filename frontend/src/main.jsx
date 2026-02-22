import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  console.warn("Missing Clerk Publishable Key. Authentication features will be disabled. Please set VITE_CLERK_PUBLISHABLE_KEY in your environment variables.")
}

// Fallback to a dummy key to prevent ClerkProvider from crashing the app while in development/preview
const clerkKey = PUBLISHABLE_KEY || "pk_test_dummy"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkKey} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>,
)
