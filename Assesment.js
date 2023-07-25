function UniqueUsers(list1,list2){
    const set1=new Set(list1);
    const set2=new Set(list2);

    //Get a unique set of users from list1 not in list2

    const uniqueList1=new Set([...set1].filter(user=>!set2.has(user)));

    //Get a unique set of users from list2 not in list1

    const uniqueList2=new Set([...set2].filter(user=>!set1.has(user)));

    //Get common users from both  list1 and list2

    const commonUsers=new Set([...set1].filter(user=>set2.has(user)));

    return {
        uniqueUsersList1:Array.from(uniqueList1),
        uniqueUsersList2:Array.from(uniqueList2),
        commonUsers:Array.from(commonUsers)
    };
}

const List1=['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan'];
const List2=[ 'Adwait','Laxman','Amit', 'Adnan','Nitin','Gaurav'];

const result=UniqueUsers(List1,List2);
console.log(result.uniqueUsersList1);
console.log(result.uniqueUsersList2);
console.log(result.commonUsers);