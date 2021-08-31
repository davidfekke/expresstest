
function index(req, res) {
    res.send('hello world!');
}

function hello(req, res) {
    const name = req.params.name ?? "world";
    res.send(`hello ${name}`);
}

export { index, hello };
