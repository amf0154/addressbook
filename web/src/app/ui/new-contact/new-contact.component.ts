import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddresesService } from '../addreses.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  myFirstReactiveForm: FormGroup;
  constructor(private fb: FormBuilder, private _sendData:AddresesService,private router: Router) { }
  public contact;
  public idgroup = ['partners','competitors','staff'];
  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.myFirstReactiveForm = this.fb.group({
      fio: ['', [
        Validators.required,
        Validators.pattern(/[A-w]/)
       ]
      ],
      address: ['', [
        Validators.required,
        Validators.pattern(/[A-w]/)
       ]
      ],
      cellphone: ['', [
        Validators.required,
        Validators.pattern(/[0-9]/)
       ]
      ],
      company: ['', [
        Validators.required,
        Validators.pattern(/[A-w]/)
       ]
      ],
      position: ['', [
        Validators.required,
        Validators.pattern(/[A-w]/)
       ]
      ],
      idgroup: ['', [
        Validators.required,
        Validators.pattern(/[0-9]/)
       ]
      ]
     });
  }


  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  isControlInvalidOnlyNumbers(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }



  onSubmit() {
      const controls = this.myFirstReactiveForm.controls;
       /** Проверяем форму на валидность */ 
       if (this.myFirstReactiveForm.invalid) {
        /** Если форма не валидна, то помечаем все контролы как touched*/
        Object.keys(controls)
         .forEach(controlName => controls[controlName].markAsTouched());
         /** Прерываем выполнение метода*/
         return;
        }else{
          this.contact = this.myFirstReactiveForm.value;
          let newContact = {
            "fio" : this.contact.fio,
            "address": this.contact.address,
            "cellphone": this.contact.cellphone,
            "company": this.contact.company,
            "position": this.contact.position,
            "idgroup": this.contact.idgroup,
            "label": this.contact.label
          }
          this._sendData.sendContact(newContact)
          .subscribe(data=>{},
            error =>{
              console.log(error)   
            },()=>{
                console.log("it's ok!");
                this.router.navigate(['/home']);
              }
            );
        }  

  }
}
