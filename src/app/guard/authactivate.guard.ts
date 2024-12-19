import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

function isSessionStorageAvailable(): boolean {
  try {
    return typeof window !== 'undefined' && !!window.sessionStorage;
  } catch {
    return false;
  }
}
export const authActivateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 

  if (isSessionStorageAvailable()){
    if (!sessionStorage.getItem('user')) {
      router.navigate(['/login']);
      return false; 
    }
  }
  return true;
};
