const scores = []

class Game {
    static submitEntry = (entry) => {
        const record = {
            name: entry.name,
            word: entry.word,
            points: 0
        };
        const input = this.isPalindrome(record);

        if (input) {
            const entry = { 
                name: record.name,
                points: this.getScore(record)
            }
            scores.push(entry);
        }
        return this.getScores(scores);
    };
    //check if the word is a palindrome
    static isPalindrome = (record) => { 
        // remove white spaces and special characters 
        const input = record.word.toLowerCase().replace(/[-\s/\\^$*+?",.()|[\]{}]/g, '');
        // return a boolean
        return input == input.split("").reverse().join("") ? true : false 
    };

    static getScore = (record) => {
        
        let score = 0;
        // make sure spaces aren't counted as points 
        const input = record.word.replace(/\s/g,"");
        const l = input.length;
        for (let i=0; i < l; i++) {
            score +=1
        }
        return score;
    };

    static getScores = () => {

        while ( scores.length <= 5 ) {
            const sorted = scores.sort((a,b) => b.points - a.points)
            return sorted;
        } 
        if ( scores.length > 5) {
            const sorted = scores.sort((a,b) => b.points - a.points).slice(0,5)
            return sorted ;
        }
        return sorted;
    };
};

export default Game;