import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectToWebStaticComponent } from './redirect-to-web-static.component';

describe('RedirectToWebStaticComponent', () => {
  let component: RedirectToWebStaticComponent;
  let fixture: ComponentFixture<RedirectToWebStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectToWebStaticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectToWebStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
