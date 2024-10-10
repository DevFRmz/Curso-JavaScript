import jsonServer from 'json-server';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, 'db.json')); // archivo JSON con tus datos
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware personalizado
server.use((req, res, next) => {
    if (req.method === 'GET' && req.query._page) {
        const page = parseInt(req.query._page, 10);
        const limit = parseInt(req.query._limit, 10) || 10; // Valor por defecto de 10

        const data = router.db.get(req.path.substring(1)).value();
        const totalCount = data.length;
        const totalPages = Math.ceil(totalCount / limit);

        if (page > totalPages) {
            res.status(200).json([]); // Devuelve un arreglo vacío si la página no existe
            return;
        }
    }
    next();
});

server.use(router);

const port = 3001;
server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
});
