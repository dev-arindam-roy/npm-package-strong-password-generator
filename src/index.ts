export class ArindamAutoPassword {

    passwordRules = (): any[] => {
        let rules = [
            { chars: "abcdefghijklmnopqrstuvwxyz", min: 3 },
            { chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", min: 2 },
            { chars: "0123456789", min: 2 },
            { chars: "!@#$&*?|%+-_./:;=()[]{}", min: 1 }
        ];
        return rules;
    }

    generatePassword = (length: number = 8): string => {

        const rules = this.passwordRules();
        let allChars = '', allMin = 0;

        rules.forEach((rule: any): void => {
            allChars += rule.chars;
            allMin += rule.min;
        });

        if (length < allMin) {
            length = allMin;
        }
        rules.push({ chars: allChars, min: length - allMin });

        let pswd = '';
        let _this = this;
        rules.forEach((rule: any): void => {
            if (rule.min > 0) {
                pswd += _this.shuffleString(rule.chars, rule.min);
            }
        });

        return this.shuffleString(pswd);
    }

    shuffleString = (str: string, maxlength: number = 0): string => {

        let shuffledString = str.split('').sort(() => {
            return 0.5 - Math.random()
        }).join('');

        if (maxlength > 0) {
            shuffledString = shuffledString.slice(0, maxlength);
        }

        return shuffledString;
    }

}