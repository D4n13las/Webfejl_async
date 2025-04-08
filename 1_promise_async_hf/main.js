// Manager osztály – az adatok kezeléséért felelős
class Manager {
  constructor(data) {
      this.data = data; // Tárolja a kapott adatokat (pl. személyek listáját)
  }

  // Szűrőfüggvény – megadott feltétel alapján szűri az adatokat
  filter(condition) {
      return new Promise((resolve, reject) => {
          const filtered = this.data.filter(condition); // Szűrés a feltétel alapján
          if (filtered.length > 0) {
              resolve(filtered); // Ha van találat, visszaadjuk
          } else {
              reject('Feltételnek nincs megfelelő elem.'); // Ha nincs, hibaüzenetet adunk
          }
      });
  }
}

// View osztály – a megjelenítésért felel
class View {
  constructor() {
      this.div = document.createElement('div'); // Létrehozunk egy div-et
      document.body.appendChild(this.div); // Hozzáadjuk az oldalhoz
  }

  // Elemek megjelenítése a div-ben
  setCont(persons) {
      this.div.innerHTML = ''; // Töröljük a korábbi tartalmat
      persons.forEach(element => {
          const div = document.createElement('div');
          div.textContent = `${element.name}, ${element.age}`; // Név és életkor kiírása
          this.div.appendChild(div);
      });
  }

  // Hiba megjelenítése
  showErr(message) {
      this.div.innerHTML = message; // Hibát jelenít meg a div-ben
  }
}

// Form osztály – a gombok létrehozásáért és az interakcióért felel
class Form {
  constructor(manager, view) {
      this.manager = manager;
      this.view = view;
      this.createButtons(); // Gombok létrehozása
  }

  createButtons() {
      // Különböző szűrési feltételek listája
      const conditions = [
          (person) => person.age % 3 === 0 && person.car.color === 'White',
          (person) => person.sex === 'Female' && person.car.type === 'Coupe',
          (person) => person.name.startsWith('A') && person.car.type === 'Bus',
          (person) => person.car.color === 'Silver' && person.car.type === 'SUV'
      ];

      // Minden feltételhez létrehozunk egy gombot
      conditions.forEach((condition, index) => {
          const button = document.createElement('button');
          button.textContent = `Filter ${index + 1}`; // Gomb felirata
          button.onclick = () => {
              // Gombnyomásra elindítjuk a szűrést
              this.manager.filter(condition)
                  .then(filtered => this.view.setCont(filtered)) // Találatok megjelenítése
                  .catch(error => this.view.showErr(error)); // Hiba megjelenítése
          };
          document.body.appendChild(button); // Gomb hozzáadása az oldalhoz
      });
  }
}

// Feltételezzük, hogy van egy 'people' nevű tömb az adatokkal
const manager = new Manager(people); // Példányosítjuk a managert
const view = new View(); // Példányosítjuk a nézetet
const form = new Form(manager, view); // Összekapcsoljuk a kezelőt és a nézetet
