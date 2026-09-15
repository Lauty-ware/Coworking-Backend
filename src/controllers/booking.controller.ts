import { Request, Response } from 'express';
import { BookingService } from '../services/booking.service';

const bookingService = new BookingService();

export class BookingController {
  public static reservar(req: Request, res: Response): void {
    const { userName, roomName, date } = req.body;
    const success = bookingService.createBooking(userName, roomName, date);
    
    if (success) {
      res.status(201).json({ message: 'Reserva creada exitosamente' });
    } else {
      res.status(400).json({ error: 'La sala no se encuentra disponible' });
    }
  }

  public static cancelar(req: Request, res: Response): void {
    const { userName, roomName } = req.body;
    const success = bookingService.cancelBooking(userName, roomName);

    if (success) {
      res.status(200).json({ message: 'Reserva cancelada exitosamente' });
    } else {
      res.status(404).json({ error: 'No se encontró una reserva activa para cancelar' });
    }
  }
}