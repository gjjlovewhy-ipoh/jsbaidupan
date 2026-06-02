export default {
  async fetch(request) {
    const target = "https://pan.baidu.re";
    let url = new URL(request.url);
    url.hostname = new URL(target).hostname;
    url.protocol = new URL(target).protocol;
    let newReq = new Request(url, request);
    return fetch(newReq, { redirect: "follow" });
  }
};
