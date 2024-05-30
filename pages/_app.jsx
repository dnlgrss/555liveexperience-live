// React
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'; // DEV 2.0
// Apollo
import { ApolloProvider } from '@apollo/client/react'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { client } from '@/helpers/apollo'
// Components
import DevelopmentPage from '@/components/Layout/DevelopmentPage'
import DevelopmentPage2 from '@/components/Layout/DevelopmentPage2';
import Loader from '@/components/UI/Loader';
//Styles
import '@/styles/Default.css'
import '@/styles/Fonts.css'
import '@/styles/Header.css'
import '@/styles/Hamburger.css'
import '@/styles/Sidebar.css'
import '@/styles/DesktopMenu.css'
import '@/styles/Credits.css'
import '@/styles/Development.css'
import '@/styles/Homepage.css'
import '@/styles/Our-works.css'
import '@/styles/Our-work.css'
import '@/styles/Homepage.css'
import '@/styles/Why-us.css'
import '@/styles/Our-network.css'
import '@/styles/Contacts.css'
//Fonts
import { Saira_Semi_Condensed } from 'next/font/google'


//Fonts Init
const SairaSemiCondensed = Saira_Semi_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter() // DEV 2.0
  // const [isDevelopment, setIsDevelopment] = useState(false);
  // Set the environment based on the variable
  // setIsDevelopment(process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev');
  const isDevelopment = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev';

  useEffect(() => {
    const handleStart = () => setLoading(true); // Show loader on route change start
    const handleComplete = () => setLoading(false); // Hide loader on route change complete

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete); // Hide loader on route change error

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (isDevelopment) {
    // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
    // Render maintainance page
    return (
      <main className={SairaSemiCondensed.className}>
        <DevelopmentPage2 />
      </main>
    )

    // Check the path to determine which development page to render *******  DEV 2.0
    // if (router.pathname === '/version2') {
    //   return (
    //     <main className={SairaSemiCondensed.className}>
    //       <DevelopmentPage />
    //     </main>
    //   );
    // } else {
    //   return (
    //     <main className={SairaSemiCondensed.className}>
    //       <DevelopmentPage2 />
    //     </main>
    //   );
    // }
    // ******* DEV 2.0
  }


  return (
    <ApolloProvider client={client}>
      {/* Conditionally render the Loader component */}
      {loading ?
        <div className="loader-container" style={{ width: '100dvw', height: '100dvh' }}>
          <Loader />
        </div>
        :
        <main className={SairaSemiCondensed.className}>
          <Component {...pageProps} />
        </main>
      }
    </ApolloProvider>
  )

}
