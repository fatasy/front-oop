import { Expose, Transform } from "class-transformer";

export class User {
  id: number;

  @Expose({ name: "last_name" })
  @Transform(({ value }) => value.toUpperCase(), { toClassOnly: true })
  lastName: string;

  @Expose({ name: "first_name" })
  firstName: string;

  @Expose({ name: "email" })
  email: string;

  constructor(id: number, lastName: string, firstName: string, email: string) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
  }
}
