import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://soccer.sportmonks.com/api/v2.0";

export const sportmonksApi = createApi({
  reducerPath: "sportmonksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    leagueById: builder.query({
      query: (league_id = 501) =>
        `/leagues/${league_id}?api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),
    clubById: builder.query({
      query: ({ id }) =>
        `/teams/${id}?api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),
    venueById: builder.query({
      query: ({ id }) =>
        `/venues/${id}?api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),
    fixturesByDate: builder.query({
      query: () =>
        `/fixtures/between/2020-08-02/2020-08-10?api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),
    standingBySeasonId: builder.query({
      query: (season_id = 17141, round_id = 194968) =>
        `/standings/season/${season_id}/round/${round_id}?api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),
    clubBySeasonId: builder.query({
      query: (season_id = 17141) =>
        `/teams/season/${season_id}?api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),
    topScoreBySeasonId: builder.query({
      query: (season_id = 17141) =>
        `/topscorers/season/${season_id}?api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),
    venueBySeasonId: builder.query({
      query: (season_id = 17141) =>
        `/venues/season/${season_id}?api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),

    searchClubByName: builder.query({
      query: ({ term }) =>
        `/teams/search/${term}?include=squad.player&&api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),

    searchPlayerByName: builder.query({
      query: (name_player) => `/players/search/${name_player}`,
    }),

    teamSquadById: builder.query({
      query: ({ id }) =>
        `/teams/${id}?include=squad.player&&api_token=YQ1pJyCCnm8Al4I4l0DOefZAzo5DklnL7zqbI0AZrWSw56f0e2wcz4WpqRKg`,
    }),
  }),
});
export const {
  useLeagueByIdQuery,
  useClubByIdQuery,
  useVenueByIdQuery,
  useStandingBySeasonIdQuery,
  useClubBySeasonIdQuery,
  useTopScoreBySeasonIdQuery,
  useVenueBySeasonIdQuery,
  useFixturesByDateQuery,
  useSearchClubByNameQuery,
  useSearchPlayerByNameQuery,
  useTeamSquadByIdQuery,
} = sportmonksApi;
