const express = require( 'express' ) 
const app = express()
app.set('view engine', 'ejs')
//Middleware
app.use('/assets', express.static('assets'))
//Home route
app.get('/', (req, res)=>{
    res.render('index')
})
//Add Blogs
app.get('/addBlogs', (req, res) => {
    res.render('addBlogs', {username: 'Maria'})
})
//success
app.post('success', (req,res)=>{
    console.log(req.body)
    res.render('success')
})

//Listener
const port = 3000

app.listen(port, ()=>{
    console.log(`App started on port ${port}`);
})