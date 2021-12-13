import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradeFilter',
  pure: false
})
export class GradeFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const grade1 = args[0];
    const grade2 = args[1];

    const result = value.filter(
      (student: any) => {
        return student.grade === grade1 || student.grade == grade2;
      }
    )

    return result;
  }

}
