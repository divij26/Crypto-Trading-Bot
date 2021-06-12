const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

//set headers
// const options = {
   
//     setHeaders: function (res, path, stat) {
//       res.set('x-user-ip', ' 202.173.125.148');
//       res.set('x-api-key', 'cRbHFJTlL6aSfZ0K2q7nj6MgV5Ih4hbA2fUG0ueO');
//     }
// }
  
//app.use(express.static('public', options))

app.get('/', (req, res)=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });
})

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})