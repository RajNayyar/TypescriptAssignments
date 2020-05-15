import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLitElementLoaderComponent } from './demo-lit-element-loader.component';

describe('DemoLitElementLoaderComponent', () => {
  let component: DemoLitElementLoaderComponent;
  let fixture: ComponentFixture<DemoLitElementLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLitElementLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLitElementLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
