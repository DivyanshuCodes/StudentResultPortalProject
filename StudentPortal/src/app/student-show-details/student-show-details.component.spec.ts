import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentShowDetailsComponent } from './student-show-details.component';

describe('StudentShowDetailsComponent', () => {
  let component: StudentShowDetailsComponent;
  let fixture: ComponentFixture<StudentShowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentShowDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
