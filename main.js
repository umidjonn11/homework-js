const fs = require("fs");
const path = require("path");

function createFolders(...folderNames) {
  if (folderNames.length >= 1 && folderNames.length <= 100) {
    folderNames.forEach((folder) => {
      const folderPath = path.join(__dirname, folder);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Papka '${folder}' yaraldi`);
      } else {
        console.log(`papka '${folder}' mavjud`);
      }
    });
  } else {
    console.log("1 dan 100 gacha bulishi shart");
  }
}

const writeCarData = (data) => {
  const filePath = path.join(__dirname, "cars.json");

  fs.readFile(filePath, (err, fileData) => {
    let cars = [];

    if (!err) {
      cars = JSON.parse(fileData);
    }

    cars.push(data);

    fs.writeFile(filePath, JSON.stringify(cars, null, 2), (err) => {
      if (err) {
        console.error("Xatolik:", err);
      } else {
        console.log("Ma'lumotlar saqlandi");
      }
    });
  });
};

const getCarData = () => {
  const filePath = path.join(__dirname, "cars.json");

  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      console.error("O'qishda xatolik:", err);
      return;
    }

    const cars = JSON.parse(fileData);
    console.log("Car data:", cars);
    return cars;
  });
};

const deleteCarDataById = (id) => {
  const filePath = path.join(__dirname, "cars.json");

  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      console.error("O'qishda xatolik:", err);
      return;
    }

    let cars = JSON.parse(fileData);
    const initialLength = cars.length;

    cars = cars.filter((car) => car.id !== id);

    if (cars.length === initialLength) {
      console.log(`Mashina topilmadi: ${id}`);
    } else {
      fs.writeFile(filePath, JSON.stringify(cars, null, 2), (err) => {
        if (err) {
          console.error("Yozishda xatolik:", err);
        } else {

          console.log(`Car with id ${id} has been deleted`);
        }
      });
    }
  });
};
// createFolders("cars", "bikes", "trucks");

// writeCarData({ id: 2, model: "BMW", price: 2000 });
writeCarData({ id: 3, model: 'Tesla', price: 3000 });
deleteCarDataById(2);
getCarData()
writeCarData({ id: 1, model: "Audi", price: 1000 });
