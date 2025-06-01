// Triple slash directive
/// <reference path="./crud.d.ts" />


// Import types
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create row object
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);

// Update row
const updatedRow: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};

// Call updateRow
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);