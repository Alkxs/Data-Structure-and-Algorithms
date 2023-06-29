// with SPLIT and REPLACE

function domainName(url) {
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]
}

// with MATCH and regular expression

function domainName(url) {
  const match = url.match(/:\/\/(www\.)?(.[^/:]+)/i)
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2].split('.')[0]
  } else {
    return null
  }
}
