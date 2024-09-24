# Queueing System in JavaScript

This project covers tasks for implementing a queueing system in JavaScript.

## Tasks

### 0. Install Redis

- Download and compile Redis (version >5.0.7)
- Start Redis server
- Confirm server is working with `ping`
- Set value for key "Holberton"
- Kill the server
- Copy `dump.rdb` to project root

### 1. Node Redis Client

- Install `node_redis`
- Create script `0-redis_client.js` to connect to Redis server
- Log connection status

### 2. Node Redis Client and Basic Operations

- In `1-redis_op.js`, implement:
  - `setNewSchool`: Set Redis key
  - `displaySchoolValue`: Display key value
- Call functions with sample data

### 3. Node Redis Client and Async Operations

- In `2-redis_op_async.js`, modify `displaySchoolValue` to use async/await

### 4. Node Redis Client and Advanced Operations

- In `4-redis_advanced_op.js`:
  - Store hash in Redis
  - Display stored object

### 5. Node Redis Client Publisher and Subscriber

- Create `5-subscriber.js` and `5-publisher.js`
- Implement publish/subscribe system

### 6. Create the Job Creator

- In `6-job_creator.js`:
  - Create queue with Kue
  - Create job object
  - Add job to queue

### 7. Create the Job Processor

- In `6-job_processor.js`:
  - Create queue with Kue
  - Process jobs

### 8. Track Progress and Errors with Kue: Create the Job Creator

- In `7-job_creator.js`:
  - Create multiple jobs
  - Track job progress and completion

### 9. Track Progress and Errors with Kue: Create the Job Processor

- In `7-job_processor.js`:
  - Implement job processing with blacklist
  - Handle job progress and errors

### 10. Writing the Job Creation Function

- In `8-job.js`:
  - Implement `createPushNotificationsJobs` function

### 11. Writing the Test for Job Creation

- Create test suite for `createPushNotificationsJobs`

### 12. In Stock?

- Implement product inventory system with Redis and Express

### 13. Can I Have a Seat?

- Create seat reservation system with Redis, Kue, and Express

## Resources

- [Redis quick start](https://intranet.alxswe.com/rltoken/8xeApIhnxgFZkgn54BiIeA)
- [Redis client interface](https://intranet.alxswe.com/rltoken/1rq3ral-3C5O1t67dbGcWg)
- [Redis client for Node JS](https://intranet.alxswe.com/rltoken/mRftfl67BrNvl-RM5JQfUA)
- [Kue deprecated but still used in industry](https://intranet.alxswe.com/rltoken/yTC3Ci2IV2US24xJsBfMgQ)
