import "./../styles/dual-buttons.css";

export function DualButton({ text, style }) {
  return (
    <div>
      <button
        onClick={function () {
          console.log("Hola mundo");
        }}
        className={style ? "light-button" : "dark-button"}
      >
        {text}
      </button>
    </div>
  );
}