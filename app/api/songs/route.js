import { fetchTopTracks } from "@/utils/fetchUtills";

// GET proxy request to bypass CORS block when fetching on client components
export async function GET(req, {}) {
  const data = await fetchTopTracks();
  return Response.json(data);
}
