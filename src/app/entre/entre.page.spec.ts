import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrePage } from './entre.page';

describe('EntrePage', () => {
  let component: EntrePage;
  let fixture: ComponentFixture<EntrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
