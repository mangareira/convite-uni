export default class Password {
  static create(length: number = 15): string {
    const alphabeth = 'abcdefghijklmnopqrstuvwxyz';
    const alphaUpperCase = alphabeth.toUpperCase();
    const numbers = '0123456789';
    const specials = '!@#$%&*';

    const grups = [alphabeth, alphaUpperCase, numbers, specials];
    const password = [];

    for (let i = 0; i < length; i++) {
      const grup = grups[Math.floor(Math.random() * grups.length)];
      password.push(grup[Math.floor(Math.random() * grup.length)]);
    }

    return password.join('');
  }
}
