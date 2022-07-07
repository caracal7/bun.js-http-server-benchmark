require("http")
    .createServer((req, res) => res.end("bun!"))
    .listen(3000);
