import { CanDeactivateFn } from '@angular/router';

export const authdeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
