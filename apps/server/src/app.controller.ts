import { Controller, Get, Post, Req, Res, Next } from '@nestjs/common';
import { getPostgraphileMiddleware } from './postgraphile.middleware';
import { PostGraphileResponseNode } from 'postgraphile';
import { IncomingMessage, ServerResponse } from 'http';

const postgraphileMiddleware = getPostgraphileMiddleware({
  appMode: process.env.app_mode,
  graphiqlroute: '/graphiql',
  graphqlroute: '/graphql',
  poolConfig: process.env.DATABASE_URL,
  schemas: process.env.DATABASE_SCHEMAS,
});

@Controller()
export class AppController {
  @Get(postgraphileMiddleware.options.graphiqlRoute)
  graphiql(@Req() req: IncomingMessage, @Res() res: ServerResponse, @Next() next) {
    postgraphileMiddleware.graphiqlRouteHandler(new PostGraphileResponseNode(req, res, next));
  }

  @Post(postgraphileMiddleware.options.graphqlRoute)
  graphql(@Req() req: IncomingMessage, @Res() res: ServerResponse, @Next() next) {
    postgraphileMiddleware.graphqlRouteHandler(new PostGraphileResponseNode(req, res, next));
  }
}

