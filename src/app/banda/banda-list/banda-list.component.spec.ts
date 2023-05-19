/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BandaListComponent } from './banda-list.component';

describe('BandaListComponent', () => {
  let component: BandaListComponent;
  let fixture: ComponentFixture<BandaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
