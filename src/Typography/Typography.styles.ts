import {makeStyles} from "../makeStyles";
import {variantStyles} from "./typographyMapping";

const TypographyStyles = (customVariant: "large" | "largeSemibold" | "largeBold" | "medium" | "mediumSemibold" | "mediumBold" | "caption" | "captionSemibold" | "captionBold" | "semibold" | "bold" | "small" | "smallSemibold" | "smallBold" | "extraSmall" | "extraSmallSemibold" | "extraSmallBold" | undefined, _variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | undefined, fontSize?: number) => makeStyles(() => ({
    root: {
        lineHeight: '140%',
        fontSize: () => {
            let getFontSize = '14px';
            if (fontSize) {
                getFontSize = `${fontSize}px`;
            } else if (customVariant) {
                getFontSize =variantStyles[customVariant] && variantStyles[customVariant].fontSize;
            }
            return getFontSize;
        },
        fontWeight: customVariant && variantStyles[customVariant] && variantStyles[customVariant].fontWeight,
    },
}));

export default TypographyStyles;