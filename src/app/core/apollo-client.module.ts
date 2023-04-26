import { NgModule, isDevMode } from "@angular/core";
import { InMemoryCache, from, split } from "@apollo/client/core";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { Apollo, ApolloModule } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { createClient } from "graphql-ws";

const BASE_URL = isDevMode()
  ? "http://localhost:4000/graphql"
  : "https://imzihad21.is-a.dev/graphql";

@NgModule({
  exports: [ApolloModule],
})
export class ApolloClientModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // Create an http link:
    const http = httpLink?.create({
      uri: BASE_URL,
      withCredentials: true,
    });

    // Create a WebSocket link:
    const websocket = new GraphQLWsLink(
      createClient({
        url: BASE_URL.replace("http", "ws"),
      })
    );

    const connectionLink = split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation }: any = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      websocket,
      http
    );

    apollo.create({
      link: from([connectionLink]),
      cache: new InMemoryCache(),
      credentials: "include",
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "network-only",
          errorPolicy: "all",
        },
      },
    });
  }
}
