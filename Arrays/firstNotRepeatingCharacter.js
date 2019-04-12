// given a string, find & return first non-repeating character
function firstNotRepeatingCharacter(s) {
    let sArray = s.split('');//split string into array of characters
    let characters = [...new Set(sArray)];//creates array of all characters w/o repeats
    let uniqueCharacters = []

    characters.forEach ((character) => {
        let regex = new RegExp(character, 'gi');

        //pushes unique characters into array
        if(s.match(regex) && s.match(regex).length === 1) {
            uniqueCharacters.push(character)
        }
    })

    if (uniqueCharacters.length > 0) {
        return uniqueCharacters[0]//returns 1st unique character
    } else {
        return '_'
    }
}
