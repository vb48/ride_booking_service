const express = require('express');
const mongoose = require('mongoose');
const rideRoutes = require('./routes/ridesRoute');
const bookingRoutes = require('./routes/bookingsRoute');
const driverRoutes = require('./routes/driverRoute');
const userRoutes = require('./routes/userRoute');

const app = express();
const port = 3000;
 
mongoose.connect('mongodb://localhost:27017/rides', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {  
  console.log('Connected to database');
}).catch((err) => {
  console.log(err);
});

app.use(express.json());

app.use('/rides', rideRoutes);
app.use('/bookings', bookingRoutes);
app.use('/driver', driverRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});