export default interface Guest {
  id: string;
  name: string;
  email: string;
  confirmed: boolean;
  hasCompanions: boolean;
  qtdCompanion: number;
}
