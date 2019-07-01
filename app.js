const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let a = 1;
    res.send(`Hello ! ${a}`)
})
app.listen(3000, () => console.log('Example app Listening on port 3000!!'))