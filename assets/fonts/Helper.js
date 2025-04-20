/**
* Returns the appropriate font family based on the weight.
* @param {string} baseFont - The desired font in case you're using something
different in your later projects
* @param {string} weight - The desired font weight(e.g., 'normal', 'bold', '600')
* @returns {string} - The appropriate font family for the platform.
*/
export const setFontFamily = ( weight) => {
    switch (weight) {
    case '100':
    return `Inter_24pt-Thin`;
    case '200':
    return `Inter_24pt-ExtraLight`;
    case '300':
    return `Inter_24pt-Light`;
    case 'normal':
    case '400':
    return `Inter_24pt-Regular`;
    case '500':
    return `Inter_24pt-Medium`;
    case '600':
    return `Inter_24pt-SemiBold`;
    case 'bold':
    case '700':
    return `Inter_24pt-Bold`;
    case '800':
    return `Inter_24pt-ExtraBold`;
    case '900':
    return `Inter_24pt-Black`;
    default: // Default to regular if the weight is not recognized
    return `Inter_24pt-Regular`;
    }
    };
