import React from 'react';
import Participant from './alg';
import Em from './Em';

const numberMap = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五'
}

export function getMatch(id, choosen, dataSource) {
  const p = new Participant(id, choosen);
  const chooseMe = p.whoChooseMe(dataSource);
  const mrsRight = p.whoIsMrsRight(dataSource);
  const chooseMeAndPriority = p.whoChooseMeAndPriority(dataSource)

  return {
    chooseMe,
    mrsRight,
    chooseMeAndPriority
  }
}

export function generatePriorityContent(id ,choosen, dataSource, hasEm) {
  const prefixWords = `对你心动的ta，把你的优先级排在了：`;
  const { chooseMeAndPriority } = getMatch(id, choosen, dataSource);
  const priorityWords = chooseMeAndPriority.map((cur) => {
    return `${cur.id}：第${numberMap[cur.priority]}`
  }).join('，');

  if(hasEm){
  return <span>{prefixWords}<Em>{priorityWords}</Em></span>
  }

  return prefixWords + priorityWords
}

export function generateRowContent(id, choosen, dataSource) {
  const { chooseMe, mrsRight } = getMatch(id, choosen, dataSource);
  let content = `${id}：选择了 ${choosen.join('，')}。`;

  if (chooseMe.length === 0) {
    content += `很遗憾没有人选您，考虑一下内部消化？`
  } else {
    content += `被 ${chooseMe.join(',')} 等 ${chooseMe.length} 人选择`;

    if (mrsRight.length > 0) {
      content += `。而且，你心动的 ${mrsRight.join(',')} 也选择了你！！！`
    }

    content+= generatePriorityContent(id, choosen, dataSource);
  }

  return content;
}

export function generateAllContent(dataSource) {
  const arr = dataSource.map((row) => {
    return generateRowContent(row.id, row.choosen, dataSource);
  });

  return arr.join('\n');
}