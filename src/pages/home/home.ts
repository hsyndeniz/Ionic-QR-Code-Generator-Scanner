import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private scanned_code = null;
	private created_code = null;
    private qr_data = {
    "amount": "",
    "account": "",
    "currency": ""
  }

  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner) { }


  /** 
  * Method to issue barcode
  */
  createCode() {
	this.qr_data.account = 'hsynterkr';
	this.qr_data.currency = 'USD';
	this.qr_data.amount = '25'

	this.created_code = JSON.stringify(this.qr_data);
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scanned_code = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
