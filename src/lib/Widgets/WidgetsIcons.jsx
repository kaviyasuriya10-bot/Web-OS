const wizardW = "./wizard-icons/";
const windowsW = "./windows-icons/";
const icons = { Calendar:"time.svg", Clock:"time.svg", StickyNote:"notes.svg", DigitalClock:"time.svg", WeatherGlass:"weather.svg", PhotoFrame:"gallery.svg", TodoToday:"todo.svg", AppShortcuts:"games.svg" };
const styles = ["Colloid","Deepin","Fluent","MacTahoe","WhiteSur"];
export const WidgetsIconApperance = Object.fromEntries([
  ...styles.map(style => [style, Object.fromEntries(Object.entries(icons).map(([k,v]) => [k, wizardW+v]))]),
  ["Windows", Object.fromEntries(Object.entries(icons).map(([k,v]) => [k, windowsW+v]))]
]);
