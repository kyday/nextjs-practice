"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function HomePage() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
  });

  if (!data) return null;

  console.log(data);

  return <div>HomePage</div>;
}
