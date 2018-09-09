import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuststatementsComponent } from './custstatements.component';

describe('CuststatementsComponent', () => {
  let component: CuststatementsComponent;
  let fixture: ComponentFixture<CuststatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuststatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuststatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
