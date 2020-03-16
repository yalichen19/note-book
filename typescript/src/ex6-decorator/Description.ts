export function classDescription(description: string) {
  return function(target: Function) {
    target.prototype.$classDescription = description
  }
}

export function propDescription (description: string) {
  return function(target: any, propsName: string) {
    if (!target.$propDescriptions) {
      target.$propDescriptions = []
    }
    target.$propDescriptions.push({
      propsName,
      description
    })
  }
}

export function printObj(obj: any) {
  if (obj.$classDescription) {
    console.log(obj.$classDescription)
  } else {
    console.log(obj.__proto__.constructor.name)
  }
  if (!obj.$propDescriptions) {
    obj.$propDescriptions = []
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const result = obj.$propDescriptions.find(ele=> ele.propsName === key)
      if (result) {
        console.log(`${result.description}: ${obj[key]}`)
      } else {
        console.log(`${key}: ${obj[key]}`)
      }
    }
  }
}