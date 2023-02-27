import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { timer } from 'rxjs';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public dataForm : FormGroup;
  errorMessage='';
  message='';
  constructor(public inscriptionService:InscriptionService) { }

  ngOnInit() {

  }
  
/*onSubmit(){
    this.addData();
 
  }*/

 /* addData() {

    this.inscriptionService.createData(this.inscriptionService.dataForm.value).subscribe(_data=> {

      this.ResetForm();
    });
  }
  ResetForm() {
    this.inscriptionService.dataForm.reset();
  }*/

  onSendMessage(value)
 {
  const path = '/register';
  this.inscriptionService.createData(path,value);
    /* console.log(value);
    const path = '/register';
    this.inscriptionService.createData(path, value).
      subscribe(
        _data => {
          console.log(path)

        },
        err => {
          console.log(err);
        }
      );*/
  }
}
