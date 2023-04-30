import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGiveawayComponent } from './add-giveaway.component';

describe('AddGiveawayComponent', () => {
  let component: AddGiveawayComponent;
  let fixture: ComponentFixture<AddGiveawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGiveawayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGiveawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
