import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecontactComponent } from './pagecontact.component';

describe('PagecontactComponent', () => {
  let component: PagecontactComponent;
  let fixture: ComponentFixture<PagecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagecontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
