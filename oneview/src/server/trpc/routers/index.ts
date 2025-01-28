import { router } from '../trpc';
import { noteRouter } from './notes';
import { subscriptionRouter } from './subscription';

export const appRouter = router({
  note: noteRouter,
  subscription: subscriptionRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
