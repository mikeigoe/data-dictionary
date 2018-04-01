# Data Dictionary
This project allows for the maintenance of a basic data dictionary for a back-end data storage schema. Such schema may consist of:

- __ISAM__ files
- __MySQL__ tables
- __JSON__ files
- __XML__ files

## Table Format

| **Item** | **Type** | **Format** | **Length** | **Required** | **Description** | **Example** | **Validation** |
-- |-- |-- |-- |-- |-- |-- |-- |
ID | `int` | N | | Y | Unique Identifier | | Assigned by database | | Auto generated |
Forename | `string` | | 30 | Y |
Surname | `string` | | 30 | Y |
Staff No | `string` | NNNNN | 6 | Y | 6 character alphanumeric | 01234A | |
PPSN | `string` | NNNNNNNAA | 8-9 | Y | Personal Public Service Number | 1234567A | `mod` 23 with check character 

