import { GoogleOAuthProvider } from '@react-oauth/google'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './MyApp/Service/ReactQuery/index.ts'

createRoot(document.getElementById('root')!).render(
  
 <BrowserRouter>
  <QueryClientProvider client={client}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>
  </QueryClientProvider>
  </BrowserRouter>

  
)
