import fs from "fs";
import path from "path";

export default function treeFn(dirPath) {
    if (dirPath == undefined) {
        treeHelper(process.cwd(), "");
        return;
    } else {
        let pathExist = fs.existsSync(dirPath);
        if (!pathExist) {
            console.log("Path does not exist");
            return;
        }
        treeHelper(dirPath, "");
    }
}

function treeHelper(dirPath, indent) {
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile) {
        let fileName = path.basename(dirPath);
        console.log(indent + " -------- " + fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + " -------- " + dirName);
        let files = fs.readdirSync(dirPath);
        for (let i = 0; i < files.length; i++) {
            let childPath = path.join(dirPath, files[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}