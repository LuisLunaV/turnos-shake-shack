const { DataTypes } = require('sequelize');

const { db } = require('../db/config.js')

const Orders = db.define('Ordenes',{
    Orden_Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Orden_Cliente:{
        type:DataTypes.STRING,
    },
    Orden_fecha:{
        type:DataTypes.DATE,
    },
    Orden_IdLocal:{
        type:DataTypes.STRING,
    },
    Orden_IdTerminal:{
        type:DataTypes.STRING,
    },
    Orden_IdCuenta:{
        type:DataTypes.STRING,
    },
    Orden_IdPosition:{
        type:DataTypes.STRING,
    },
    Orden_Status:{
        type:DataTypes.TINYINT,
    },
}, {
    tableName: 'Ordenes',
    timestamps: false
});

module.exports={
    Orders
}