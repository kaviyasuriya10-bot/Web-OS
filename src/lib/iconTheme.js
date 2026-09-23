export const ICON_THEMES = {
    Hufflepuff: "/themes/Hufflepuff/icons/",
    Gryffindor: "/themes/Gryffindor/icons/",
    ravenclaw: "/themes/ravenclaw/icons/"
};

export function getIconTheme() {
    return (
        localStorage.getItem("webos-icon-theme") ||
        "windows"
    );
}

export function getIconTheme() {
    return (
        localStorage.getItem("webos-icon-theme") ||
        "windows"
    );
}
export function getIcon(iconName) {

    const theme = getIconTheme();

    return (
        ICON_THEMES[theme].path +
        iconName +
        ".png"
    );
}
