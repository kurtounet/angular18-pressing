import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PagepresentationComponent} from './pagepresentation.component';

describe('PagepresentationComponent', () => {
  let component: PagepresentationComponent;
  let fixture: ComponentFixture<PagepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagepresentationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PagepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
