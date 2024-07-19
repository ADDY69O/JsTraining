class LruCache {
  constructor() {
    this.Cache = new Array();
  }

  addFile(file) {
    if (!file.id) {
      console.log("required FileId");
    }
    const previousFile = this.Cache.filter(
      (cacheFiles) => cacheFiles.id == file.id
    );
    if (previousFile.length == 0) {
      this.Cache.unshift(file);
      console.log("File Added Successfully");
    } else {
      console.log("File Already Exists");
    }
  }

  modifyFile(file) {
    if (!file.id) {
      console.log("required FileId");
      return;
    }
    const previousFile = this.Cache.filter(
      (cacheFile) => cacheFile.id == file.id
    );

    if (previousFile.length == 0) {
      console.log("File Not Found");
    } else {
      this.Cache = this.Cache.filter((cacheFile) => cacheFile.id != file.id);
      this.Cache.unshift(file);
      console.log("File Modified Successfully");
    }
  }

  deleteFile(file) {
    if (!file.id) {
      console.log("required FileId");
      return;
    }
    this.Cache = this.Cache.filter((cacheFile) => cacheFile.id != file.id);
    console.log("File Deleted Successfully");
  }

  showCacheFiles() {
    console.log("Cache Files:");
    for (let ele of this.Cache) {
      console.log(ele);
    }
  }
}

let f1 = {
  id: 1,
  name: "Aditya",
};
let f2 = {
  id: 2,
  name: "Sagar",
};
let f3 = {
  id: 3,
  name: "Yash",
};
let f4 = {
  id: 4,
  name: "gamak",
};
let f5 = {
  id: 5,
  name: "Amit",
};

let c1 = new LruCache();
c1.addFile(f1);
c1.showCacheFiles();
c1.addFile(f2);
c1.showCacheFiles();
c1.modifyFile(f1);
c1.showCacheFiles();
c1.addFile(f3);
c1.showCacheFiles();
c1.addFile(f4);
c1.showCacheFiles();
c1.deleteFile(f3);
c1.showCacheFiles();
c1.modifyFile({ id: 2, name: "jiya" });
c1.showCacheFiles();
