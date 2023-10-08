export interface MessengerService {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isAlive(): boolean;
  send(msg: string): Promise<void>;
}
