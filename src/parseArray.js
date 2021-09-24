/**
 * scopeToken <---> scopeArrayData of one
 * @param token
 * @param data
 * @returns {string}
 */
import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

export default function parseArray(token, data) {
    let result = ''
    let keyName = token[1]
    let scopeArrayData = lookup(data, keyName)

    for (let i = 0; i < scopeArrayData.length; i++) {
        let itemData = scopeArrayData[i]
        let wrappedScopeData = {
            ...itemData,
            '.': itemData
        }
        let scopeToken = token[2]
        result += renderTemplate(scopeToken, wrappedScopeData)
    }

    return result
}