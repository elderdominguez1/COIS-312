/* istanbul ignore file */
/**
 * This file is generated by the openapi-ts-generator
 * #test-object-factory.ts.hbs
 * For issues or feature request, visit the repo: https://github.com/ikemtz/openapi-ts-generator
 * Do not edit.
 */

import { AcademicProgramProperties } from './academic-program.properties';

export function createTestAcademicProgram() {
    return { 
      [AcademicProgramProperties.ID]: 0,
      [AcademicProgramProperties.NAME]: 'NAME', 
      [AcademicProgramProperties.COURSES]: [],
      [AcademicProgramProperties.STUDENTS]: [],
    };
}
