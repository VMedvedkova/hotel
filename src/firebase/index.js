import * as fb from './init';
import firebaseCollectionTypes from './constants';

export const setDataAccounts = async () => {
    const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.ACCOUNTS);
    const isquery = await fireBaseRef.get();
    if (isquery.docs.length === 0) {
        return []
    } else {
        const query = await fireBaseRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
            return data;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
        return query[0].data
    }
}


export const setDataRooms = async () => {
    const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.ROOMS);
    const isquery = await fireBaseRef.get();
    if (isquery.docs.length === 0) {
    return []
    } else {
    const query = await fireBaseRef.get().then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
        return query[0].rooms
    }
}

export const checkNewUser = async (getNewUser, getAllUsers) => {
    const userName = getNewUser.username
    console.log('getNewUser.username', getNewUser.username)
    console.log('getAllUsers', getAllUsers)
    console.log('getAllUsers[userName]', getAllUsers[userName])
    if (getAllUsers[userName]) {
        const userPassword = getNewUser.password
        if (getAllUsers[userName].password === userPassword) {
            return true
        }
    } else return false
}

export const updateRooms = async (props) => { 
    const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.ROOMS);
    const query = await fireBaseRef.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data;
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    const rooms = query[0].rooms;
    const currentRoom = rooms.find(item => item.id === props.id);  

    if (currentRoom) 
    {
        currentRoom.guest = props.guest
        currentRoom.isCheckedIn = props.isCheckedIn
        if (props.checkInDate) currentRoom.checkInDate = props.checkInDate
        if (props.checkOutDate) currentRoom.checkOutDate = props.checkOutDate
        await fireBaseRef.doc(query[0].id).update({
            rooms: rooms
        });         
    }    
    return true
}


