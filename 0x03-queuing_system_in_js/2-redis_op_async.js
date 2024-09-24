import redis from "redis";
import { promisify } from "util";

const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

/**
 * Set in Redis the value for the key schoolName.
 *
 * @param {string} schoolName - The name of the school.
 * @param {string} value - The value to set for the school.
 */
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

/**
 * Log to the console the value for the key passed as argument.
 * This function uses async/await.
 *
 * @param {string} schoolName - The name of the school.
 */
async function displaySchoolValue(schoolName) {
  try {
    const value = await getAsync(schoolName);
    console.log(value);
  } catch (err) {
    console.error(err);
  }
}

displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
