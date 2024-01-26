// Add Apollo Client
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    //Our graphql endpoint on wordpress
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
    // It allows our apollo app to cache requests in aplication memeory
    cache: new InMemoryCache()
})
