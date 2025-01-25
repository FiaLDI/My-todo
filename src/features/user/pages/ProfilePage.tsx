import React from "react";
import { useAppSelector } from "../../../app/hooks";

export const ProfilePage = (): React.JSX.Element => {
    const userInfo = useAppSelector((state) => state.user);

    return (
        <>
            {userInfo.auth ? (
                <div>
          Hi, {userInfo.login}, your password {userInfo.password}{" "}
                </div>
            ) : (
                "NO"
            )}
        </>
    );
};
