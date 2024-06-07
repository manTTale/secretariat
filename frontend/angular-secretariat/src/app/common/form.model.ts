import {FormioComponent} from "angular-formio";

export class Form {
  constructor(
    public _id?: any,
    public components: FormioComponent[] = [],
    public data?: any
  ) {}
}
