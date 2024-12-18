import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuyPokemonComponent } from './edit-buy-pokemon.component';

describe('EditBuyPokemonComponent', () => {
  let component: EditBuyPokemonComponent;
  let fixture: ComponentFixture<EditBuyPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBuyPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBuyPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
