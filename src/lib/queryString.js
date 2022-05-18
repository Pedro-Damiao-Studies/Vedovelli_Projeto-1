module.exports.queryString = (obj) => {
  return Object.keys(obj).map(key => {
    return `${key}=${obj[key]}`;
  }).join('&');
}