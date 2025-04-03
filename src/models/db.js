const db = { 
    user: { 
        name: 'testUser', 
        balance: 0
    }
}; 

const readDB = async() => db; 

const editDB = async (newData) => {
    db.user = newData.user;
}

export default {
    readDB,
    editDB
}; 