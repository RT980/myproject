import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
    const { user, logout, isAuthenticated, isLoading } = useAuth0();
    console.log(user);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="flex animate-pulse md:flex-col lg:flex-col-reverse justify-center items-center pt-[100px]">
                    <img src={user.picture} />
                    <h1>Name: {user.name}</h1>
                    <h1>Email: {user.email}</h1>
                    <div>
                        <button
                            onClick={() => {
                                logout();

                            }}
                            className="bg-red-500 text-white rounded-2xl p-2">Logout</button>

                    </div>



                </div>
            )}

        </div>
    );
}

export default Profile;
