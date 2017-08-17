import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanHostsComponent } from './scan-hosts.component';

describe('ScanHostsComponent', () => {
  let component: ScanHostsComponent;
  let fixture: ComponentFixture<ScanHostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanHostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanHostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
