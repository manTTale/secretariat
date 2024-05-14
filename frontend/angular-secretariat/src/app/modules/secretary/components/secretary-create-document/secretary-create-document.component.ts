import {Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-secretary-create-document',
  templateUrl: './secretary-create-document.component.html',
  styleUrls: ['./secretary-create-document.component.css']
})
export class SecretaryCreateDocumentComponent {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(): void {
    console.log("before const");
    const formioElement: any = this.elementRef.nativeElement.querySelector('#formio');
    console.log("after const");
    Formio.createForm(formioElement, 'https://gjvkdfqdtiuivmd.form.io/firstformtitle').then(form => {
      console.log('Form.io form loaded:', form);
    }).catch((error:any) => {
      console.error('Error loading Form.io form:', error);
    });
  }

}
