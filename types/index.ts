import { type } from "os"
import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string;
  styles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
}

export interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}