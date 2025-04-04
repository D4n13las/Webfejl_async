const people = [
    {
      "name": "Sarah Young",
      "age": 43,
      "sex": "Female"
    },
    {
      "name": "Emily Harris",
      "age": 68,
      "sex": "Female"
    },
    {
      "name": "Charlotte Scott",
      "age": 31,
      "sex": "Female"
    },
    {
      "name": "David Scott",
      "age": 71,
      "sex": "Male"
    },
    {
      "name": "Peter Lewis",
      "age": 69,
      "sex": "Female"
    },
    {
      "name": "Emily Rodriguez",
      "age": 45,
      "sex": "Male"
    },
    {
      "name": "Paul Rodriguez",
      "age": 50,
      "sex": "Female"
    },
    {
      "name": "Olivia Harris",
      "age": 79,
      "sex": "Female"
    },
    {
      "name": "Thomas Wright",
      "age": 52,
      "sex": "Male"
    },
    {
      "name": "Chris Young",
      "age": 43,
      "sex": "Male"
    },
    {
      "name": "Kevin Scott",
      "age": 42,
      "sex": "Male"
    },
    {
      "name": "Kevin Walker",
      "age": 73,
      "sex": "Female"
    },
    {
      "name": "David Flores",
      "age": 31,
      "sex": "Male"
    },
    {
      "name": "Amelia White",
      "age": 26,
      "sex": "Female"
    },
    {
      "name": "Olivia Wright",
      "age": 33,
      "sex": "Female"
    },
    {
      "name": "John Scott",
      "age": 78,
      "sex": "Male"
    },
    {
      "name": "Charlotte Lewis",
      "age": 68,
      "sex": "Female"
    },
    {
      "name": "Kevin Clark",
      "age": 22,
      "sex": "Male"
    },
    {
      "name": "Michael Scott",
      "age": 50,
      "sex": "Female"
    },
    {
      "name": "Kevin Walker",
      "age": 38,
      "sex": "Female"
    },
    {
      "name": "Amelia Rodriguez",
      "age": 49,
      "sex": "Male"
    },
    {
      "name": "Olivia Jackson",
      "age": 72,
      "sex": "Male"
    },
    {
      "name": "Sarah Martinez",
      "age": 75,
      "sex": "Female"
    },
    {
      "name": "Amelia Jackson",
      "age": 23,
      "sex": "Female"
    },
    {
      "name": "Sarah Wright",
      "age": 27,
      "sex": "Male"
    },
    {
      "name": "Peter Allen",
      "age": 39,
      "sex": "Female"
    },
    {
      "name": "John Young",
      "age": 34,
      "sex": "Female"
    },
    {
      "name": "James Lewis",
      "age": 54,
      "sex": "Male"
    },
    {
      "name": "Paul Allen",
      "age": 59,
      "sex": "Male"
    },
    {
      "name": "Emma Wright",
      "age": 32,
      "sex": "Male"
    },
    {
      "name": "Michael Rodriguez",
      "age": 28,
      "sex": "Male"
    },
    {
      "name": "David Jackson",
      "age": 56,
      "sex": "Male"
    },
    {
      "name": "Olivia Allen",
      "age": 22,
      "sex": "Female"
    },
    {
      "name": "Emily Scott",
      "age": 80,
      "sex": "Male"
    },
    {
      "name": "Olivia Flores",
      "age": 32,
      "sex": "Female"
    },
    {
      "name": "Peter Lewis",
      "age": 71,
      "sex": "Female"
    },
    {
      "name": "Laura Johnson",
      "age": 51,
      "sex": "Male"
    },
    {
      "name": "Daniel Wright",
      "age": 45,
      "sex": "Female"
    },
    {
      "name": "Michael Allen",
      "age": 47,
      "sex": "Male"
    },
    {
      "name": "Paul Smith",
      "age": 66,
      "sex": "Female"
    },
    {
      "name": "Kevin Rodriguez",
      "age": 42,
      "sex": "Female"
    },
    {
      "name": "Emma Flores",
      "age": 46,
      "sex": "Male"
    },
    {
      "name": "David Harris",
      "age": 30,
      "sex": "Female"
    },
    {
      "name": "Laura Allen",
      "age": 44,
      "sex": "Female"
    },
    {
      "name": "Thomas White",
      "age": 51,
      "sex": "Male"
    },
    {
      "name": "Emily Harris",
      "age": 19,
      "sex": "Female"
    },
    {
      "name": "Daniel Clark",
      "age": 62,
      "sex": "Female"
    },
    {
      "name": "Michael Lewis",
      "age": 60,
      "sex": "Male"
    },
    {
      "name": "Chris Flores",
      "age": 20,
      "sex": "Male"
    },
    {
      "name": "Peter Harris",
      "age": 33,
      "sex": "Male"
    },
    {
      "name": "John White",
      "age": 23,
      "sex": "Female"
    },
    {
      "name": "Kevin King",
      "age": 46,
      "sex": "Female"
    },
    {
      "name": "Thomas White",
      "age": 23,
      "sex": "Female"
    },
    {
      "name": "Kevin Johnson",
      "age": 70,
      "sex": "Male"
    },
    {
      "name": "Amelia Robinson",
      "age": 63,
      "sex": "Female"
    },
    {
      "name": "John Flores",
      "age": 44,
      "sex": "Male"
    },
    {
      "name": "Peter Smith",
      "age": 61,
      "sex": "Male"
    },
    {
      "name": "Kevin Walker",
      "age": 45,
      "sex": "Male"
    },
    {
      "name": "Chris Walker",
      "age": 41,
      "sex": "Male"
    },
    {
      "name": "Paul Martinez",
      "age": 65,
      "sex": "Female"
    },
    {
      "name": "Peter Jackson",
      "age": 40,
      "sex": "Male"
    },
    {
      "name": "Emily Young",
      "age": 55,
      "sex": "Female"
    },
    {
      "name": "David Johnson",
      "age": 50,
      "sex": "Female"
    },
    {
      "name": "Amelia Wright",
      "age": 65,
      "sex": "Female"
    },
    {
      "name": "Charlotte Young",
      "age": 55,
      "sex": "Male"
    },
    {
      "name": "Laura Allen",
      "age": 41,
      "sex": "Female"
    },
    {
      "name": "James Jackson",
      "age": 21,
      "sex": "Female"
    },
    {
      "name": "David Young",
      "age": 63,
      "sex": "Male"
    },
    {
      "name": "Thomas Rodriguez",
      "age": 50,
      "sex": "Male"
    },
    {
      "name": "Peter Allen",
      "age": 28,
      "sex": "Female"
    },
    {
      "name": "Emily Martinez",
      "age": 65,
      "sex": "Female"
    },
    {
      "name": "Chris Robinson",
      "age": 80,
      "sex": "Female"
    },
    {
      "name": "Sarah Smith",
      "age": 51,
      "sex": "Female"
    },
    {
      "name": "Michael Rodriguez",
      "age": 59,
      "sex": "Male"
    },
    {
      "name": "Peter Clark",
      "age": 55,
      "sex": "Male"
    },
    {
      "name": "David Young",
      "age": 18,
      "sex": "Female"
    },
    {
      "name": "Charlotte Martinez",
      "age": 77,
      "sex": "Male"
    },
    {
      "name": "David Smith",
      "age": 46,
      "sex": "Female"
    },
    {
      "name": "Sarah White",
      "age": 42,
      "sex": "Female"
    },
    {
      "name": "James Johnson",
      "age": 36,
      "sex": "Male"
    },
    {
      "name": "Paul Robinson",
      "age": 31,
      "sex": "Female"
    },
    {
      "name": "James Flores",
      "age": 61,
      "sex": "Male"
    },
    {
      "name": "Michael Robinson",
      "age": 64,
      "sex": "Female"
    },
    {
      "name": "David Scott",
      "age": 48,
      "sex": "Female"
    },
    {
      "name": "Paul Jackson",
      "age": 41,
      "sex": "Male"
    },
    {
      "name": "Olivia White",
      "age": 38,
      "sex": "Male"
    },
    {
      "name": "Sarah Rodriguez",
      "age": 70,
      "sex": "Male"
    },
    {
      "name": "John Walker",
      "age": 44,
      "sex": "Male"
    },
    {
      "name": "Laura Martinez",
      "age": 30,
      "sex": "Male"
    },
    {
      "name": "James White",
      "age": 24,
      "sex": "Female"
    },
    {
      "name": "David Young",
      "age": 56,
      "sex": "Female"
    },
    {
      "name": "Laura Jackson",
      "age": 64,
      "sex": "Female"
    },
    {
      "name": "David Flores",
      "age": 19,
      "sex": "Male"
    },
    {
      "name": "Chris Martinez",
      "age": 43,
      "sex": "Female"
    },
    {
      "name": "Olivia Martinez",
      "age": 18,
      "sex": "Male"
    },
    {
      "name": "Laura Johnson",
      "age": 28,
      "sex": "Male"
    },
    {
      "name": "Emily Johnson",
      "age": 38,
      "sex": "Male"
    },
    {
      "name": "Emily Rodriguez",
      "age": 39,
      "sex": "Male"
    },
    {
      "name": "Kevin Young",
      "age": 56,
      "sex": "Male"
    },
    {
      "name": "Paul Harris",
      "age": 76,
      "sex": "Male"
    },
    {
      "name": "Emma Johnson",
      "age": 27,
      "sex": "Female"
    },
    {
      "name": "Sarah Young",
      "age": 66,
      "sex": "Female"
    },
    {
      "name": "John Young",
      "age": 33,
      "sex": "Male"
    },
    {
      "name": "Emma Flores",
      "age": 34,
      "sex": "Female"
    },
    {
      "name": "Michael Robinson",
      "age": 48,
      "sex": "Male"
    },
    {
      "name": "Thomas Allen",
      "age": 76,
      "sex": "Male"
    },
    {
      "name": "Emma Robinson",
      "age": 33,
      "sex": "Female"
    },
    {
      "name": "Charlotte Smith",
      "age": 21,
      "sex": "Male"
    },
    {
      "name": "Kevin Allen",
      "age": 38,
      "sex": "Female"
    },
    {
      "name": "John White",
      "age": 77,
      "sex": "Male"
    },
    {
      "name": "Olivia Jackson",
      "age": 62,
      "sex": "Female"
    },
    {
      "name": "Charlotte Rodriguez",
      "age": 66,
      "sex": "Female"
    },
    {
      "name": "Emily Harris",
      "age": 31,
      "sex": "Female"
    },
    {
      "name": "Kevin Allen",
      "age": 29,
      "sex": "Female"
    },
    {
      "name": "Peter Walker",
      "age": 43,
      "sex": "Male"
    },
    {
      "name": "John Walker",
      "age": 56,
      "sex": "Male"
    },
    {
      "name": "Chris Harris",
      "age": 66,
      "sex": "Female"
    },
    {
      "name": "John Young",
      "age": 79,
      "sex": "Female"
    },
    {
      "name": "Kevin Robinson",
      "age": 74,
      "sex": "Male"
    },
    {
      "name": "James Flores",
      "age": 23,
      "sex": "Male"
    },
    {
      "name": "Sarah Johnson",
      "age": 21,
      "sex": "Female"
    },
    {
      "name": "Emily Allen",
      "age": 41,
      "sex": "Female"
    },
    {
      "name": "Thomas Rodriguez",
      "age": 53,
      "sex": "Female"
    },
    {
      "name": "Emily Wright",
      "age": 47,
      "sex": "Male"
    },
    {
      "name": "Kevin Clark",
      "age": 43,
      "sex": "Male"
    },
    {
      "name": "James Martinez",
      "age": 68,
      "sex": "Female"
    },
    {
      "name": "James Martinez",
      "age": 35,
      "sex": "Female"
    },
    {
      "name": "Thomas Rodriguez",
      "age": 47,
      "sex": "Female"
    },
    {
      "name": "John Walker",
      "age": 71,
      "sex": "Female"
    },
    {
      "name": "James Flores",
      "age": 47,
      "sex": "Male"
    },
    {
      "name": "Kevin Wright",
      "age": 75,
      "sex": "Male"
    },
    {
      "name": "Paul Lewis",
      "age": 57,
      "sex": "Male"
    },
    {
      "name": "Kevin Rodriguez",
      "age": 48,
      "sex": "Male"
    },
    {
      "name": "Emma Harris",
      "age": 20,
      "sex": "Female"
    },
    {
      "name": "Emma Allen",
      "age": 23,
      "sex": "Male"
    },
    {
      "name": "Chris Jackson",
      "age": 66,
      "sex": "Female"
    },
    {
      "name": "Sarah Martinez",
      "age": 37,
      "sex": "Male"
    },
    {
      "name": "Amelia Walker",
      "age": 65,
      "sex": "Female"
    },
    {
      "name": "Thomas Walker",
      "age": 26,
      "sex": "Female"
    },
    {
      "name": "Emily Harris",
      "age": 56,
      "sex": "Female"
    },
    {
      "name": "Laura King",
      "age": 43,
      "sex": "Female"
    },
    {
      "name": "Laura Jackson",
      "age": 53,
      "sex": "Female"
    },
    {
      "name": "Laura Flores",
      "age": 57,
      "sex": "Male"
    },
    {
      "name": "Michael Jackson",
      "age": 50,
      "sex": "Female"
    },
    {
      "name": "Emily King",
      "age": 28,
      "sex": "Female"
    },
    {
      "name": "James Young",
      "age": 24,
      "sex": "Female"
    },
    {
      "name": "Peter Young",
      "age": 66,
      "sex": "Female"
    },
    {
      "name": "James Jackson",
      "age": 46,
      "sex": "Male"
    },
    {
      "name": "Olivia Harris",
      "age": 21,
      "sex": "Female"
    },
    {
      "name": "Kevin Robinson",
      "age": 65,
      "sex": "Female"
    },
    {
      "name": "Olivia White",
      "age": 56,
      "sex": "Female"
    },
    {
      "name": "Charlotte Clark",
      "age": 39,
      "sex": "Male"
    },
    {
      "name": "Kevin Walker",
      "age": 61,
      "sex": "Male"
    },
    {
      "name": "Kevin Clark",
      "age": 64,
      "sex": "Female"
    },
    {
      "name": "Thomas Young",
      "age": 78,
      "sex": "Female"
    },
    {
      "name": "John Lewis",
      "age": 66,
      "sex": "Male"
    },
    {
      "name": "Peter Walker",
      "age": 26,
      "sex": "Female"
    },
    {
      "name": "Charlotte Walker",
      "age": 78,
      "sex": "Male"
    },
    {
      "name": "Paul Scott",
      "age": 64,
      "sex": "Female"
    },
    {
      "name": "Emma Johnson",
      "age": 63,
      "sex": "Male"
    },
    {
      "name": "Amelia Martinez",
      "age": 26,
      "sex": "Female"
    },
    {
      "name": "Daniel Scott",
      "age": 70,
      "sex": "Female"
    },
    {
      "name": "Peter White",
      "age": 73,
      "sex": "Male"
    },
    {
      "name": "Charlotte Johnson",
      "age": 36,
      "sex": "Male"
    },
    {
      "name": "Daniel Rodriguez",
      "age": 26,
      "sex": "Male"
    },
    {
      "name": "Kevin Johnson",
      "age": 34,
      "sex": "Male"
    },
    {
      "name": "David Smith",
      "age": 48,
      "sex": "Female"
    },
    {
      "name": "Laura Clark",
      "age": 58,
      "sex": "Female"
    },
    {
      "name": "Daniel Martinez",
      "age": 73,
      "sex": "Male"
    },
    {
      "name": "Olivia King",
      "age": 34,
      "sex": "Male"
    },
    {
      "name": "James Wright",
      "age": 60,
      "sex": "Male"
    },
    {
      "name": "Amelia Scott",
      "age": 45,
      "sex": "Female"
    },
    {
      "name": "Chris White",
      "age": 46,
      "sex": "Female"
    },
    {
      "name": "John Clark",
      "age": 33,
      "sex": "Male"
    },
    {
      "name": "Sarah Martinez",
      "age": 67,
      "sex": "Female"
    },
    {
      "name": "Amelia Walker",
      "age": 34,
      "sex": "Male"
    },
    {
      "name": "Laura Wright",
      "age": 47,
      "sex": "Male"
    },
    {
      "name": "John Robinson",
      "age": 24,
      "sex": "Female"
    },
    {
      "name": "James Harris",
      "age": 42,
      "sex": "Male"
    },
    {
      "name": "Amelia Rodriguez",
      "age": 23,
      "sex": "Female"
    },
    {
      "name": "James Allen",
      "age": 32,
      "sex": "Male"
    },
    {
      "name": "Thomas Wright",
      "age": 35,
      "sex": "Female"
    },
    {
      "name": "Laura Martinez",
      "age": 64,
      "sex": "Male"
    },
    {
      "name": "Thomas Allen",
      "age": 39,
      "sex": "Male"
    },
    {
      "name": "Olivia Clark",
      "age": 68,
      "sex": "Male"
    },
    {
      "name": "Charlotte Scott",
      "age": 70,
      "sex": "Male"
    },
    {
      "name": "Peter Scott",
      "age": 27,
      "sex": "Male"
    },
    {
      "name": "Paul King",
      "age": 74,
      "sex": "Female"
    },
    {
      "name": "Paul Clark",
      "age": 78,
      "sex": "Female"
    },
    {
      "name": "Amelia Walker",
      "age": 69,
      "sex": "Male"
    },
    {
      "name": "Kevin King",
      "age": 69,
      "sex": "Male"
    },
    {
      "name": "Peter Jackson",
      "age": 22,
      "sex": "Male"
    },
    {
      "name": "Thomas Wright",
      "age": 20,
      "sex": "Female"
    },
    {
      "name": "Daniel Smith",
      "age": 69,
      "sex": "Female"
    },
    {
      "name": "James Rodriguez",
      "age": 56,
      "sex": "Female"
    },
    {
      "name": "Charlotte Wright",
      "age": 20,
      "sex": "Male"
    },
    {
      "name": "Kevin White",
      "age": 46,
      "sex": "Male"
    },
    {
      "name": "Thomas Martinez",
      "age": 35,
      "sex": "Male"
    },
    {
      "name": "Kevin Wright",
      "age": 58,
      "sex": "Female"
    },
    {
      "name": "James Harris",
      "age": 43,
      "sex": "Female"
    }
  ];