


Bun.serve({
    fetch(req: Request) {
        return new Response(`bun!`);
    },
    port: 3000,
});
