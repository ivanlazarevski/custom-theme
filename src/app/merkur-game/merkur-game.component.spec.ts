import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerkurGameComponent } from './merkur-game.component';

describe('MerkurGameComponent', () => {
  let component: MerkurGameComponent;
  let fixture: ComponentFixture<MerkurGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerkurGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MerkurGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
