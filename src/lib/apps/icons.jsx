const wizardW = "./wizard-icons/";
const windowsW = "./windows-icons/";
const icons = { Calculator:"calculator.svg", Settings:"settings.svg", Browser:"browser.svg", Notes:"notes.svg", Piano:"piano.svg", Terminal:"terminal.svg", VSCode:"vscode.svg", Paint:"paint.svg" };
const styles = ["Colloid","Deepin","Fluent","MacTahoe","WhiteSur"];
export const IconsApperance = Object.fromEntries([
  ...styles.map(style => [style, Object.fromEntries(Object.entries(icons).map(([k,v]) => [k, wizardW+v]))]),
  ["Windows", Object.fromEntries(Object.entries(icons).map(([k,v]) => [k, windowsW+v]))]
]);
