export interface Booking {
  id: string;
  roomName: string;
  userName: string;
  date: string;
  status: 'Activa' | 'Cancelada';
}