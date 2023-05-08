import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGiveawayComponent } from './edit-giveaway.component';

describe('EditGiveawayComponent', () => {
  let component: EditGiveawayComponent;
  let fixture: ComponentFixture<EditGiveawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGiveawayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGiveawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
