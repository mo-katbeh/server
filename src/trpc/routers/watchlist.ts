// server/trpc/routers/watchlist.ts
import { publicProcedure, router } from './mainRouter';
import { getWatchlistByUser } from '../../../db/kysely/queries/watchlist'; // from your kysely logic
import { addToWatchlistSchema } from '../../../../packages/zod/watchlist'; // zod schema

export const watchlistRouter = router({
  getWatchlist: publicProcedure
    .input(addToWatchlistSchema)
    .query(async ({ input }) => {
      return await getWatchlistByUser(input.userId);
    }),
});
