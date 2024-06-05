import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerGroupsComponent } from './partner-groups.component';

describe('PartnerGroupsComponent', () => {
  let component: PartnerGroupsComponent;
  let fixture: ComponentFixture<PartnerGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
