export const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const baseStatFormat = (stat) => {
    if(stat >= 10 && stat < 100){
        return `0${stat}`
    }else if(stat < 10){
        return `00${stat}`
    }else{
        return stat
    }
}

export const upperCaseFirstLetter = (word) => {
    const firstLetter = word.substring(0, 1).toUpperCase();
    const secondPart = word.substring(1, word.length);
    
    return firstLetter + secondPart;
}

export const divineByTen = (number) => {
    return number / 10;
}

export const selectPokemonTypeColor = (type) => {
    switch(type.toLowerCase()){
        case "bug":
            return "#A7B723";
            break;
        case "dark":
            return "#75574C";
            break;
        case "dragon":
            return "#7037FF";
            break;
        case "electric":
            return "#F9CF30";
            break;
        case "fairy":
            return "#E69EAC";
            break;
        case "fighting":
            return "#C12239";
            break;
        case "fire":
            return "#F57D31";
            break;
        case "flying":
            return "#A891EC";
            break;
        case "ghost":
            return "#70559B";
            break;
        case "normal":
            return "#AAA67F";
            break;
        case "grass":
            return "#74CB48";
            break;
        case "ground":
            return "#DEC16B";
            break;
        case "ice":
            return "#9AD6DF";
            break;
        case "poison":
            return "#A43E9E";
            break;
        case "psychic":
            return "#FB5584";
            break;
        case "rock":
            return "#B69E31";
            break;
        case "steel":
            return "#B7B9D0";
            break;
        case "water":
            return "#6493EB";
            break;
    }
}