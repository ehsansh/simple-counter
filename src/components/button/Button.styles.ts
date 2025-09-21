const buttonBase = 'px-4 py-2 rounded font-semibold transition-colors focus:outline-none';

const buttonColors = {
    primary: 'bg-[#006FEE] text-white hover:bg-[#005EDB] active:bg-[#004BB8]',
    danger: 'bg-[#f31260] text-white hover:bg-[#d10f54] active:bg-[#b00c48]',
    secondary: 'bg-[#7828c8] text-white hover:bg-[#651fb0] active:bg-[#501a8f]',
};

const buttonDisabled = 'opacity-50 cursor-not-allowed hover:bg-none active:bg-none';

export function getButtonClasses(color: keyof typeof buttonColors, isDisabled: boolean) {
    return [buttonBase, buttonColors[color], isDisabled ? buttonDisabled : ''].join(' ');
}
