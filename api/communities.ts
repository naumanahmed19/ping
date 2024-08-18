import { useMutation } from "@tanstack/react-query";

export const createCommunity = async (data) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // Throwing error here if response is not okay (e.g., 404)thrownewError(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
