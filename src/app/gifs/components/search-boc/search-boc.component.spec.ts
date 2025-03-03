import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBocComponent } from './search-boc.component';

describe('SearchBocComponent', () => {
  let component: SearchBocComponent;
  let fixture: ComponentFixture<SearchBocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
