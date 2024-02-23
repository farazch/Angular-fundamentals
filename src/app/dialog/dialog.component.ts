import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @ViewChild('content') contentTemplate!: TemplateRef<any>;

}
