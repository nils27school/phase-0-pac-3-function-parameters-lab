function introduction(firstName) {
return(`Hi, my name is ${firstName}.`);
}

function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguageOptional(Gracie, language) ;
