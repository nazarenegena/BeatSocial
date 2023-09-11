import { notFound } from "next/navigation";

const BASE_URL = "https://api.deezer.com";

async function fetchData(endpoint) {
  const response = await fetch(BASE_URL + endpoint);
  const data = await response.json();

  // Deezer API internal notfound error
  if (data.error?.code === 800) {
    return notFound();
  }

  return data;
}

export async function fetchTopPlaylists() {
  const endpoint = `/chart/0/playlists`;
  const { data } = await fetchData(endpoint);

  return data;
}

export async function fetchPlaylist(id) {
  const endpoint = `/playlist/${id}`;

  const data = await fetchData(endpoint);
  return data;
}

export async function fetchTopTracks({ limit = 10 } = {}) {
  const endpoint = `/chart/0/tracks?limit=${limit}`;
  const { data } = await fetchData(endpoint);

  return data;
}

export async function fetchArtistTracks(id) {
  const endpoint = `/artist/${id}/top?limit=30`;
  const { data } = await fetchData(endpoint);

  return data;
}

export async function fetchAlbums({ limit = 10 } = {}) {
  const endpoint = `/chart/0/albums`;
  const { data } = await fetchData(endpoint);
  return data;
}

export async function fetchAlbum(id) {
  const endpoint = `/album/${id}`;
  const data = await fetchData(endpoint);

  console.log(data, "abum data");

  return data;
}

export async function fetchTopArtists({ limit = 3 } = {}) {
  const endpoint = `/chart/0/artists?limit=${limit}`;

  const { data } = await fetchData(endpoint);

  return data;
}

export async function fetchSearchData(query, { limit = 5 } = {}) {
  const endpoint = (category) =>
    `/search/${category}?q=${query}&limit=${limit}`;

  const tracksPromise = fetchData(endpoint("track"));
  const albumsPromise = fetchData(endpoint("album"));
  const artistsPromise = fetchData(endpoint("artist"));

  return await Promise.all([tracksPromise, albumsPromise, artistsPromise]);
}
