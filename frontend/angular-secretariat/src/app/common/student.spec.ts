import { Student } from './student';

describe('Student', () => {
  it('should create an instance', () => {
    expect(new Student(1, "lastName", "firstName", "specialization",
      "groupNumber", "matriculationNumber")).toBeTruthy();
  });
});
