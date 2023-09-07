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

export async function fetchTopTracks({ limit = 10 } = {}) {
  const endpoint = `/chart/0/tracks?limit=${limit}`;
  const { data } = await fetchData(endpoint);

  return data;
}

export async function fetchAlbums({ limit = 10 } = {}) {
  const endpoint = `/chart/0/albums?limit=${limit}`;
  const { data } = await fetchData(endpoint);
  return data;
}

export async function fetchTopArtists({ limit = 3 } = {}) {
  const endpoint = `/chart/0/artists?limit=${limit}`;

  const { data } = await fetchData(endpoint);

  // console.log(data);

  //   const promises = data.map((artist) => fetchArtist(artist.id));
  //   const topArtists = await Promise.all(promises);

  return data;
}
