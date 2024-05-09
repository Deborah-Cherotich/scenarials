// <!-- You are developing a social media application where users can follow other users.
// Show how you will use your knowledge in data structures to store followers for each
// user. -->


let userFollowers = {};
function addFollower(user, follower) {
    if (!userFollowers[user]) {
        userFollowers[user] = [];
    }
    userFollowers[user].push(follower);
}

function getFollowers(user) {
    return userFollowers[user] || [];
}

addFollower('user1', 'Babrah', 'Mercy');
addFollower('user2', 'Derric', 'Darious');
addFollower('user3', 'Faith');


console.log(getFollowers('user1')); 
console.log(getFollowers('user2')); 
console.log(getFollowers('user3')); 

