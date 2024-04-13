# NPM - Package to Auto Generate Strong Password

### A js library to generate strong password automatically

## How to Install?

```js
npm i arindam-auto-password

or 

npm install arindam-auto-password
```

## How to use?

> In Node Js

```js
const helpers = require('arindam-awesome-helpers');

console.log(helpers.AwesomeHelpers.randomCode1());

console.log(helpers.AwesomeHelpers.randomStr1());

console.log(helpers.AwesomeHelpers.randomStr1(30));

console.log(helpers.AwesomeHelpers.randomToken2());

console.log(helpers.AwesomeHelpers.getFormat2('2024-06-12'));

console.log(helpers.AwesomeHelpers.isDateValid('03/12/2022'));
```

> In React, Vue, Angular & others..

```js
import { AwesomeHelpers } from './arindam-awesome-helpers'

console.log(AwesomeHelpers.randomCode1());

console.log(AwesomeHelpers.randomStr1());

console.log(AwesomeHelpers.randomStr1(30));

console.log(AwesomeHelpers.randomToken2());

console.log(AwesomeHelpers.getFormat2('2024-06-12'));

console.log(AwesomeHelpers.isDateValid('03/12/2022'));
```

## Awesome Functions

```js
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
```

## Thanks!!


