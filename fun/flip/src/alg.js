// const dataSource = [{id: 1, choosen: [4, 2, 3]}, {id: 2, choosen: [6,4,5]}, {id: 3, choosen: [4,5,6]}, {id: 4, choosen: [1,2,3]}, {id: 5, choosen: [1,3,4]}, {id: 6, choosen: [1,2,4]} ]

// 被选出人的结构
export default class Participant {
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

  whoChooseMeAndPriority(dataSource) {
    const youAreVisionary = []
    const rest = dataSource.filter(item => item.id !== this.id);

    rest.forEach(item => {
      const choosenIndex = item.choosen.findIndex(id => id === this.id);

      if (choosenIndex > -1) {
        youAreVisionary.push({
          id: item.id,
          priority: choosenIndex + 1
        })
      }
    })

    return youAreVisionary;
  }
}