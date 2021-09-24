export default function lookup(dataObject, keyName){
    console.log('lookup', dataObject, keyName)

    if (keyName !== '.' && keyName.indexOf('.') !== -1) {
        let tmp = dataObject
        let names = keyName.split('.')
        for (let i = 0; i < names.length; i++) {
            let item = names[i]
            tmp = tmp[item]
        }
        console.log('tmp', tmp)
        return tmp
    }

    console.log('dataObject[keyName]',dataObject[keyName])
    return dataObject[keyName]
}