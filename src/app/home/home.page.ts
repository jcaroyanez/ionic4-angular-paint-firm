import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { 
    'maxWidth':1,
    'minWidth': 1,
    'canvasWidth': 350,
    'canvasHeight': 300
  };

  drawStart(){
    console.log('drawStart');
  }

  drawComplete(){
    console.log(this.signaturePad.toDataURL());
  }

  clear(){
    this.signaturePad.clear();
  }
}
