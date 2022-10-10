const path = require('path');
const fastify = require('fastify')({logger: false});

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, "public"),
    prefix: "/"
});

fastify.register(require('@fastify/formbody'));
fastify.register(require('@fastify/view'), {
    engine: { handlebars: require("handlebars") }
});

fastify.get("/", async (req, reply) => {
    let params = {
        tabName: "home",
        title: "Personal Home Page | Adi Lima",
        message: "Adi Lima | Home",
        request: req.query
    };
    return reply.view("/src/pages/index.hbs", params);
})
.get("/people", async (request, reply) => {
    let strName = request.query.name;
    let g = require("./src/js/gallery");
    let params = {
        title: "People",
        name: strName,
        gallery: g.gallery()
    };
    if (strName === "adi") {
        params.infoList = [];
        for (let i = 0; i < 10; i++) {
            params.infoList[i] = {info: "<span class=\"w3-text-green\">Info ke-" + i + "</span>"};
        }
    }
    return reply.view("/src/pages/people.hbs", params);
});

const start = async () => {
    try {
        await fastify.listen({port: 3000});
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();

