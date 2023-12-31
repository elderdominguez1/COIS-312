/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* istanbul ignore file */
/**
 * This file is generated by the openapi-ts-generator
 * #form-group-factory.ts.hbs
 * For issues or feature request, visit the repo: https://github.com/ikemtz/openapi-ts-generator
 * Do not edit.
 */
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms'; //NOSONAR
import { IStudentClassForm } from './student-class.form';
import { IClassForm } from './class.form';
import { ClassFormGroupFac } from './class.form-group-fac';
import { IStudentForm } from './student.form';
import { StudentFormGroupFac } from './student.form-group-fac';

export function StudentClassFormGroupFac(): FormGroup<IStudentClassForm> {
  return new FormGroup<IStudentClassForm>({
    id: new FormControl<number | null | undefined>(null),
    studentId: new FormControl<number | null | undefined>(null),
    classId: new FormControl<number | null | undefined>(null),
    grade: new FormControl<string | null | undefined>(null),
    class: new FormGroup<IClassForm>(ClassFormGroupFac().controls),
    student: new FormGroup<IStudentForm>(StudentFormGroupFac().controls),
  });
}
