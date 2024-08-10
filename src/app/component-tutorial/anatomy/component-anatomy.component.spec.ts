import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAnatomyComponent } from './component-anatomy.component';

describe('ComponentAnatomyComponent', () => {
  let component: ComponentAnatomyComponent;
  let fixture: ComponentFixture<ComponentAnatomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAnatomyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAnatomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
