const express  = require('express');
const hbs  = require('hbs');
const app = express();

app.use(express.static(__dirname +'/public'));
app.use((req,res,next)=>{
    const now = new Date().toString();
    console.log(req.method);
    console.log(req.url);
    next();
});

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('currentYear',()=>{
    return new Date().getFullYear()
})
app.use((req,res,next)=>{
    res.render('maintenance.hbs');
});

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        title: 'Home',
    });
});


app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title: 'About',
        year:new Date().getFullYear()
    });
});
app.listen('3030',()=>{
    console.log('Listening to port 3030');
});