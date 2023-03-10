import "./../styles/dual-buttons.css";

export function DualButton({ text, style }) {
  return (
    <div>
      <button
        type="cancel"
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
