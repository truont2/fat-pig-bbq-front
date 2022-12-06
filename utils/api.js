import qs from "qs"

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }

  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:1337' : process.env.NEXT_PUBLIC_STRAPI_URL;


  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${server}/api${path}${queryString ? `?${queryString}` : ""}`
  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occured please try again`)
  }
  const data = await response.json()
  return data
}


// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData(locale) {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:1337' : process.env.NEXT_PUBLIC_STRAPI_URL;

  const globalRes = await fetch(
    `${server}/api/global?[populate]=deep`,
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
  );

  const global = await globalRes.json()
  return global.data;
}
