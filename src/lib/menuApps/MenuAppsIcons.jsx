const W = "./wizard-icons/";

export const MenuIconApperance = {
  Colloid: {}, Deepin: {}, Fluent: {}, MacTahoe: {}, WhiteSur: {}
};

const names = {
  Calculator:"calculator", ToDo:"todo", Settings:"settings", Gallery:"gallery", Browser:"browser", Notes:"notes", Camera:"camera", MusicPlayer:"music", YouTube:"youtube", Games:"games", FileManager:"file-manager", Paint:"paint", Terminal:"terminal", Chess:"chess", Word:"word", Weather:"weather", VSCode:"vscode", Excel:"sheets", Piano:"piano", ColorPicker:"colorpicker"
};
for (const style of Object.keys(MenuIconApperance)) {
  for (const [key,file] of Object.entries(names)) MenuIconApperance[style][key] = `${W}${file}.svg`;
}
