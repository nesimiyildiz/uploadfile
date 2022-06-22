import {Meteor} from "meteor/meteor";
import {existsSync, mkdirSync, writeFile,chmod} from 'fs';

Meteor.methods({
   'saveFileToDisk'(file, name, getpath, encoding) {
        if (Meteor.isServer) {
            encoding = encoding || 'binary';
            let chroot = 'uploads';
            let dynamicPath = chroot + (getpath ? '/' + getpath + '/' : '/');
            let filePath =process.env.PWD+ '/' + dynamicPath;
            //console.log(filePath);
            let url = filePath + name;
            chmod(process.env.PWD + '/uploads', 0o755, (err) => {
                if (!existsSync(process.env.PWD + '/uploads')) {
                    mkdirSync(process.env.PWD + '/uploads');
                }
                if (!existsSync(filePath)) { // uploads ın alt klasörü yoksa
                    mkdirSync(filePath); // klasör oluştur
                }
    
                writeFile(url, file, encoding, function (err) {
                    if (err) {
                        throw (new Meteor.Error(500, 'Dosya kaydedilemedi :', err));
                    }
                });
            });
        }
    },

});