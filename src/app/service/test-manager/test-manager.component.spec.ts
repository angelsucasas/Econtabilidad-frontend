import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestManagerComponent } from './test-manager.component';

describe('TestManagerComponent', () => {
  let component: TestManagerComponent;
  let fixture: ComponentFixture<TestManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
