import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyIntubationComponent } from './modify-intubation.component';

describe('ModifyIntubationComponent', () => {
  let component: ModifyIntubationComponent;
  let fixture: ComponentFixture<ModifyIntubationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyIntubationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyIntubationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
