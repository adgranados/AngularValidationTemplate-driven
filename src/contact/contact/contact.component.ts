import { Component, OnInit, Directive } from "@angular/core";
import { Time } from "@angular/common";
import { AbstractControl, ValidatorFn, FormControl } from "@angular/forms";
import { NG_VALIDATORS, Validator } from '@angular/forms';

class DataModel {
  public page: string;
  public email: string;
  public mensaje: string;
  public hora: Time;
  public xphr: string;
  public constructor() {
    this.page = null;
    this.email = null;
    this.mensaje = null;
    this.hora = null;
    this.xphr = null
  }
}

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  public data: DataModel;

  constructor() {}
  log(campo) {
    console.log(campo);
  }
  guardar() {
    alert(JSON.stringify(this.data));
  }
  ngOnInit() {
    this.data = new DataModel();
  }
}
