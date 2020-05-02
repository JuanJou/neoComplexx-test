export class Client {
  firstName: string;
  lastName: string;
  address: string;
  id: number;


  constructor(args: Client) {
    Object.assign(this, args);
  }
}
