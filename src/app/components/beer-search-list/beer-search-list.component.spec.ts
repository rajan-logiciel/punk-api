import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BeerSearchListComponent } from './beer-search-list.component';
import { FormsModule } from '@angular/forms';

describe('BeerSearchListComponent', () => {
  let component: BeerSearchListComponent;
  let fixture: ComponentFixture<BeerSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [ BeerSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
