# Pagination Project

This project focuses on learning and implementing various pagination techniques in Python.

## 🎯 Project Objectives

Learn to paginate data efficiently using different methods:
- Simple helper functions
- Basic pagination
- Hypermedia pagination
- Deletion-resilient hypermedia pagination

## 📋 Tasks

### 1. Simple Helper Function
**File:** [0-simple_helper_function.py](0-simple_helper_function.py)

Implement `index_range(page, page_size)` function that returns a tuple containing start and end indexes for pagination.

### 2. Simple Pagination
**File:** [1-simple_pagination.py](1-simple_pagination.py)

Develop a `Server` class with a `get_page(page, page_size)` method to paginate a CSV dataset.

### 3. Hypermedia Pagination
**File:** [2-hypermedia_pagination.py](2-hypermedia_pagination.py)

Extend the `Server` class with a `get_hyper(page, page_size)` method that returns a dictionary with pagination metadata.

### 4. Deletion-Resilient Hypermedia Pagination
**File:** [3-hypermedia_del_pagination.py](3-hypermedia_del_pagination.py)

Implement `get_hyper_index(index, page_size)` method in the `Server` class to handle pagination with potential data deletions.

## 🛠️ Implementation Details

- Use the provided [Popular_Baby_Names.csv](Popular_Baby_Names.csv) file for the dataset.
- Employ `assert` statements for input validation.
- Utilize the `math` module when necessary.
- Ensure proper handling of edge cases and out-of-range inputs.

## 📚 Resources

- [REST API Design: Pagination](https://intranet.alxswe.com/rltoken/7Kdzi9CH1LdSfNQ4RaJUQw)
- [HATEOAS (Hypermedia as the Engine of Application State)](https://intranet.alxswe.com/rltoken/tfzcEbTSdMYSYxsspJH_oA)

## 🚀 Getting Started

1. Clone this repository
2. Navigate to the project directory
3. Run the Python scripts to test different pagination methods

## 📝 Note

This project is part of a learning curriculum. Each task builds upon the previous one, gradually introducing more complex pagination concepts.