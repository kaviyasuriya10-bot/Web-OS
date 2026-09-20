const wizardW = "./wizard-icons/";
const windowsW = "./windows-icons/";

export const MenuIconApperance = {
  Colloid: {}, Deepin: {}, Fluent: {}, MacTahoe: {}, WhiteSur: {}, Windows: {}
};

const names = {
  Calculator:"calculator", ToDo:"todo", Settings:"settings", Gallery:"gallery", Browser:"browser", Notes:"notes", Camera:"camera", MusicPlayer:"music", YouTube:"youtube", Games:"games", FileManager:"file-manager", Paint:"paint", Terminal:"terminal", Chess:"chess", Word:"word", Weather:"weather", VSCode:"vscode", Excel:"sheets", Piano:"piano", ColorPicker:"colorpicker"
};

for (const style of ["Colloid", "Deepin", "Fluent", "MacTahoe", "WhiteSur"]) {
  for (const [key,file] of Object.entries(names)) MenuIconApperance[style][key] = `${wizardW}${file}.svg`;
}
for (const [key,file] of Object.entries(names)) MenuIconApperance.Windows[key] = `${windowsW}${file}.svg`;
