import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBuyPokemonComponent } from './detail-buy-pokemon.component';

describe('DetailBuyPokemonComponent', () => {
  let component: DetailBuyPokemonComponent;
  let fixture: ComponentFixture<DetailBuyPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailBuyPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailBuyPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
