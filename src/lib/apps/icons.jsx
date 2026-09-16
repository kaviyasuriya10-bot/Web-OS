const W = "./wizard-icons/";
const icons = { Calculator:"calculator.svg", Settings:"settings.svg", Browser:"browser.svg", Notes:"notes.svg", Piano:"piano.svg", Terminal:"terminal.svg", VSCode:"vscode.svg", Paint:"paint.svg" };
export const IconsApperance = Object.fromEntries(["Colloid","Deepin","Fluent","MacTahoe","WhiteSur"].map(style => [style, Object.fromEntries(Object.entries(icons).map(([k,v]) => [k, W+v]))]));
