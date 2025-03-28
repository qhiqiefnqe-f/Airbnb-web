import lyfRequest from "..";

export function getEntireData(offset = 0, size = 20) {
  return lyfRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
} 