# NPM - Package to Auto Generate Strong Password

### A js library to generate strong password automatically

## How to Install?

```js
npm i arindam-auto-password
```

> **or** 

```js
npm install arindam-auto-password
```

## How to use?

> In Node Js

```js
const generatePassword = require('arindam-auto-password');

console.log(generatePassword.ArindamAutoPassword.strongPassword());
console.log(generatePassword.ArindamAutoPassword.strongPassword(12));
console.log(generatePassword.ArindamAutoPassword.strongPassword(16));
console.log(generatePassword.ArindamAutoPassword.strongPassword(20));
```

> In React, Vue, Angular & others..

```js
import { ArindamAutoPassword } from './arindam-auto-password'

console.log(ArindamAutoPassword.strongPassword());
console.log(ArindamAutoPassword.strongPassword(12));
console.log(ArindamAutoPassword.strongPassword(16));
console.log(ArindamAutoPassword.strongPassword(20));
```
## Random example output password
```
U8d5wGi!
rKkf4Zon5Lh+
n3wW):d}S?!24X8Z
]/LHFf8doI=_996c)i{-
```

## Auto Strong Password

```js
export class ArindamAutoPassword {

    static passwordRules = (): any[] => {
        let rules = [
            { chars: "abcdefghijklmnopqrstuvwxyz", min: 3 },
            { chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", min: 2 },
            { chars: "0123456789", min: 2 },
            { chars: "!@#$&*?|%+-_./:;=()[]{}", min: 1 }
        ];
        return rules;
    }

    static strongPassword = (length: number = 8): string => {

        let _this = this;
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
        rules.forEach((rule: any): void => {
            if (rule.min > 0) {
                pswd += _this.shuffleString(rule.chars, rule.min);
            }
        });

        return this.shuffleString(pswd);
    }

    static shuffleString = (str: string, maxlength: number = 0): string => {

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


