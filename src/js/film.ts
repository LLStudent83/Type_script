import IContent from './interfaceContent';

export default class Movie implements IContent {
  constructor(
   readonly year: number,
   readonly country: string,
   readonly tagline: string,
   readonly genre: string,
   readonly time: number | string,
  ) {}

}
