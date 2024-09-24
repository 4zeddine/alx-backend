import redis from "redis";

const client = redis.createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

/**
 * Set in Redis the value for the key schoolName.
 *
 * @param {string} schoolName - The name of the school which serves as the key.
 * @param {string} value - The value to set for the school.
 */
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

/**
 * Log to the console the value for the key passed as argument.
 *
 * @param {string} schoolName - The name of the school.
 */
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    if (err) throw err;
    console.log(reply);
  });
}

displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
