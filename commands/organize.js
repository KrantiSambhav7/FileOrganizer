import fs from "fs";
import path from "path";

let types = {
    media: ["mp4", "mkv", "mp3", "wav"],
    documents: ["pdf", "docx", "txt", "xlsx"],
    images: ["jpg", "jpeg", "png", "gif"],
    applications: ["exe", "dmg", "pkg"]
}

export default function organizeFn(dirPath) {
    let destPath;
    if (dirPath == undefined) {
        destPath = path.join(process.cwd(), "organized_files");
        organiseHelper(process.cwd(), destPath);
        return;
    } else {
        let pathExist = fs.existsSync(dirPath);
        destPath = path.join(dirPath, "organized_files");
        if (!pathExist) {
            console.log("Path does not exist");
            return;
        }
        if (!fs.existsSync(destPath)) {
            fs.mkdirSync(destPath, { recursive: true });
        }
    }
    organiseHelper(dirPath, destPath);
}

function organiseHelper(src, dest) {
    let files = fs.readdirSync(src);
    console.log(files)
    for (let i = 0; i < files.length; i++) {
        let filePath = path.join(src, files[i]);
        if (fs.lstatSync(filePath).isFile()) {
            let category = getCategory(files[i]);
            console.log(`${files[i]} belongs to ${category}`);
            sendFile(filePath, dest, category);
        }
    }
}

function sendFile(src, dest, category) {
    let categoryPath = path.join(dest, category);
    if (!fs.existsSync(categoryPath)) {
        console.log("Made")
        fs.mkdirSync(categoryPath, { recursive: true });
    }
    let fileName = path.basename(src);
    let destPathAddress = path.join(categoryPath, fileName);
    fs.copyFileSync(src, destPathAddress);
    console.log(src + " src address ")
    fs.unlinkSync(src);
    console.log("Hello");
}

function getCategory(fileName) {
    let extension = path.extname(fileName);
    for (let type in types) {
        let array = types[type];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === extension.slice(1)) {
                return type;
            }
        }
    }
    return "Wrong File Type";
}