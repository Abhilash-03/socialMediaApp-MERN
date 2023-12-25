import User from '../models/user.models.js';

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        
        const friends = await Promise.all(
           user.friends.map((id) =>  User.findById(id))
        );

        const formattedFriends = friends.map(({
            _id, firstName, lastName, occupation, picturePath, location
        }) => {
            return {_id, firstName, lastName, occupation, picturePath, location};
        });

        res.status(200).json(formattedFriends);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if(user.friends.includes(id)){
            user.friends = user.friends.filter(id => id !== friendId);
            friend.friends = friend.friends.filter(id => id !== id);
        } else{
            user.friends.push(friendId);
            friend.friends.push(id);
        }

        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map(id => User.findById(id))
        )

        const formattedFriends = friends.map(({
            _id, firstName, lastName, occupation, picturePath, location
        }) => {
            return {_id, firstName, lastName, occupation, picturePath, location};
        });

        res.status(200).json(formattedFriends);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export {
    getUser,
    getUserFriends,
    addRemoveFriend
}