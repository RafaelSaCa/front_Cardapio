import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSorvetesComponent } from './card-sorvetes.component';

describe('CardSorvetesComponent', () => {
  let component: CardSorvetesComponent;
  let fixture: ComponentFixture<CardSorvetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSorvetesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSorvetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
