export class Client {
  firstName: string;
  lastName: string;
  address: string;

  constructor(args: Client) {
    Object.assign(this, args);
  }
}
