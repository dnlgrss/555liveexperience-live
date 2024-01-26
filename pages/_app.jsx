// React
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'; // DEV 2.0
// Apollo
import { ApolloProvider } from '@apollo/client/react'
import { client } from '@/helpers/apollo'
// Components
import DevelopmentPage from '@/components/Layout/DevelopmentPage'
//Styles
import '@/styles/Default.css'
import '@/styles/Hamburger.css'
import '@/styles/Header.css'
import '@/styles/Credits.css'
import '@/styles/Sidebar.css'
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
import DevelopmentPage2 from '@/components/Layout/DevelopmentPage2';

//Fonts Init
const SairaSemiCondensed = Saira_Semi_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  const router = useRouter() // DEV 2.0
  const [isDevelopment, setIsDevelopment] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set the environment based on the variable
    setIsDevelopment(process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev');
    setIsLoading(false)
  }, [isDevelopment]);

  if (isLoading) {
    return <div></div>; // Or a more sophisticated loading component
  }

  if (isDevelopment) {
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
      <main className={SairaSemiCondensed.className}>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  )

}
