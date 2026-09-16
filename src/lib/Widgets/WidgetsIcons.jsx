const W = "./wizard-icons/";
const icons = { Calendar:"time.svg", Clock:"time.svg", StickyNote:"notes.svg", DigitalClock:"time.svg", WeatherGlass:"weather.svg", PhotoFrame:"gallery.svg", TodoToday:"todo.svg", AppShortcuts:"games.svg" };
export const WidgetsIconApperance = Object.fromEntries(["Colloid","Deepin","Fluent","MacTahoe","WhiteSur"].map(style => [style, Object.fromEntries(Object.entries(icons).map(([k,v]) => [k, W+v]))]));
