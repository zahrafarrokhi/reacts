// Whatever was not a number ([^\d]), replace it with an empty string.
export const preventLettersTyping = (x) => x.replace(/[^\d]/g, '')



export const persianToEnglishDigits = (digit) => String(digit)
  .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
  .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));


  export const DOCTORSDEGREES = {
    general: 'عمومی',
    specialist: 'تخصص',
    expert: 'فوق تخصص',
    fellowship: 'فلوشیپ',
  };