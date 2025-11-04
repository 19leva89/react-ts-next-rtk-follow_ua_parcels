import { Track } from '@prisma/client'
import { api } from './api'

export type TrackData = Omit<Track, 'id'>
type ResponseData = Track & { msg: string }

export const tracksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTracks: builder.query<Track[], void>({
      query: () => ({
        url: '/tracks',
        method: 'GET',
      }),
    }),
    getTrack: builder.query<Track, string>({
      query: (id) => ({
        url: `/tracks/${id}`,
        method: 'GET',
      }),
    }),
    addTrack: builder.mutation<ResponseData, Track>({
      query: (track) => ({
        url: `/tracks/add`,
        method: 'POST',
        body: track,
      }),
    }),
    archiveTrack: builder.mutation<ResponseData, Track>({
      query: (track) => ({
        url: `/tracks/archive/${track.id}`,
        method: 'PUT',
        body: track,
      }),
    }),
    restoreTrack: builder.mutation<ResponseData, Track>({
      query: (track) => ({
        url: `/tracks/restore/${track.id}`,
        method: 'PUT',
        body: track,
      }),
    }),
    removeTrack: builder.mutation<ResponseData, string>({
      query: (id) => ({
        url: `/tracks/remove/${id}`,
        method: 'DELETE',
        body: { id },
      }),
    }),
    editTrack: builder.mutation<ResponseData, Track>({
      query: (track) => ({
        url: `/tracks/edit/${track.id}`,
        method: 'PUT',
        body: track,
      }),
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetTrackQuery,
  useAddTrackMutation,
  useArchiveTrackMutation,
  useRestoreTrackMutation,
  useRemoveTrackMutation,
  useEditTrackMutation,
} = tracksApi

export const {
  endpoints: { getAllTracks, getTrack, addTrack, archiveTrack, restoreTrack, removeTrack, editTrack },
} = tracksApi
