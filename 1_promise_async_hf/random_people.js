const people = [
    {
      "name": "Charlotte Walker",
      "age": 43,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "SUV"
      }
    },
    {
      "name": "Chris Rodriguez",
      "age": 77,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Coupe"
      }
    },
    {
      "name": "Amelia King",
      "age": 51,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "Olivia Walker",
      "age": 28,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Convertible"
      }
    },
    {
      "name": "John Flores",
      "age": 18,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Van"
      }
    },
    {
      "name": "Michael Lewis",
      "age": 66,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Van"
      }
    },
    {
      "name": "Paul Allen",
      "age": 43,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Sedan"
      }
    },
    {
      "name": "David Martinez",
      "age": 79,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "Peter King",
      "age": 72,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "SUV"
      }
    },
    {
      "name": "Daniel Robinson",
      "age": 20,
      "sex": "Female",
      "car": {
        "color": "Yellow",
        "type": "Sedan"
      }
    },
    {
      "name": "Amelia Allen",
      "age": 55,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Convertible"
      }
    },
    {
      "name": "Paul Lewis",
      "age": 55,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Van"
      }
    },
    {
      "name": "Olivia Allen",
      "age": 52,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Hatchback"
      }
    },
    {
      "name": "Thomas Jackson",
      "age": 50,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "SUV"
      }
    },
    {
      "name": "Thomas White",
      "age": 76,
      "sex": "Female",
      "car": {
        "color": "Yellow",
        "type": "Convertible"
      }
    },
    {
      "name": "Michael Clark",
      "age": 45,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Convertible"
      }
    },
    {
      "name": "Thomas Jackson",
      "age": 57,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Sedan"
      }
    },
    {
      "name": "Paul Martinez",
      "age": 39,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "Daniel Young",
      "age": 46,
      "sex": "Female",
      "car": {
        "color": "Green",
        "type": "Truck"
      }
    },
    {
      "name": "Olivia Flores",
      "age": 75,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "Coupe"
      }
    },
    {
      "name": "Peter Lewis",
      "age": 80,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Convertible"
      }
    },
    {
      "name": "John Rodriguez",
      "age": 56,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Van"
      }
    },
    {
      "name": "David Allen",
      "age": 58,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "Michael Flores",
      "age": 21,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Truck"
      }
    },
    {
      "name": "Paul Harris",
      "age": 22,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Hatchback"
      }
    },
    {
      "name": "Daniel Walker",
      "age": 52,
      "sex": "Female",
      "car": {
        "color": "Green",
        "type": "Truck"
      }
    },
    {
      "name": "Laura Young",
      "age": 52,
      "sex": "Female",
      "car": {
        "color": "Black",
        "type": "Sedan"
      }
    },
    {
      "name": "Amelia King",
      "age": 65,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "James Young",
      "age": 80,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Van"
      }
    },
    {
      "name": "Amelia Wright",
      "age": 32,
      "sex": "Female",
      "car": {
        "color": "Yellow",
        "type": "Van"
      }
    },
    {
      "name": "Laura White",
      "age": 51,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Sedan"
      }
    },
    {
      "name": "Emily Flores",
      "age": 21,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Convertible"
      }
    },
    {
      "name": "Daniel Harris",
      "age": 62,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "SUV"
      }
    },
    {
      "name": "James Flores",
      "age": 23,
      "sex": "Female",
      "car": {
        "color": "Yellow",
        "type": "Hatchback"
      }
    },
    {
      "name": "James Scott",
      "age": 50,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "SUV"
      }
    },
    {
      "name": "Olivia Flores",
      "age": 46,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Convertible"
      }
    },
    {
      "name": "Michael Walker",
      "age": 66,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Hatchback"
      }
    },
    {
      "name": "John King",
      "age": 32,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Truck"
      }
    },
    {
      "name": "David Walker",
      "age": 76,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Sedan"
      }
    },
    {
      "name": "Charlotte Young",
      "age": 54,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Hatchback"
      }
    },
    {
      "name": "Daniel Rodriguez",
      "age": 21,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Hatchback"
      }
    },
    {
      "name": "John Flores",
      "age": 80,
      "sex": "Female",
      "car": {
        "color": "Black",
        "type": "Convertible"
      }
    },
    {
      "name": "Michael Robinson",
      "age": 37,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "John Flores",
      "age": 42,
      "sex": "Female",
      "car": {
        "color": "Green",
        "type": "Convertible"
      }
    },
    {
      "name": "James Smith",
      "age": 18,
      "sex": "Female",
      "car": {
        "color": "Yellow",
        "type": "Convertible"
      }
    },
    {
      "name": "Paul Martinez",
      "age": 76,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Sedan"
      }
    },
    {
      "name": "Paul Walker",
      "age": 59,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Truck"
      }
    },
    {
      "name": "Olivia Allen",
      "age": 44,
      "sex": "Female",
      "car": {
        "color": "Black",
        "type": "Van"
      }
    },
    {
      "name": "Daniel King",
      "age": 36,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Hatchback"
      }
    },
    {
      "name": "Sarah Walker",
      "age": 21,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Coupe"
      }
    },
    {
      "name": "Kevin Scott",
      "age": 46,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Coupe"
      }
    },
    {
      "name": "John Flores",
      "age": 78,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Sedan"
      }
    },
    {
      "name": "Amelia Harris",
      "age": 59,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Hatchback"
      }
    },
    {
      "name": "Peter Jackson",
      "age": 24,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Sedan"
      }
    },
    {
      "name": "Paul Lewis",
      "age": 66,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Hatchback"
      }
    },
    {
      "name": "Emma Clark",
      "age": 76,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Truck"
      }
    },
    {
      "name": "Paul Scott",
      "age": 29,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Truck"
      }
    },
    {
      "name": "Kevin Scott",
      "age": 62,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "Van"
      }
    },
    {
      "name": "Thomas Young",
      "age": 70,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Convertible"
      }
    },
    {
      "name": "Thomas Robinson",
      "age": 66,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "Michael Johnson",
      "age": 67,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Sedan"
      }
    },
    {
      "name": "Olivia Robinson",
      "age": 74,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Van"
      }
    },
    {
      "name": "Amelia Robinson",
      "age": 26,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Van"
      }
    },
    {
      "name": "Paul White",
      "age": 46,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Truck"
      }
    },
    {
      "name": "David Rodriguez",
      "age": 19,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Van"
      }
    },
    {
      "name": "Olivia Rodriguez",
      "age": 60,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Coupe"
      }
    },
    {
      "name": "Amelia Young",
      "age": 32,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "SUV"
      }
    },
    {
      "name": "John Flores",
      "age": 31,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Hatchback"
      }
    },
    {
      "name": "Daniel Martinez",
      "age": 50,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Sedan"
      }
    },
    {
      "name": "John Wright",
      "age": 54,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "SUV"
      }
    },
    {
      "name": "Thomas Rodriguez",
      "age": 70,
      "sex": "Female",
      "car": {
        "color": "Black",
        "type": "Sedan"
      }
    },
    {
      "name": "Chris Johnson",
      "age": 61,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Truck"
      }
    },
    {
      "name": "Thomas Young",
      "age": 31,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "Truck"
      }
    },
    {
      "name": "Amelia Wright",
      "age": 79,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Van"
      }
    },
    {
      "name": "Peter Scott",
      "age": 56,
      "sex": "Female",
      "car": {
        "color": "Green",
        "type": "Sedan"
      }
    },
    {
      "name": "David King",
      "age": 72,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Coupe"
      }
    },
    {
      "name": "Daniel Flores",
      "age": 23,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Convertible"
      }
    },
    {
      "name": "David White",
      "age": 41,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Hatchback"
      }
    },
    {
      "name": "Sarah Allen",
      "age": 33,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Convertible"
      }
    },
    {
      "name": "Emily Wright",
      "age": 50,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Van"
      }
    },
    {
      "name": "Sarah Smith",
      "age": 68,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Truck"
      }
    },
    {
      "name": "Emma King",
      "age": 48,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Coupe"
      }
    },
    {
      "name": "Charlotte Jackson",
      "age": 38,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Van"
      }
    },
    {
      "name": "James Flores",
      "age": 62,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Truck"
      }
    },
    {
      "name": "John Robinson",
      "age": 67,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Sedan"
      }
    },
    {
      "name": "Kevin White",
      "age": 29,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Van"
      }
    },
    {
      "name": "Kevin Walker",
      "age": 26,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Convertible"
      }
    },
    {
      "name": "Olivia White",
      "age": 59,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Convertible"
      }
    },
    {
      "name": "Emma Lewis",
      "age": 48,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Convertible"
      }
    },
    {
      "name": "Olivia Harris",
      "age": 50,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Truck"
      }
    },
    {
      "name": "Amelia Allen",
      "age": 20,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Hatchback"
      }
    },
    {
      "name": "Sarah Rodriguez",
      "age": 80,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Convertible"
      }
    },
    {
      "name": "Charlotte Martinez",
      "age": 65,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Convertible"
      }
    },
    {
      "name": "Sarah Jackson",
      "age": 48,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Coupe"
      }
    },
    {
      "name": "Charlotte White",
      "age": 64,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Convertible"
      }
    },
    {
      "name": "Paul Young",
      "age": 64,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Hatchback"
      }
    },
    {
      "name": "Michael Smith",
      "age": 36,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Convertible"
      }
    },
    {
      "name": "Emily Robinson",
      "age": 63,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Sedan"
      }
    },
    {
      "name": "Daniel Johnson",
      "age": 57,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Convertible"
      }
    },
    {
      "name": "James King",
      "age": 19,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Truck"
      }
    },
    {
      "name": "Paul Wright",
      "age": 72,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "SUV"
      }
    },
    {
      "name": "Peter Allen",
      "age": 38,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Convertible"
      }
    },
    {
      "name": "Chris Jackson",
      "age": 44,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Sedan"
      }
    },
    {
      "name": "Olivia King",
      "age": 36,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Van"
      }
    },
    {
      "name": "James Wright",
      "age": 48,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "Truck"
      }
    },
    {
      "name": "Emily Clark",
      "age": 39,
      "sex": "Female",
      "car": {
        "color": "Yellow",
        "type": "Van"
      }
    },
    {
      "name": "Amelia Walker",
      "age": 71,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "Michael Harris",
      "age": 26,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "James Johnson",
      "age": 28,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Van"
      }
    },
    {
      "name": "Thomas Lewis",
      "age": 43,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Truck"
      }
    },
    {
      "name": "John King",
      "age": 77,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Hatchback"
      }
    },
    {
      "name": "John Wright",
      "age": 30,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Sedan"
      }
    },
    {
      "name": "Daniel Harris",
      "age": 72,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "Coupe"
      }
    },
    {
      "name": "Michael Lewis",
      "age": 67,
      "sex": "Female",
      "car": {
        "color": "Green",
        "type": "Sedan"
      }
    },
    {
      "name": "Peter Harris",
      "age": 41,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Van"
      }
    },
    {
      "name": "Laura Walker",
      "age": 25,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Hatchback"
      }
    },
    {
      "name": "Chris Allen",
      "age": 44,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Hatchback"
      }
    },
    {
      "name": "Emily Wright",
      "age": 58,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "Hatchback"
      }
    },
    {
      "name": "Thomas Flores",
      "age": 27,
      "sex": "Female",
      "car": {
        "color": "Yellow",
        "type": "Truck"
      }
    },
    {
      "name": "Peter Smith",
      "age": 30,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Truck"
      }
    },
    {
      "name": "Olivia Lewis",
      "age": 69,
      "sex": "Female",
      "car": {
        "color": "Black",
        "type": "SUV"
      }
    },
    {
      "name": "John Scott",
      "age": 69,
      "sex": "Female",
      "car": {
        "color": "Green",
        "type": "SUV"
      }
    },
    {
      "name": "Emma Allen",
      "age": 39,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Coupe"
      }
    },
    {
      "name": "Thomas Young",
      "age": 59,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Hatchback"
      }
    },
    {
      "name": "David Jackson",
      "age": 66,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Coupe"
      }
    },
    {
      "name": "Emily Wright",
      "age": 48,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Coupe"
      }
    },
    {
      "name": "Peter Smith",
      "age": 78,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "Convertible"
      }
    },
    {
      "name": "Peter Harris",
      "age": 48,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Convertible"
      }
    },
    {
      "name": "Paul Jackson",
      "age": 20,
      "sex": "Female",
      "car": {
        "color": "Green",
        "type": "Sedan"
      }
    },
    {
      "name": "David Allen",
      "age": 20,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Hatchback"
      }
    },
    {
      "name": "Emily Clark",
      "age": 51,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "SUV"
      }
    },
    {
      "name": "Thomas Scott",
      "age": 46,
      "sex": "Female",
      "car": {
        "color": "Black",
        "type": "SUV"
      }
    },
    {
      "name": "Peter Harris",
      "age": 62,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Truck"
      }
    },
    {
      "name": "Olivia Walker",
      "age": 45,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Sedan"
      }
    },
    {
      "name": "David Harris",
      "age": 71,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Coupe"
      }
    },
    {
      "name": "Emily Harris",
      "age": 66,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Sedan"
      }
    },
    {
      "name": "John Clark",
      "age": 71,
      "sex": "Female",
      "car": {
        "color": "Black",
        "type": "Sedan"
      }
    },
    {
      "name": "Olivia Johnson",
      "age": 80,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Hatchback"
      }
    },
    {
      "name": "Amelia Johnson",
      "age": 57,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Van"
      }
    },
    {
      "name": "Michael Robinson",
      "age": 47,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Hatchback"
      }
    },
    {
      "name": "Michael Robinson",
      "age": 26,
      "sex": "Female",
      "car": {
        "color": "Yellow",
        "type": "SUV"
      }
    },
    {
      "name": "Olivia Smith",
      "age": 32,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Convertible"
      }
    },
    {
      "name": "Kevin Young",
      "age": 68,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Coupe"
      }
    },
    {
      "name": "Amelia Allen",
      "age": 60,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Convertible"
      }
    },
    {
      "name": "Michael King",
      "age": 80,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Hatchback"
      }
    },
    {
      "name": "Thomas Wright",
      "age": 29,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Convertible"
      }
    },
    {
      "name": "Peter Allen",
      "age": 38,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Truck"
      }
    },
    {
      "name": "Emily Smith",
      "age": 52,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "Paul Clark",
      "age": 21,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Truck"
      }
    },
    {
      "name": "David Martinez",
      "age": 48,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "SUV"
      }
    },
    {
      "name": "Sarah Johnson",
      "age": 57,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Truck"
      }
    },
    {
      "name": "Emily Jackson",
      "age": 79,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Coupe"
      }
    },
    {
      "name": "Amelia Young",
      "age": 65,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Hatchback"
      }
    },
    {
      "name": "John Scott",
      "age": 41,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "SUV"
      }
    },
    {
      "name": "Chris Johnson",
      "age": 42,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Hatchback"
      }
    },
    {
      "name": "Sarah Scott",
      "age": 47,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Convertible"
      }
    },
    {
      "name": "Michael Walker",
      "age": 34,
      "sex": "Female",
      "car": {
        "color": "Green",
        "type": "SUV"
      }
    },
    {
      "name": "David Rodriguez",
      "age": 78,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Convertible"
      }
    },
    {
      "name": "Laura Martinez",
      "age": 44,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Truck"
      }
    },
    {
      "name": "Chris Robinson",
      "age": 31,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Sedan"
      }
    },
    {
      "name": "David Smith",
      "age": 78,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Hatchback"
      }
    },
    {
      "name": "Chris Flores",
      "age": 77,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Hatchback"
      }
    },
    {
      "name": "Kevin Jackson",
      "age": 65,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Hatchback"
      }
    },
    {
      "name": "Emma Allen",
      "age": 47,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Coupe"
      }
    },
    {
      "name": "Emily Jackson",
      "age": 25,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Hatchback"
      }
    },
    {
      "name": "Amelia White",
      "age": 33,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Sedan"
      }
    },
    {
      "name": "Emily Flores",
      "age": 46,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Coupe"
      }
    },
    {
      "name": "Charlotte Rodriguez",
      "age": 72,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Truck"
      }
    },
    {
      "name": "James Flores",
      "age": 58,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Sedan"
      }
    },
    {
      "name": "Charlotte Young",
      "age": 55,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "SUV"
      }
    },
    {
      "name": "Peter White",
      "age": 29,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "SUV"
      }
    },
    {
      "name": "David Flores",
      "age": 48,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Truck"
      }
    },
    {
      "name": "James Young",
      "age": 79,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "SUV"
      }
    },
    {
      "name": "Daniel Walker",
      "age": 21,
      "sex": "Male",
      "car": {
        "color": "Black",
        "type": "Convertible"
      }
    },
    {
      "name": "John Young",
      "age": 41,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "SUV"
      }
    },
    {
      "name": "Emma Smith",
      "age": 75,
      "sex": "Female",
      "car": {
        "color": "Red",
        "type": "Sedan"
      }
    },
    {
      "name": "Laura King",
      "age": 52,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "SUV"
      }
    },
    {
      "name": "Thomas Lewis",
      "age": 20,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "SUV"
      }
    },
    {
      "name": "Amelia Harris",
      "age": 25,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Coupe"
      }
    },
    {
      "name": "Amelia Smith",
      "age": 70,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Convertible"
      }
    },
    {
      "name": "Olivia Walker",
      "age": 77,
      "sex": "Female",
      "car": {
        "color": "Black",
        "type": "SUV"
      }
    },
    {
      "name": "Olivia Allen",
      "age": 52,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Hatchback"
      }
    },
    {
      "name": "Amelia Wright",
      "age": 57,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Truck"
      }
    },
    {
      "name": "Peter Johnson",
      "age": 22,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "SUV"
      }
    },
    {
      "name": "Kevin White",
      "age": 23,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Van"
      }
    },
    {
      "name": "Laura Allen",
      "age": 18,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Coupe"
      }
    },
    {
      "name": "Kevin Clark",
      "age": 49,
      "sex": "Male",
      "car": {
        "color": "Green",
        "type": "Coupe"
      }
    },
    {
      "name": "Kevin Robinson",
      "age": 21,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "Truck"
      }
    },
    {
      "name": "Laura Martinez",
      "age": 42,
      "sex": "Male",
      "car": {
        "color": "Yellow",
        "type": "Coupe"
      }
    },
    {
      "name": "Thomas Smith",
      "age": 34,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "SUV"
      }
    },
    {
      "name": "Michael Scott",
      "age": 77,
      "sex": "Male",
      "car": {
        "color": "Silver",
        "type": "Sedan"
      }
    },
    {
      "name": "Olivia Martinez",
      "age": 77,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Convertible"
      }
    },
    {
      "name": "Charlotte Scott",
      "age": 63,
      "sex": "Male",
      "car": {
        "color": "Red",
        "type": "Hatchback"
      }
    },
    {
      "name": "Daniel Harris",
      "age": 76,
      "sex": "Female",
      "car": {
        "color": "Blue",
        "type": "Hatchback"
      }
    },
    {
      "name": "Kevin Walker",
      "age": 31,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "Truck"
      }
    },
    {
      "name": "Michael Young",
      "age": 28,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Coupe"
      }
    },
    {
      "name": "Paul Clark",
      "age": 28,
      "sex": "Female",
      "car": {
        "color": "White",
        "type": "SUV"
      }
    },
    {
      "name": "Charlotte Johnson",
      "age": 55,
      "sex": "Male",
      "car": {
        "color": "Blue",
        "type": "Hatchback"
      }
    },
    {
      "name": "Olivia Allen",
      "age": 71,
      "sex": "Male",
      "car": {
        "color": "White",
        "type": "SUV"
      }
    },
    {
      "name": "Thomas Harris",
      "age": 36,
      "sex": "Female",
      "car": {
        "color": "Silver",
        "type": "Sedan"
      }
    }
  ];

