import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { Coa } from '../../../class/coa';
import { CoaService } from '../../../service/coa.service';
import { HttpResponseWS } from '../../../class/htt_response_ws';

@Component({
  selector: 'coa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.scss']
})
export class CoaComponent implements OnInit {
  radioModel  = 'all';
  listObservable : Observable<Coa[]>;
  observable : Observable<Coa>;
  listCoa : Coa[];
  accountType:number;
  model:Coa;
  modelDD:Coa;
  closeResult:string;
  httpRespObservable:Observable<HttpResponseWS>;
  coaCode:string;

  constructor(private modalService : NgbModal, private service : CoaService ) { }

  ngOnInit() {
    this.loadListCoa('all','');  
    this.loadCoaDD();
  }

  loadListCoa(accType,coaCode){
    this.listObservable = this.service.getCoaAll(accType,coaCode); 
    this.listObservable.subscribe((listObservable) => {
      this.listCoa = listObservable;
    })
  }

  loadCoaDD(){
    this.observable = this.service.getCoaDropDown(); 
    this.observable.subscribe((observable) => {
      this.modelDD = observable;
    })
  }

  onSubmit(){
    console.log(this.model);
    this.httpRespObservable = this.service.addCoa(this.model);
    this.httpRespObservable.subscribe((httpRespObservable)=>{
      console.log(httpRespObservable.status);
    })
  }
  onEdit(modal,account:Account){

  }
  onDelete(account:Account){
    
  }

  onChange(value) {
    console.log(value);
   }

  onSelectTab(val){
    this.loadListCoa(val,'');
  }

  openModal(modal) {
    this.model = new Coa();
    this.modalService.open(modal).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

 

}
