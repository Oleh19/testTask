export interface IGame {
  id: string;
  title: string;
  provider: string;
  collections: {
    popularity: number;
    all: number;
  };
  real: string;
  demo: string;
}
