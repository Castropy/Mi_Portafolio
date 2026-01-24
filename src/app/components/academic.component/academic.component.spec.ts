import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as academicComponent from './academic.component';
import { beforeEach, describe, it,} from 'node:test';

describe('Academic', () => {
  let component: academicComponent.Academic;
  let fixture: ComponentFixture<academicComponent.Academic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [academicComponent.Academic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(academicComponent.Academic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
