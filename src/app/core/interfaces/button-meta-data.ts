export interface ButtonMetaData {
  text?: string;
  type?: string;
  route?: string;
  disabled?: boolean;
  style?: ButtonMetaDataStyle;
  direction?: 'left' | 'right';
}

export interface ButtonMetaDataStyle {
  background: string;
}