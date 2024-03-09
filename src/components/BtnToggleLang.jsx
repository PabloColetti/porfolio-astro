
export default function BtnToggleTheme({ languaje, text }) {
  return (
    <a href={languaje === "en" ? "/es" : "/en"} class="btn-primary">
      {languaje === "en" ? text.home.box_6.options.option_1 : text.home.box_6.options.option_2}
    </a>
  );
}
