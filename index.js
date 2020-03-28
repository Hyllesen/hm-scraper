const needle = require("needle");

async function main() {
  const result = await needle(
    "get",
    "https://www2.hm.com/en_us/women/products/view-all/_jcr_content/main/productlisting_30ab.display.json?sort=stock&image-size=small&image=model&offset=100&page-size=36",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
      }
    }
  );
  console.log(result.body);
}

main();
