const db=require('./db')

//Get all iteam
const getiteams = (req) => {
    const searchKey = req?.query?.search || ''; // Safely access `query` and `search`
    console.log(searchKey);

    let query = {};
    if (searchKey) {
        query.name = { $regex: searchKey, $options: "i" }; // Case-insensitive search
    }

    return db.iteams.find(query).then(
        (result) => { // All item details
            if (result && result.length > 0) {
                return {
                    statusCode: 200,
                    iteams: result // Object set
                };
            } else {
                return {
                    statusCode: 404,
                    message: 'No data found' // Object set
                };
            }
        }
    ).catch((error) => {
        console.error('Error fetching items:', error);
        return {
            statusCode: 500,
            message: 'Internal server error'
        };
    });
};




//View a iteam
const viewiteams =(id)=>{
    return db.iteams.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    iteams:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'data not found'
                }
            }
        }
    )
}


//To add iteam
const additeams=(id,name,image,ingredients,instructions,rating)=>{
    return db.iteams.findOne({id}).then((result)=>{  //Check if it exist
        if(result){
            return{
                statusCode:401,
                message:'id already exist'
            }
        }
        const iteamsData= new db.iteams({id,name,image,ingredients,instructions,rating})  //if it doesnot already exist then save the data
        iteamsData.save()
        return{
            statusCode:200,
            message:'Recipe details added'
        }

    })
}








module.exports={
    getiteams,
    viewiteams,
    additeams,
}