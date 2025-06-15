import { TwitterThemeInterface } from "../../utils/global_types/interfaces/GlobalInterfaces";

const theme: TwitterThemeInterface = {
    twitterThemeColors: {
        text: "ivory",
        bg: {
            primary: "#15202b",
            backdrop: "#00000080"
        },
        fg: {
            primary: "#1d9bf0",
            error: "red",
            warning: "orange",
            success: "green",
            info: "yellow",
            inactive: "gray",
            off: "#14171a"
        }
    }
};

export default theme;
