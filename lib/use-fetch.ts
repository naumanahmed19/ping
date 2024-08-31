type FetchOptions = {
  method?: string;
  body?: any;
  headers?: Record<string, string>;
};

export const useFetch = async (url: string, options: FetchOptions = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      `Network response was not ok: ${response.status} - ${errorMessage}`,
    );
  }

  return response.json();
};

export const useGet = (url: string, params?: Record<string, any>) => {
  const queryString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";
  return useFetch(url + queryString);
};

export const usePost = (url: string, data: any) => {
  return useFetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const usePut = (url: string, data: any) => {
  return useFetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const useDelete = (url: string) => {
  return useFetch(url, {
    method: "DELETE",
  });
};

export const usePatch = (url: string, data: any) => {
  return useFetch(url, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};
