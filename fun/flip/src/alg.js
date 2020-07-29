// const dataSource = [{id: 1, choosen: [4, 2, 3]}, {id: 2, choosen: [6,4,5]}, {id: 3, choosen: [4,5,6]}, {id: 4, choosen: [1,2,3]}, {id: 5, choosen: [1,3,4]}, {id: 6, choosen: [1,2,4]} ]

// 被选出人的结构
class Participant {
  constructor(id, choosen) {
    this.id = id;
    this.choosen = choosen;
  }

  whoChooseMe(dataSource) {
    const youAreVisionary = []
    const rest = dataSource.filter(item => item.id !== this.id);

    rest.forEach(item => {
      const areYouBeenChoosen = item.choosen.find(id => id === this.id);

      if (areYouBeenChoosen) {
        youAreVisionary.push(item.id)
      }
    })

    return youAreVisionary;
  }

  whoIsMrsRight(dataSource) {
    const youAreMyMrsRight = [];
    const chooseMe = this.whoChooseMe(dataSource);

    this.choosen.forEach(id => {
      if (chooseMe.includes(id)) {
        youAreMyMrsRight.push(id)
      }
    })

    return youAreMyMrsRight;
  }
}

export function getMatch(id, choosen, dataSource) {
  const p = new Participant(id, choosen);
  const chooseMe = p.whoChooseMe(dataSource);
  const mrsRight = p.whoIsMrsRight(dataSource);

  return {
    chooseMe,
    mrsRight
  }
}

export function generateRowContent(id, choosen, dataSource) {
  const { chooseMe, mrsRight } = getMatch(id, choosen, dataSource);
  let content = ``;

  if (chooseMe.length === 0) {
    content = `${id}：很遗憾没有人选您，考虑一下内部消化？`
  } else {
    content = `${id}: 被 ${chooseMe.join(',')} 等 ${chooseMe.length} 人选择`;

    if (mrsRight.length > 0) {
      content += `，而且，你心动的 ${mrsRight.join(',')} 也选择了你！！！`
    }
  }

  return content;
}

export function generateAllContent(dataSource){
  const arr = dataSource.map((row) => {
    return generateRowContent(row.id, row.choosen, dataSource);
  });

  return arr.join('\n');
}

// dataSource.forEach((item) => {
//   const p = new Participant(item.id, item.choosen);
//   const chooseMe = p.whoChooseMe(dataSource);
//   const mrsRight = p.whoIsMrsRight(dataSource);

//   if(chooseMe.length === 0){
//     console.log('很遗憾没有人选您，考虑一下内部消化？')
//   } else {
//     console.log(`${p.id}: 被 ${chooseMe.join(',')} 等${chooseMe.length}人选择`)

//     if(mrsRight.length > 0){
//       console.log(`，而且，你心动的 ${mrsRight.join(',')} 也选择了你！！！`)
//     }
//   }
// })