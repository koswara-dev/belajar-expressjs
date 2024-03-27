let users = [
    { id: 1, name: "User 1", price: 10 },
    { id: 2, name: "User 2", price: 20 },
    { id: 3, name: "User 3", price: 30 },
  ];
  
  module.exports = {
    getUsers: () => users,
    getUserById: (id) => users.find((user) => user.id === id),
    addUser: (user) => users.push(user),
    updateUser: (id, updatedUserData) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        users[userIndex] = {
          ...users[userIndex],
          ...updatedUserData,
        };
        return users[userIndex];
      }
      return null;
    },
    deleteUser: (id) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        return users.splice(userIndex, 1)[0];
      }
      return null;
    },
  };
  