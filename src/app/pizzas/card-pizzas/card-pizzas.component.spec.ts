import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPizzasComponent } from './card-pizzas.component';

describe('CardPizzasComponent', () => {
  let component: CardPizzasComponent;
  let fixture: ComponentFixture<CardPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPizzasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
