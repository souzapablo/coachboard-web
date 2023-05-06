import { AbstractControl } from '@angular/forms';

const teams: string[] = ['Brighton'];

export function teamInListValidator(control: AbstractControl) {
  const team = control.value as string;
  if (!teams.includes(team)) {
    return { teamInList: true };
  } else return null;
}
