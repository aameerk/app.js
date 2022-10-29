const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello');
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
});

app.get('/api/posts/:year/:month', (res, req) => {
    res.send(req.query);
});
//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
