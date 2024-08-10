export interface TUser {
  sys: { id: number | null | undefined };
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
  email: string;
  location: { 
    country: string};
}
