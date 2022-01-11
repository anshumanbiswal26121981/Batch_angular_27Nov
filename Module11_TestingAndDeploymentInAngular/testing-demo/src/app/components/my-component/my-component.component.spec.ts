import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register user must create a new user', () => {
    const expectedValue = 21;
    const actualValue = component.registerUser();
    expect(actualValue).toEqual(expectedValue);
  });

  it('delete user must remove a  user', () => {
    const expectedValue = 19;
    const actualValue = component.deleteUser();
    expect(actualValue).toEqual(expectedValue);
  })

  it('add two numbers correctly', () => {
  // create app component
    const fixture = TestBed.createComponent(MyComponentComponent);
  //create an instance of the app component
    const componnetInstance = fixture.debugElement.componentInstance;
  //expected values
    const input1 = 23;
    const input2 = 12;
    const expectedValue = 35;
  //test the code
    const actualvalue = componnetInstance.sum(input1, input2);

  //compare the actual values with the expected values
  expect(actualvalue).toEqual(expectedValue);
  expect(actualvalue).toBeLessThan(expectedValue + 1);
  expect(actualvalue).toBeGreaterThan(expectedValue - 1);
  })
});
