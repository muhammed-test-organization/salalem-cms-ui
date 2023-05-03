export interface ITypography {
    customVariant?:
        'large'
        | 'largeSemibold'
        | 'largeBold'
        | 'medium'
        | 'mediumSemibold'
        | 'mediumBold'
        | 'caption'
        | 'captionSemibold'
        | 'captionBold'
        | 'semibold'
        | 'bold'
        | 'small'
        | 'smallSemibold'
        | 'smallBold'
        | 'extraSmall'
        | 'extraSmallSemibold'
        | 'extraSmallBold',
    variant?: 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'caption'
        | 'button'
        | 'overline',
    className ?: string,
    fontSize ?: number,
    children ?: string,
}