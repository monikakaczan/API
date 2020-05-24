const scores = []

class Game {
    static submitEntry = (entry) => {
        const record = {
            name: entry.name,
            word: entry.word,
            points: 0
        }
        const input = this.isPalindrome(record)

        if (input) {
            const entry = { 
                name: record.name,
                points: this.getScore(record)
            }
            scores.push(entry)
        }

    }
    //check if the word is a palindrome
    static isPalindrome = (record) => { 
        // remove white spaces
        const input = record.word.toLowerCase().replace(/\s/g,"")
        // return a boolean
        return input == input.split("").reverse().join("") ? true : false 
    }

    static getScore = (record) => {
        
        let score = 0 
        const input = record.word.replace(/\s/g,"")

        for (let i=0; i < input.length; i++) {
            score +=1
        }
        return score 
    }

    static getScores = () => {

    }
}

export default Game;