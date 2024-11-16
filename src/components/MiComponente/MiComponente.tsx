import { FC } from "react";

interface MiComponenteProps{
    text: string;
    color: string;
    size?: number;
}

const MiComponente: FC<MiComponenteProps> = ({text, color, size}: MiComponenteProps) => {
  return (
    <div style={{color: `${color}`, fontSize: `${size || 20}px`}}>
        <p>{text}</p>
    </div>
  )
}

export default MiComponente