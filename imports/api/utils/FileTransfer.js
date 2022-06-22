import RandomString from './RandomString'

const FileTransfer = (file, path, callback) => {
    let fileReader = new FileReader(),
        method, encoding = 'binary', type = 'binary';
    let fileType = file.type;
    let name = file.name;
    console.log(name)
    let fileExt = file.name.split('.').pop();
    const renamedFile = new File([name], RandomString(32) + '.' + fileExt);
console.log(renamedFile);
    switch (type) {
        case 'text':
            method = 'readAsText';
            encoding = 'utf8';
            break;
        case 'binary':
            method = 'readAsBinaryString';
            encoding = 'binary';
            break;
        default:
            method = 'readAsBinaryString';
            encoding = 'binary';
            break;
    }
    
    switch (fileType) {
        case 'application':
            path = "documents";
            break;
        case 'image':
            path = "images";
            break;
        case 'video':
            path = 'videos';
            break;
        case 'text':
            path = "documents";
            break;
        default:
            path = "images";
            break;
    }
    const fileName = renamedFile.name;
    fileReader[method](file);
    fileReader.onload = function (file) {
        let outFile = fileReader.result;
        Meteor.call('saveFileToDisk', outFile, fileName, path, encoding, (err) => {
            if (err) {
                console.log(err.reason);
            } else {
                const url = 'uploads/' + path + '/' + fileName;
                callback(url)
            }
        });
    }
}

export default FileTransfer;