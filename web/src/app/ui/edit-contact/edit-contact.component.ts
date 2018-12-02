import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { AddresesService } from '../addreses.service';
import { Config } from '../config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { config } from 'rxjs';
import { timeout } from 'q';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  private cfg = new Config;
  public idgroup = this.cfg.idgroup;
  myFirstReactiveForm: FormGroup;
  public currentContactData: any = {};
  public contact;
  public updButton = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private addresesService:AddresesService) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.addresesService.getContactById(params.get('id'))
      .subscribe(data => {this.currentContactData = data},error =>{console.log(error)},()=>{this.initForm()});
    });
  this.initForm(); 
  setTimeout(() => this.onFillInForm(), 500);
  }
  
  onFillInForm(){
    if(this.currentContactData.fio){
      this.myFirstReactiveForm.setValue({
      fio: this.currentContactData.fio,
      address: this.currentContactData.address,
      cellphone: this.currentContactData.cellphone,
      company: this.currentContactData.company,
      position: this.currentContactData.position,
      label: (this.currentContactData.label) ? this.currentContactData.label : '',
      idgroup: this.currentContactData.idgroup
      });
    }else{
   //   this.updButton = true;
      this.updButton = true;
      this.myFirstReactiveForm.get('fio').disable();
      this.myFirstReactiveForm.get('address').disable();
      this.myFirstReactiveForm.get('cellphone').disable();
      this.myFirstReactiveForm.get('company').disable();
      this.myFirstReactiveForm.get('position').disable();
      this.myFirstReactiveForm.get('idgroup').disable();
      this.myFirstReactiveForm.get('label').disable();
      this.router.navigate(['/error404']);
    }
    


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
      label: [''],
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
          let updContact = {
            "id" : this.currentContactData._id,
            "fio" : this.contact.fio,
            "address": this.contact.address,
            "cellphone": this.contact.cellphone,
            "company": this.contact.company,
            "position": this.contact.position,
            "idgroup": this.contact.idgroup,
            "label": this.contact.label
          }
          console.log(updContact);
          
          this.addresesService.updateContact(updContact)
          .subscribe(data=>{},
            error =>{
              console.log(error)   
            },()=>{
              this.router.navigate(['/home']);
              }
            );
            
        }  

  }  

}
