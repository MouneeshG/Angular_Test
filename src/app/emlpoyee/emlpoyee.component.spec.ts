import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmlpoyeeComponent } from './emlpoyee.component';

describe('EmlpoyeeComponent', () => {
  let component: EmlpoyeeComponent;
  let fixture: ComponentFixture<EmlpoyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmlpoyeeComponent]
    });
    fixture = TestBed.createComponent(EmlpoyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
