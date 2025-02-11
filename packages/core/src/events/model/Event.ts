import Guest from './Guest';

export default interface Event {
  id: string;
  alias: string;
  password: string;
  name: string;
  date: Date;
  local: string;
  description: string;
  image: string;
  imageBackground: string;
  expectedAudience: number;
  guests: Guest[];
}
