import {input} from "./1-input"
import * as os from "os";

function a() {
    const answer = input.split(os.EOL).reduce((previousValue, currentValue) => {
        let numberCandidate = currentValue.replace(/\D/g, '')
        let first = numberCandidate.at(0)
        const last = numberCandidate.at(-1)

        return previousValue + (+`${first}${last}`)
    }, 0)

    console.log(`a: ${answer}`)
}

function b() {
    const answer = input
        .replace(/one/g, 'one1one')
        .replace(/two/g, 'two2two')
        .replace(/three/g, 'three3three')
        .replace(/four/g, 'four4four')
        .replace(/five/g, 'five5five')
        .replace(/six/g, 'six6six')
        .replace(/seven/g, 'seven7seven')
        .replace(/eight/g, 'eight8eight')
        .replace(/nine/g, 'nine9nine')
        .split('\n')
        .reduce((previousValue, currentValue) => {

        let numberCandidate = currentValue.replace(/\D/g, '')
        let first = numberCandidate.at(0)
        const last = numberCandidate.at(-1)

        return previousValue + (+`${first}${last}`)
    }, 0)

    console.log(`b: ${answer}`)
}

a()
b()

