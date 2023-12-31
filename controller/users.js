import {v4 as uuidv4} from 'uuid'

let users = []

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(users);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.redirect('/users');
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, gender, age } = req.body;
    let userToUpdate = users.find((user) => user.id === id);

    if(name) userToUpdate.name = name;
    if(gender) userToUpdate.gender = gender;
    if(age) userToUpdate.age = age;

    res.redirect('/users');
}