import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicmaincontentComponent } from './publicmaincontent.component';

describe('PublicmaincontentComponent', () => {
  let component: PublicmaincontentComponent;
  let fixture: ComponentFixture<PublicmaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicmaincontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicmaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
