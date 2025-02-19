import fs from 'fs';

export const login = (req, res) => {
    const { username, password } = req.body;

    const rawUserData = fs.readFileSync('src/db/users.json');
    const users = JSON.parse(rawUserData);

    const user = users.find((cur)=> cur.username === username);

    if (!user) return res.json({message: "Username or Password did not match"})
    if (user.password !==password) return res.json({message: "Username or Password did not match"})

    
    res.json({token: 'hjkjhnk'}) 
}