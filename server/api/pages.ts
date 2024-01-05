import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from("pages")
    .select('*')

  if (error) {
    throw createError(error)
  }

  return data
})