
export default function BtnToggleTheme({ languaje, text }) {
  return (
    <>
      <a 
        href={languaje === "en" ? "/es" : "/en"}
        class="bg-purple-500 text-white p-2 rounded-md text-center
        border border-transparent
        hover:bg-purple-600 hover:border hover:border-white
        min-w-[80px]"
      >
        {languaje === "en" ? text.home.box_6.options.option_1 : text.home.box_6.options.option_2}
      </a>
    </>
  );
}
