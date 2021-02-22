export const cartAdd = (id,name,email,date,time) => ({
    type : 'Add',
    appoint : {
        id : id,
        name : name,
        email : email,
        date : date,
        time : time,
     }  
})

export const cartDel = (id) => ({
    type : 'Del',
    appoint : {
        id : id
    }
}) 