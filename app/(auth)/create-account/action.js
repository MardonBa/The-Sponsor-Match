"use server";

export default async function insertUser(formData) {
    // get the user's uuid from the current session
    // rpc call to insert the user
    // check if it is a creator or a sponsor
    // if creator, generate them a uuid for the creators table
    // insert into that table based on the user_id and the generated uuid
    // if sponsor, generate them a uuid for the sponsors table
    // insert into that table based on the user_id and the generated uuid
    return {success: true, error: null}
}