import firebase from "./FirebaseConfig";

const firestore = firebase.firestore();

const createDocument = (collection, document) => {
    return firestore.collection(collection).add(document);
};

const readDocument = ({ collection, queries }) => {
    let collectionRef = firestore.collection(collection);

    if (queries && queries.length > 0) {
        for (const query of queries) {
            debugger;
            collectionRef = collectionRef.where(
                query.field,
                query.condition,
                query.value
            );

        }
    }

    return collectionRef.get();
};

const updateDocument = (collection, id, document) => {
    return firestore.collection(collection).doc(id).update(document);
}

const FirebaseFirestoreService = {
    createDocument,
    readDocument,
    updateDocument,
};

export default FirebaseFirestoreService;