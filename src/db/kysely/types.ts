
import { InferSelectModel } from "drizzle-orm";
import { RatingsTable, MovieTable, GenreTable, UserTable, WatchListItemTable } from "../schemas/indexTables";


export interface Database{
  watchListItems: WatchListItemType
  ratings: RatingType
  movies: MovieType
  genres: GenreType
  users: UserType
}

export type WatchListItemType = InferSelectModel<typeof WatchListItemTable>
export type RatingType = InferSelectModel< typeof RatingsTable>
export type MovieType = InferSelectModel<typeof MovieTable>
export type GenreType = InferSelectModel<typeof GenreTable>
export type UserType = InferSelectModel<typeof UserTable>



