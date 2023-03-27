type Member = {
  id: string,
  name: string,
}

type Team = {
  name: string,
  members: Member[],
  currentMember: Member
}

function mustFind<T>(arr: T[], predicate: (t: T) => boolean) {
  const item = arr.find(predicate)
  if (item) return item
  throw new Error('item not find')
}


function problemGetMemberById(memberId: string): Team {
  const Members: Member[] = [
    { id: '1', name: 'Danny' },
    { id: '2', name: 'Alex' },
    { id: '3', name: 'Blob' },
  ]
  return {
    name: 'My_team',
    members: Members,
    currentMember: Members.find(item => item.id === memberId)
  }
}
function getMemberById(memberId: string): Team {
  const Members: Member[] = [
    { id: '1', name: 'Danny' },
    { id: '2', name: 'Alex' },
    { id: '3', name: 'Blob' },
  ]
  const currentMember = mustFind(Members, (item) => item.id === memberId)
  return {
    name: 'My_team',
    members: Members,
    currentMember
  }
}

function getMemberById2(memberId: string): Team {
  const Members: Member[] = [
    { id: '1', name: 'Danny' },
    { id: '2', name: 'Alex' },
    { id: '3', name: 'Blob' },
  ]
  return {
    name: 'My_team',
    members: Members,
    get currentMember() {
      const member = Members.find(i => i.id === memberId)
      if (member) return member
      throw new Error('Member not find')
    }
  }
}
