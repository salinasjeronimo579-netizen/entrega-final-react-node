import { DataTypes } from "sequelize";
import {conn} from "../config/database.js";

export const ModelRol = conn.define("Rol", {
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion_rol: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Roles",
    timestamps: true
})