import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretary-create-document',
  templateUrl: './secretary-create-document.component.html',
  styleUrls: ['./secretary-create-document.component.css']
})
export class SecretaryCreateDocumentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(submission: any) {
    console.log('Form submission:', submission);
    // Process the form submission here
  }
}
