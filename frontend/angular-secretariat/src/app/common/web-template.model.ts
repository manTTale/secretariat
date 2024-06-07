import {Form} from "./form.model";

export class WebTemplateModel {
  constructor(public id?: any,
              public code?: string,
              public name?: string,
              public description?: string,
              public form?: Form
  ) {
  }
}
