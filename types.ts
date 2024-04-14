export type CharacterData = {
  id:number;
  name: string;
  image: string;
  gender:string;
  status:string;
  species:string;
  origin:{name:string};
  location:{name:string};
  episode:string[];
}

export type InfoCharacter = {
  next: string;
  prev: string;
}
