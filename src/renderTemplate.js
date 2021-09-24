import lookup from "./lookup";
import parseArray from "./parseArray";

export default function renderTemplate(tokens, data) {
    let result = ''

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]

        let type = token[0]
        let value = token[1]

        switch (type) {
            case 'text':
                result += value
                break
            case 'name':
                result += lookup(data, value)
                break
            case '#':
                // let scopeToken = token[2] // Array() <-- #, arr, Array()
                result += parseArray(token, data)
                break
        }
    }

    return result
}