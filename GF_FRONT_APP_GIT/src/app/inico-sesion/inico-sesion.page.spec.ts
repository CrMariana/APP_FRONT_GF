import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicoSesionPage } from './inico-sesion.page';

describe('InicoSesionPage', () => {
  let component: InicoSesionPage;
  let fixture: ComponentFixture<InicoSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicoSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
