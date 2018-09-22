import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
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
  // accounts : Account[];

  constructor(private modalService : NgbModal, private service : CoaService ) { }

  ngOnInit() {
    this.loadListCoa();  
  }

  loadListCoa(){
    this.listObservable = this.service.getCoaAll(); 
    this.listObservable.subscribe((listObservable) => {
      this.listCoa = listObservable;
    })
  }

  onSelectTab(val){
    console.log(val);
  }

  openModal(modal) {
  }

  onEdit(modal,account:Account){

  }
  onDelete(account:Account){
    
  }
}
