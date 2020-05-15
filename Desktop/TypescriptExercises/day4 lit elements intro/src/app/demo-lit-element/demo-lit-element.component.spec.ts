import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLitElementComponent } from './demo-lit-element.component';

describe('DemoLitElementComponent', () => {
  let component: DemoLitElementComponent;
  let fixture: ComponentFixture<DemoLitElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLitElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLitElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
