import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  constructor() {}

  generatePassword(
    length: number = 12,
    uppercase: boolean = true,
    lowercase: boolean = true,
    numbers: boolean = false,
    symbols: boolean = false
  ): string {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+{}[]';

    let chars = '';
    if (uppercase) chars += uppercaseChars;
    if (lowercase) chars += lowercaseChars;
    if (numbers) chars += numberChars;
    if (symbols) chars += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    return password;
  }
}
