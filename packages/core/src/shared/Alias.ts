export default class Alias {
  static format(value: string): string {
    return value.replace(/ /g, '-').toLowerCase();
  }
}
