<div align="center">

![Logo](./docs/logo/favicon.png)

# Anderson Toledo Martins Moreira

[![Resume-US](https://img.shields.io/badge/RESUME_US-3776AB?style=for-the-badge&logo=libreofficewriter&logoColor=white)](https://docs.google.com/document/d/1I8T4Mkb61NsTKN14ZbT1mnQKAc9LqiiPtgrYf9ayH1c/edit?usp=sharing)
[![Resume-PTbr](https://img.shields.io/badge/RESUME_PT_br-007C3C?style=for-the-badge&logo=libreofficewriter&logoColor=white)](https://docs.google.com/document/d/1vnFlRP3myxexgHk5Y6XaCKQGETPQwCygPZqGSblwCXg/edit?usp=sharing)
<br/>
[![LINKEDIN](https://img.shields.io/badge/Linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/atmmoreira)
[![GMAIL](https://img.shields.io/badge/Gmail-EE2624?style=for-the-badge&logo=gmail&logoColor=white)](mailto:atmmoreira.rj@gmail.com?subject=From%20GitHub&cc=atmmoreira.rj@gmail&body=Hi,%20there.%20Found%20you%20from%20GitHub.)
[![WHATSAPP](https://img.shields.io/badge/Whatsapp-34A853?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=5521992890362)

</div>

<div align="center">

![COMPLETE](https://img.shields.io/badge/COMPLETE-7ED321?style=for-the-badge&logo=cachet&logoColor=white)

</div>

## Description

Share a Place is a Web app to locate and share places. Users can search for an address, get their current location via browser geolocation, and generate a shareable link with latitude, longitude, and address. The map is rendered with Leaflet and OpenStreetMap tiles, while address/coordinate conversion uses the Nominatim API.

### Features

- Search for an address and display it on the map.
- Get the user’s current location.
- Update the map and marker after selection.
- Generate a shareable link with address and coordinates.
- Copy the link to the clipboard.

## Screenshots

<div align="center">

Homepage layout

![Logo](./docs/homepage.png)

</div>

## Technologies

<!--
References for Create budgets :: https://shields.io/category/build
Icons: https://simpleicons.org/
-->

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=for-the-badge&logo=openstreetmap&logoColor=white)

### Tools

![Visual_Studio_Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Project structure

```
.
├── docs/
│   └── logo/
├── public/
├── src/
│   ├── UI/
│   │   ├── Map.js
│   │   └── Modal.js
│   ├── Utility/
│   │   └── Location.js
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── README.md
```

### Main files

- [src/main.js](src/main.js): handles search, geolocation, map updates, and sharing.
- [src/UI/Map.js](src/UI/Map.js): renders and updates the map with Leaflet.
- [src/UI/Modal.js](src/UI/Modal.js): loading modal during requests.
- [src/Utility/Location.js](src/Utility/Location.js): Nominatim integration for geocoding and reverse geocoding.
- [src/style.css](src/style.css): global UI styles.
- [index.html](index.html): base page structure.

## Running the project

### Prerequisites

- Node.js 18+ (recommended)
- npm
- Vite

### Steps

```bash
# Install dependencies
npm install

# Development server (Vite)
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# After starting the dev server, open:
http://localhost:5173/
```
