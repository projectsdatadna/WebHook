const {sendWebhookMessage} = require('../utils/webhook');

const createUser = async (req,res,next) => {
    const { myname  , details } = req.body

    const data ={
        user_id: 'bc8e1bc9-19b2-4d59-bc48-837f073cb166',
        myname,
        details,
    };

    try{
        const result = await sendWebhookMessage(`user.created`, data)
        res.status(200).json({message:'Order has been successfully created', result})
    } catch(error){
        console.log(error);
    res.status(error.status).json({message: error.message});
    }
};

const createEvent = async (req, res, next) => {

    const {event_type, provider_message, provider_name, status} = req.body.event;

    const userId = req.params.user_id;

    const user = {
        user_id : userId,
        myname: "aravind",
        details:"my name",
    };

    const data = {
        event_type,
        provider_message,
        provider_name,
        status,
        user,
    };

    try{
        const result = await sendWebhookMessage(`user.${event_type}`, data)
        res.status(200).json({message : 'Event has been created successfully', result})
    
    }catch(error){
        console.log(error);
        res.status(error.status).json({ message : error.message});
    }
};

const getUsers = (res, req, next) =>{
    req.status(200).json({data : 'your users'});
};

const getUser = (req, res, next) => {
    res.status(200).json({data:'your user'});
};

module.exports = {
    createUser,
    createEvent,
    getUsers,
    getUser,
};
