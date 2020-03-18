import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsterComponent } from './webster.component';

describe('WebsterComponent', () => {
  let component: WebsterComponent;
  let fixture: ComponentFixture<WebsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
