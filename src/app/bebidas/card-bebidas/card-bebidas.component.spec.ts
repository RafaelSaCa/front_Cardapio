import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBebidasComponent } from './card-bebidas.component';

describe('CardBebidasComponent', () => {
  let component: CardBebidasComponent;
  let fixture: ComponentFixture<CardBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBebidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
