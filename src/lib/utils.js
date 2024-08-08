export function getImageUrl(person, size = 's') {
  // console.log('test1');
  // console.log(person.imageId);

  // console.log(`https://i.imgur.com/${person.imageId}.jpg`);
  // return 'https://i.imgur.com/' + ${$person.imageId} + {size} + '.jpg';
  return `https://i.imgur.com/${person.imageId}.jpg`;
}

// 빈 배열을 totalPage 수 만큼 만들고, map 을 통해 데이터를 채운다.
export function sliceArrayByLimit(totalPage, limit) {
  const totalPageArray = Array(totalPage)
    .fill()
    .map((_, i) => i);
  return Array(Math.ceil(totalPage / limit))
    .fill()
    .map(() => totalPageArray.splice(0, limit));
}
