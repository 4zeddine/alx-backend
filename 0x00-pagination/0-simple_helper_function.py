#!/usr/bin/env python3
"""Module for task 0"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Returns the index range of a given page and its size"""
    idx_size = page_size * (page - 1)
    return idx_size, idx_size + page_size
