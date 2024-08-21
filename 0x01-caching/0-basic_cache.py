#!/usr/bin/env python3
"""Module for task 0"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """Class that inherits from BaseCaching
    and is a caching system
    """
    def put(self, key, item):
        """Adds an item in the cache.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """Retrieves an item by key.
        """
        return self.cache_data.get(key, None)
