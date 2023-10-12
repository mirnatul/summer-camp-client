import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='bg-[#007057]'>
          <div className='max-w-[1420px] mx-auto font-fontOpenSans'>
            <RouterProvider router={router} />
          </div>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
