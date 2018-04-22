const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/server1803')
.then(() => console.log('Database connected.'))
.catch(error => {
    console.log(error);
    process.exit(1);
});
