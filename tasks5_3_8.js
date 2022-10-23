let players = new Map();

players.set("children 1", "team 1");
players.set("children 2", "team 2");
players.set("children 3", "team 1");
players.set("children 4", "team 2");
players.set("children 5", "team 3");
players.set("children 6", "team 1");
players.set("children 7", "team 2");

for (let player of players.keys()) {
    console.log(player + " is " + players.get(player));
}
