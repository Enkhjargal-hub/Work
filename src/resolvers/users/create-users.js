import fs from 'fs';

//fs => read file
//fs => write file

export const createUser = (req, res) => {
    const {firstName, secondName } = req.body
    const rawUsersData = fs.readFileSync('src/db/users.json');
    const user = JSON.parse(rawUsersData)

    users.push ({firstName, secondName})

    fs.writeFileSync('src/db/users.json', JSON.stringify(users));

    res.send('Hello World!')
}

//login, signup hiidg boloh