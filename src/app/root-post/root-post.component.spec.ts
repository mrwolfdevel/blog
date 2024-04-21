import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPostComponent } from './root-post.component';

describe('RootPostComponent', () => {
  let component: RootPostComponent;
  let fixture: ComponentFixture<RootPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootPostComponent]
    });
    fixture = TestBed.createComponent(RootPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
