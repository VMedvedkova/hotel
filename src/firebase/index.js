import * as fb from './init';
import firebaseCollectionTypes from './constants';

// export const getData = async () => {
//   const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.ACCOUNTS);
//   const query = await fireBaseRef.get();
//   if (query.docs.length === 0) {
//       await fireBaseRef.add({
//           "user1": {
//             "password": "pass1",
//             "image": "https://firebasestorage.googleapis.com/v0/b/hotel-da9e2.appspot.com/o/avatar-373-456325-512.png?alt=media&token=bf97a9bc-d3ff-44d8-8149-7516efad5039"
//           },
//           "user2": {
//             "password": "pass2",
//             "image": "https://firebasestorage.googleapis.com/v0/b/hotel-da9e2.appspot.com/o/avatar-370-456322-512.webp?alt=media&token=21617e25-bdab-4468-b50b-13c1d77fbbd3"
//           }
//       }
//       )
//   }
// }

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


