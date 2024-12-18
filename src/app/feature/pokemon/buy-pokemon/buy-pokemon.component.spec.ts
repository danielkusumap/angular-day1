import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPokemonComponent } from './buy-pokemon.component';

describe('BuyPokemonComponent', () => {
  let component: BuyPokemonComponent;
  let fixture: ComponentFixture<BuyPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
