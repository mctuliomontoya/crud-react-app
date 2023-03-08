import './../styles/dual-buttons.css';

export function DualButton({ text, style }) {
    return (
        <div>
            <button className={style? "light-button" : "dark-button"}>{text}</button>
        </div>
    )
}