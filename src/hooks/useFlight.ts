"use client";

import { useEffect, useState } from "react";
import { fetchFlightsByAirport } from "@/lib/aviation";

export function useFlights(defaultAirport = "LOS") {
  const [airport, setAirport] = useState(defaultAirport);
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadFlights() {
      setLoading(true);
      try {
        const data = await fetchFlightsByAirport(airport);
        setFlights(data);
      } catch (err) {
        console.error("Failed to fetch flights", err);
      } finally {
        setLoading(false);
      }
    }

    loadFlights();
  }, [airport]);

  return {
    airport,
    setAirport,
    flights,
    loading,
  };
}
