import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandelaComponent } from './candela.component';

describe('CandelaComponent', () => {
  let component: CandelaComponent;
  let fixture: ComponentFixture<CandelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
