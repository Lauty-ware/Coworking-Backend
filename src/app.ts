import express from 'express';
import { BookingController } from './controllers/booking.controller';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoints REST
app.post('/api/bookings', BookingController.reservar);
app.post('/api/bookings/cancel', BookingController.cancelar);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor de coworking corriendo en el puerto ${PORT}`);
  });
}

export default app;