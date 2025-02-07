// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  console.log(url);
  let newUrl = url.split(".");
  return url.includes("www")
    ? url.split(".").filter((e, i) => newUrl[i - 1]?.includes("www"))
    : url
        .split("")
        .map((e, i) => {
          let indexSlash =
            url.indexOf("//") > 0 ? url.indexOf("//") + 1 : false;
          let indexDot = url.indexOf(".");
          if (indexSlash && i > indexSlash && i < indexDot) {
            return e;
          } else if (!indexSlash && i < indexDot) {
            return e;
          } else {
            return "";
          }
        })
        .join("");
}

function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

domainName = (url) =>
  url.includes("www")
    ? url.split(".")[1]
    : url.includes("http")
    ? url.split("//")[1].split(".")[0]
    : url.split(".")[0];
