import { RealtimeChannel, Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import supabase from "./supabaseClient";

export default function useSession() {
    const [userInfo, setUserInfo] = useState({
        profile: null,
        session: null
    });
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({data: { session }}) => {
            setUserInfo(...userInfo, session);
            supabase.auth.onAuthStateChange((_event, session) => {
                setUserInfo({session, profile: null}); 
                // profile is set to null because the next hook updates profile data when session changes
            })
        })
    }, []); // called when the useSession hook is initialized

    useEffect(() => {
        if (userInfo.sessoin?.user && !userInfo.profile) { 
            // case where profile was just set to null from the last hook. The user likely just signed in

        } else if (!userInfo.session?.user) { // case where the user doesn't exist
            channel?.unsubscribe();
            setChannel(null);
            // Don't need to listen to the channel if the user is logged out
        }
    }, [userInfo.session]);

    async function listenToUserProfileChanges(userId) {
        const { data } = await supabase
            .from("user_profiles")
            .select("*")
            .filter("user_id", "eq", userId);
    }
}