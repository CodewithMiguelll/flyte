export async function fetchFlightsByAirport(iata: string) {
  const res = await fetch(
    `https://api.aviationstack.com/v1/flights?access_key=${process.env.NEXT_PUBLIC_API_KEY}&dep_iata=${iata}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch flights");
  }

  const data = await res.json();
  return data.data?.slice(0, 6) ?? [];
}
