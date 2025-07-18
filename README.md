# 📁 File Organizer CLI Tool

A simple Node.js command-line application that helps you organize files in a directory into categorized folders based on file extensions.

---

##  Features

- Organizes files by type (media, documents, images, applications, etc.)
- Creates an `organized_files` folder to store sorted content
- Easy-to-use CLI interface
- Supports custom directory paths
- Written in modern JavaScript (ESM)

---

##  Technologies Used

- Node.js
- JavaScript ES6 Modules
- `fs` and `path` modules

---

## Folder Structure

```

.
├── input.js            # Main entry point for CLI
├── commands
│   └── organize.js     # Organize function logic
├── utility.js          # File type definitions and helper functions
└── README.md

````

---

## Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/file-organizer.git
   cd file-organizer
````

2. **Install dependencies**
   (No external dependencies needed unless added manually)

---

##  Usage

### Organize Files

```bash
node input.js organize <directory_path>
```

* If no path is provided, it organizes files in the current working directory.

### Example

```bash
node input.js organize ./Downloads
```

This will create a new folder `organized_files` inside `./Downloads` and categorize files into:

* `media/`
* `documents/`
* `images/`
* `applications/`
* `others/`

---

## Supported File Types

```js
{
  media:       ["mp4", "mkv", "mp3", "wav"],
  documents:   ["pdf", "docx", "txt", "xlsx"],
  images:      ["jpg", "jpeg", "png", "gif"],
  applications:["exe", "dmg", "pkg"]
}
```

Unrecognized extensions go into the `others/` folder.

---

## Future Improvements

* Add support for custom file type definitions
* Recursive file scanning
* GUI version for non-terminal users

---
