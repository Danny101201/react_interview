const SwitchBase = (month) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      console.log('spring')
      break;
    case 4:
    case 5:
    case 6:
      console.log('summer')
      break;
    case 7:
    case 8:
    case 9:
      console.log('autumn')
      break;
    case 10:
    case 11:
    case 12:
      console.log('winter')
      break;
    default:
      console.log('month only have twelve')
  }
}
const setLayoutState = (state, liCount) => {
  console.log({ state, liCount })
}

const SwitchBaseCondition = (liCount) => {
  switch (true) {
    case liCount == 0:
      setLayoutState('start', liCount);
      break;
    case liCount <= 5 && liCount > 0:
      setLayoutState('upload1Row', liCount);
      break;
    case liCount <= 10 && liCount > 5:
      setLayoutState('upload2Rows', liCount);
      break;
    case liCount > 10:
      setLayoutState('upload3Rows', liCount);
      break;
  }
}

