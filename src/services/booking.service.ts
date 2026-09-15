import { Booking } from '../models/booking.model';

export class BookingService {
  private rooms: Record<string, string> = {
    'Sala Creativa': 'Disponible',
    'Sala Reuniones': 'Disponible'
  };
  private bookings: Booking[] = [];

  public getRoomStatus(roomName: string): string {
    return this.rooms[roomName] || 'No encontrada';
  }

  public setRoomStatus(roomName: string, status: string): void {
    this.rooms[roomName] = status;
  }

  public createBooking(userName: string, roomName: string, date: string): boolean {
    if (this.rooms[roomName] === 'Disponible') {
      this.rooms[roomName] = 'Ocupada';
      this.bookings.push({
        id: `${roomName}-${date}-${Date.now()}`,
        roomName,
        userName,
        date,
        status: 'Activa'
      });
      return true;
    }
    return false;
  }

  public cancelBooking(userName: string, roomName: string): boolean {
    const bookingIndex = this.bookings.findIndex(
      b => b.userName === userName && b.roomName === roomName && b.status === 'Activa'
    );

    if (bookingIndex !== -1) {
      this.bookings[bookingIndex].status = 'Cancelada';
      this.rooms[roomName] = 'Disponible';
      return true;
    }
    return false;
  }
}