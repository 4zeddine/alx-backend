# Caching Project

Learn about caching data through various tasks.

## Tasks

### 0. Basic dictionary
- File: `0-basic_cache.py`
- Class: `BasicCache`
- Features:
  - Unlimited caching
  - `put(key, item)`: Add item to cache
  - `get(key)`: Retrieve item from cache

### 1. FIFO caching
- File: `1-fifo_cache.py`
- Class: `FIFOCache`
- Features:
  - First-In-First-Out algorithm
  - Limited cache size
  - Discard oldest item when full

### 2. LIFO Caching
- File: `2-lifo_cache.py`
- Class: `LIFOCache`
- Features:
  - Last-In-First-Out algorithm
  - Limited cache size
  - Discard newest item when full

### 3. LRU Caching
- File: `3-lru_cache.py`
- Class: `LRUCache`
- Features:
  - Least Recently Used algorithm
  - Limited cache size
  - Discard least recently used item when full

### 4. MRU Caching
- File: `4-mru_cache.py`
- Class: `MRUCache`
- Features:
  - Most Recently Used algorithm
  - Limited cache size
  - Discard most recently used item when full

### 5. LFU Caching
- File: `100-lfu_cache.py`
- Class: `LFUCache`
- Features:
  - Least Frequently Used algorithm
  - Limited cache size
  - Discard least frequently used item when full
  - Use LRU for tie-breaking

## Resources

- [FIFO Cache Replacement](https://intranet.alxswe.com/rltoken/fjhr6EvFeF3mWwsPQXUKdQ)
- [LIFO Cache Replacement](https://intranet.alxswe.com/rltoken/U44RQjXp8xBtsbNIyhHIyw)
- [LRU Cache Replacement](https://intranet.alxswe.com/rltoken/gKerxvR4dnXQYkBX2ujZiQ)
- [MRU Cache Replacement](https://intranet.alxswe.com/rltoken/Tmk4qEBZ7QTknvbpKabWfQ)
- [LFU Cache Replacement](https://intranet.alxswe.com/rltoken/8PEJ8L34bxhL2y--BW5zGQ)