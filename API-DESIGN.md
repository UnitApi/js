 API Design?

Any type of design requires taking well-informed decisions. The decisions are intended to make the product better in some way, e.g. provide more functionality, provide better quality or a better user experience. Better design decisions typically lead to better products. This is no different when designing APIs. Which design decisions are there for APIs? We see four groups of design decisions.

Architectural Design Decisions: When designing an API, decisions have to be made regarding architectural issues, such as the patterns and the styles to be used. Should the API follow the REST or SOAP architectural style? These design decisions are foundational and have an impact on all following decisions.

API Frontend Design Decisions: Since the frontend of the API is visible to the API consumers (= customers of the API), frontend design decisions are quite critical for the success of an API. Frontend design for APIs is typically RESTful design. For RESTful frontend design we need to answer questions such as: How does the URI of the API look like? Are the parameters passed in the form of query parameters or path parameters? Which headers and status codes should be used?

API Backend Design Decisions: The functionality of the API depends on leveraging data and services of backend systems. Backend design decisions address the connection between API and backend. Design decisions regarding the integration, transformation, aggregation, security and error handling of the backend have an impact on the functionality of the API.

Non-functional design decisions: The architectural, frontend and backend design decisions are primarily taken to craft the functionality of the API. However, these decisions also have an impact on the non-functional properties of the API, such as security, performance, availability, and evolvability. Non-functional properties of the API should not be an afterthought. The API needs to be designed right from the start to fulfill non-functional requirements.

In this book, we address all four groups of design decisions for APIs. The focus is, however, on REST and the API frontend design decisions.

The API-University Series is a modular series of books on API-related topics. Each book focuses on a particular API topic, so you can select the topics within APIs, which are relevant to you.

Keywords: RESTful, REST, API Design, API, API Description Languages, RAML, OpenAPI/Swagger
