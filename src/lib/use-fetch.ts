import { redirect } from "next/navigation";

type FetchOptions = {
  method?: string;
  body?: any;
  headers?: Record<string, string>;
};

export const getFetch = async (url: string, options: FetchOptions = {}) => {
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

export const get = (url: string, params?: Record<string, any>) => {
  const queryString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";

  return getFetch(url + queryString);
};

export const textx = (url: string, params?: Record<string, any>) => {
  const queryString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";

  return getFetch(url + queryString);
};

export const serverGet = (url: string, params?: Record<string, any>) => {
  const fullUrl = process.env.BASE_URL + url;
  return get(fullUrl, params)
    .then((data) => data)
    .catch((error) => {
      redirect("/404");
    });
};

export const usePost = (url: string, data: any) => {
  return getFetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const usePut = (url: string, data: any) => {
  return getFetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const useDelete = (url: string) => {
  return getFetch(url, {
    method: "DELETE",
  });
};

export const usePatch = (url: string, data: any) => {
  return getFetch(url, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};
