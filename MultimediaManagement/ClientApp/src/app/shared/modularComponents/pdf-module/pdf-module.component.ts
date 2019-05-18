import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-pdf-module",
  template: `
    <iframe
      [src]="sanitizer.bypassSecurityTrustResourceUrl(source)"
      style="height:100%;width:100%;overflow:auto;border: 0px;"
    >
    </iframe>
  `
})
export class PdfModuleComponent implements OnInit {
  @Input()
  source: any;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {}
}
