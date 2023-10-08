/* eslint-disable @typescript-eslint/no-unused-vars */
/* istanbul ignore file */
/**
 * This file is generated by the openapi-ts-generator
 * #form.ts.hbs
 * For issues or feature request, visit the repo: https://github.com/ikemtz/openapi-ts-generator
 * Do not edit.
 */
import { FormControl, FormArray, FormGroup } from '@angular/forms'; //NOSONAR
import { IClassForm } from './class.form';
import { IStudentForm } from './student.form';

export interface IStudentClassForm {
    id: FormControl<number | null | undefined>;
    studentId: FormControl<number | null | undefined>;
    classId: FormControl<number | null | undefined>;
    grade: FormControl<string | null | undefined>;
    class: FormGroup<IClassForm>;
    student: FormGroup<IStudentForm>;
}