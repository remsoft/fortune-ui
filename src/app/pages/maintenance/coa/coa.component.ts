import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { Coa } from '../../../class/coa';
import { CoaService } from '../../../service/coa.service';

@Component({
  selector: 'coa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.scss']
})
export class CoaComponent implements OnInit {
  radioModel  = 'all';
  listObservable : Observable<Coa[]>;
  listCoa : Coa[];
  accountType:number;
  model:Coa;
  closeResult:string;
  // accounts : Account[];

  constructor(private modalService : NgbModal, private service : CoaService ) { }

  ngOnInit() {
    this.loadListCoa('all');  
  }

  loadListCoa(accType){
    this.listObservable = this.service.getCoaAll(accType); 
    this.listObservable.subscribe((listObservable) => {
      this.listCoa = listObservable;
    })
  }

  onSelectTab(val){
    this.loadListCoa(val);
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

  onEdit(modal,account:Account){

  }
  onDelete(account:Account){
    
  }
}
