const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";
const BACKEND_ORIGIN =
  import.meta.env.VITE_BACKEND_URL || (API_BASE_URL.startsWith("http") ? new URL(API_BASE_URL).origin : "");

async function apiRequest(path, { method = "GET", token, data, isFormData = false } = {}) {
  const headers = new Headers();

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  if (!isFormData && data !== undefined) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: data === undefined ? undefined : isFormData ? data : JSON.stringify(data),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Request failed");
  }

  return payload;
}

function resolveMediaUrl(url) {
  if (!url) {
    return "";
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  if (!BACKEND_ORIGIN) {
    return url.startsWith("/") ? url : `/${url}`;
  }

  return url.startsWith("/") ? `${BACKEND_ORIGIN}${url}` : `${BACKEND_ORIGIN}/${url}`;
}

export { API_BASE_URL, BACKEND_ORIGIN, apiRequest, resolveMediaUrl };