var fs = require("fs");

//path模块，可以生产相对和绝对路径
var path = require("path");

var filePath = path.resolve();

let cheerio = require('cheerio');

var fileObject = {};

function init() {
    console.log('=============================================================================分界线')
    let dirList = fs.readdirSync(filePath, 'utf-8');
    dirList.forEach(function(item){
        let fileType =fs.statSync(path.join(filePath,item))
        //如果是文件
        if(fileType.isFile()){
            fileObject[item] = path.join(filePath,item)
        //如果是文件夹    
        }else if(fileType.isDirectory()){
            if(getFileType(item)!=='git'&& getFileType(item)!=='idea' && getFileType(item)!=='node_modules'){
                fileObject[item] = {}
                iteration(path.join(filePath,item),fileObject[item])
            }
        }        
    })
    writeFile(fileObject)
    
}

function iteration(sonUrl,sonObject) {
    let sonDirList = fs.readdirSync(sonUrl, 'utf-8');
    sonDirList.forEach(function(item,index,array){
        let fileType =fs.statSync(path.join(sonUrl,item))
        //如果是文件
        if(fileType.isFile()){
            sonObject[item] = path.join(filePath,item)
        //如果是文件夹    
        }else if(fileType.isDirectory()){
            if(getFileType(item)!=='git'&& getFileType(item)!=='idea' && getFileType(item)!=='node_modules'){
                sonObject[item] = {}
                iteration(path.join(sonUrl,item),sonObject[item])
            }      
        }
    })
}


function getFileType(url){
    var arr = url.split('.');
    var len = arr.length;
    return arr[len-1];
}

function writeFile(data){    
      fs.writeFile(filePath+"/"+"console.txt",JSON.stringify(data),function(err){
          if(err) throw err;
          console.log("写入成功");
      });
  }



init();
