import lyfRequest from "..";

export function getHomeGoodPriceData() {
  return lyfRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return lyfRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscountData() {
  return lyfRequest.get({
    url: '/home/discount'
  })
}

export function getHomeHotRecommendData() {
  return lyfRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return lyfRequest.get({
    url: "/home/longfor"
  })
}

export function getHomePlusData() {
  return lyfRequest.get({
    url: "/home/plus"
  })
}