import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterPolacionPage } from './inter-polacion.page';

describe('InterPolacionPage', () => {
  let component: InterPolacionPage;
  let fixture: ComponentFixture<InterPolacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InterPolacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
