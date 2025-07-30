import { publicProcedure, router } from '../core';
import { getAllUsers } from '../../../../packages/db/kysely/queries/users'; // from your kysely logic

export const usersRouter = router({
  getAll: publicProcedure
    .query(async () => {  
      return getAllUsers();
    }),
});

console.log(usersRouter)