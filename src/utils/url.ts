import DOMPurify from "dompurify";

/**
 * @returns string
 * @description This function returns the query from the URL. Call this function and set it to the intial value of search Query
 * @example https://www.example.com/?q=hello%20world    =>    hello world
 * @example https://www.google.com/?q=ok                =>    ok
 */
export const getURLQuery = () => {
  return DOMPurify.sanitize(window.location.href.split("?q=")[1] || "")
    .trim()
    .replace(/%20/g, " ");
};

export const removeQueryFromURL = () => {
  // if URL has query then remove it.
  if (getURLQuery())
    window.history.pushState({}, "", window.location.href.split("?q=")[0]);
};

/**
 *
 * @param query
 * @returns string
 * @description This function sets the query in the URL. Call this function inside onChange of the search input (after setting the query in the state)
 */
export const setQueryInURL = (query: string) => {
  if (query)
    window.history.pushState(
      {},
      "",
      window.location.href.split("?q=")[0] + "?q=" + query
    );
  else window.history.pushState({}, "", window.location.href.split("?q=")[0]);
};
