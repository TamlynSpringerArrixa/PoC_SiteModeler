import { postgraphile } from 'postgraphile';
import * as connectionFilterPlugin from "postgraphile-plugin-connection-filter";
import pgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import { config } from 'dotenv'
config();

const DATABASE_URL = 'postgres://postgres:ericsson@localhost:5432/nest_graphql'

export function getPostgraphileMiddleware({
  poolConfig,
  schemas,
  appMode,
  graphqlroute, 
  graphiqlroute 
}) {
  return postgraphile(
    poolConfig,
        (schemas || "public").split(","),
        {
            watchPg: true,
            ignoreRBAC: false,
            ...(appMode === 'development' && { graphiql: true, enhanceGraphiql: true }),
            graphqlRoute: graphqlroute || '/graphql',
            graphiqlRoute: graphiqlroute || '/graphiql',
            simpleCollections: "only",
            appendPlugins: [connectionFilterPlugin, pgSimplifyInflectorPlugin],
            graphileBuildOptions: {
                pgSimplifyAllRows: true,
                pgOmitListSuffix: true
            }
        }
  );
}
