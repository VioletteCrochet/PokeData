import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPreviewComponent } from './pokemon-preview.component';

describe('PokemonPreviewComponent', () => {
  let component: PokemonPreviewComponent;
  let fixture: ComponentFixture<PokemonPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
