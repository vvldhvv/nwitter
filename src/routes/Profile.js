import { authService/*, dbService*/ } from "fbase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ refreshUser, userObj }) => {
    const navigate = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    const onLogOutClick = () => {    
        authService.signOut();
        navigate("/");
    };
    /*
    const getMyNweets = async() => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .get();
    };

    useEffect(() => {
        getMyNweets();
    }, []);
    */
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewDisplayName(value);
    }; 

    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName)
        {
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
            refreshUser();
        }
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input onChange={onChange} autoFocus className="formInput" type="text" placeholder="Display name" value={newDisplayName} />
                <input
                    type="submit"
                    value="Update Profile"
                    className="formBtn"
                    style={{
                        marginTop: 10,
                    }}
                />
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </span>
        </div>
    );
};
export default Profile;