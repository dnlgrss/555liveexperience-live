// Add Apollo Client
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";

const link = ApolloLink.from([
    new HttpLink({
        //Our graphql endpoint on wordpress
        uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
        useGETForQueries: true
    }),
]);

export const client = new ApolloClient({
    link,
    // It allows our apollo app to cache requests in aplication memeory
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only'
        }
    }
})
