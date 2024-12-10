# WAA Webstore

[![GitHub](https://img.shields.io/github/license/addisudamena/waa_webstore)](https://github.com/addisudamena/waa_webstore.git)

## Overview

WAA Webstore is a modern web-based application designed to deliver an efficient and user-friendly online shopping experience. Built with cutting-edge technologies, it incorporates a clean architecture for scalability and maintainability.

## Features

- **Web Layer:** Built with React and Bootstrap for a responsive and dynamic UI.
- **Service Layer:** Integrates GraphQL for efficient data fetching and manipulation.
- **Domain-Driven Design:** Incorporates clear separation of concerns for better structure and clarity.
- **Integration:** External email services for notifications.
- **Data Access:** Secure and optimized database interactions.

## Architecture Diagram

![Class Diagram](./class%20diagram.jpg)

The application follows a well-defined multi-layer architecture, as shown in the above diagram, for improved modularity and maintainability.

## Folder Structure

```plaintext
.waa_webstore/
├── .devcontainer/      # Dev container configurations
├── .idea/              # Project IDE configurations
├── BackEnd/            # Backend source code
├── FrontEnd/           # Frontend source code
├── class diagram.jpg   # Architecture class diagram (image)
├── class diagram.pdf   # Architecture class diagram (PDF)
```

## Technologies Used

- **Frontend:** Bootstrap, React
- **Backend:** Spring Boot, GraphQL
- **Others:** Docker (for development containerization)

## How to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/addisudamena/waa_webstore.git
   cd waa_webstore
   ```

2. **Install Dependencies:**
   - Frontend:
     ```bash
     cd FrontEnd
     npm install
     ```
   - Backend:
     ```bash
     cd BackEnd
     ./mvnw install
     ```

3. **Run the Application:**
   - Start Frontend:
     ```bash
     cd FrontEnd
     npm start
     ```
   - Start Backend:
     ```bash
     cd BackEnd
     ./mvnw spring-boot:run
     ```

4. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` (Frontend) and `http://localhost:8080` (Backend).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.


## Contact

For any inquiries, feel free to contact [addisudamena](mailto:addisudalemu@gmail.com).
