import { ClearRounded, ArrowBackRounded } from "@mui/icons-material";

export const displayIcon = (step: number) => {
    const styleConfig = { fontSize: '1.5em' };
    switch (step) {
        case 1:
            return <ClearRounded sx={styleConfig} />;
        case 2:
            return <ArrowBackRounded sx={styleConfig} />;
        case 3:
            return <ArrowBackRounded sx={styleConfig} />;
        case 5:
            return <ArrowBackRounded sx={styleConfig} />
        default:
            return <></>;
    }
};

export const iconStyleClass = (step: number) => {
    if (step == 5 || step == 3 || step == 2 || step == 1)
        return 'reg-step-counter-btn';
    else
        return 'reg-step-counter-btn-disabled';
}