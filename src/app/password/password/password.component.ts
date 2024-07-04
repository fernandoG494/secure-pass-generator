import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../generator.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'password-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  uppercase: boolean = true;
  lowercase: boolean = true;
  numbers: boolean = false;
  symbols: boolean = false;

  passwordLength: number = 12;
  generatedPassword: string = '';

  constructor(
    private generatorService: GeneratorService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.generatedPassword = this.generatorService.generatePassword(
      this.passwordLength,
      this.uppercase,
      this.lowercase,
      this.numbers,
      this.symbols
    );
  }

  valueChanged(e: any) {
    this.passwordLength = e.target.value;
  }

  generateNewPassword() {
    this.generatedPassword = this.generatorService.generatePassword(
      this.passwordLength,
      this.uppercase,
      this.lowercase,
      this.numbers,
      this.symbols
    );
  }

  copyToClipboard() {
    this.clipboard.copy(this.generatedPassword);
  }

  handleLowercaseValue(e: any) {
    this.lowercase = e.target.checked;
  }

  handleNumbersValue(e: any) {
    this.numbers = e.target.checked;
  }

  handleUppercaseValue(e: any) {
    this.uppercase = e.target.checked;
  }

  handleSymbolsValue(e: any) {
    this.symbols = e.target.checked;
  }
}
