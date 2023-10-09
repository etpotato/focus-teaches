export interface MessengerService {
  send(msg: string): Promise<void>;
}
