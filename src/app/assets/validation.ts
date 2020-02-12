export const myValidation = {
    nameValidation : {
        patternRegex : "[a-zA-Z ]*",
        maxLength : 25,
        minLength : 3
    },

    salaryValidation : {
        patternRegex : "[0-9]*",
        maxLength : 8,
        minLength : 4
    },

    ageValidation : {
        patternRegex : "[0-9]*",
        maxLength : 3,
        minLength : 1
    }
}