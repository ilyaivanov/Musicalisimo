export interface MNode {
  id: string;
  type: string;
  child: MNode[];
  isSelected: boolean;
  isSpecial: boolean;
  isLoading: boolean;
  isPlaying: boolean;
  isHidden: boolean;
  text: boolean;
}

export interface AppState {
  search: any;
  favorites: any;
}

export type Path = (number | string)[];

export type GetState = () => AppState;