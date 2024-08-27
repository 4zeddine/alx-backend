# i18n Project

Explore how to create internationalized web pages using Flask through various tasks.

## Tasks

### 0. Basic Flask App
- **File:** `0-app.py`
- **Features:**
  - Single `/` route
  - Simple HTML template: "Welcome to Holberton" as the title and "Hello world" as the header

### 1. Babel Setup
- **File:** `1-app.py`
- **Features:**
  - Integration of Flask-Babel
  - Configuration of supported languages (`en`, `fr`)
  - Default locale set to `"en"` and timezone to `"UTC"`

### 2. Locale from Request
- **File:** `2-app.py`
- **Features:**
  - `get_locale` function using `babel.localeselector`
  - Determine locale based on `request.accept_languages`

### 3. Template Localization
- **File:** `3-app.py`
- **Features:**
  - Localization of templates using `_` or `gettext`
  - Creation of `babel.cfg` for managing translations
  - Extraction and compilation of translations into `messages.po` files

### 4. Force Locale via URL
- **File:** `4-app.py`
- **Features:**
  - Override locale with `locale` parameter in URL
  - Support for dynamic language switching through URL query

### 5. Mock User Login
- **File:** `5-app.py`
- **Features:**
  - Simulated user login via `login_as` URL query
  - Display user-specific welcome message in multiple languages

### 6. Use User Locale
- **File:** `6-app.py`
- **Features:**
  - Prioritize user’s preferred locale
  - Locale selection based on URL, user settings, request headers, and defaults

### 7. Time Zone Detection
- **File:** `7-app.py`
- **Features:**
  - `get_timezone` function using `babel.timezoneselector`
  - Time zone selection based on URL, user settings, and defaults

### 8. Display Current Time
- **File:** `app.py`
- **Features:**
  - Display current time in the user’s time zone
  - Localized time display in both English and French

## Resources

- [Flask-Babel Documentation](https://intranet.alxswe.com/rltoken/fBpGjDt2BFuBFiz-jwublQ)
- [Flask i18n Tutorial](https://intranet.alxswe.com/rltoken/RtGz7pI7TKnYqrMMG9rWMg)
- [pytz Documentation](https://intranet.alxswe.com/rltoken/7rrCz4pkpqAn4FfRZ2Vsvw)
