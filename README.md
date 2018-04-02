# Paperclip
This project aims to make it easier to keep track of project documents. They may be stored in a dedicated cloud or network drive, but eventually, either by necessity or otherwise, documents can wind up scattered across these storage media, local drives and other places.

[Paperclip](https://github.com/mikeigoe/paperclip) seeks to explore alternative mechanism for managing project documentation by providing a Single Page Application where metadata describing the location, author, creation time and media of the document are stored in a light-weight no-SQL database (**MongoDB** is currently proposed).

The project also aims to leverage **GraphQL** to widen the scope of what can be tracked in the project database.

The application should ideally be able to retrieve the requested document if technology and permissions allow.