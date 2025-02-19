import fs from 'fs';
export const updateUser = (req, res) => {
    // body medeellee avj bga
    const { username, firstname } = req.body;

    //user iin data unshij baigaa
    const rawUserData = fs.readFileSync('src/db/users.json');
    const users = JSON.parse(rawUserData);

    //uurchlult hiij baigaa
    const newUserData = users.map((curs)=> {
        if (cur.username === username)
            return {...cur, firstname};

        return cur;
    })

    //uurchlultuu hadgalj baigaa
    fs.writeFileSync('src/db/users.json', JSON.stringify
        (newUsersData));

        res.json({message: "Success"})
}