import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Anime1Page } from './anime1.page';

describe('Anime1Page', () => {
  let component: Anime1Page;
  let fixture: ComponentFixture<Anime1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Anime1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
