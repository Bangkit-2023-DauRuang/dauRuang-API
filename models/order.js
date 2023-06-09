const { DataTypes } = require("sequelize");

module.exports = ( Sequelize, DataTypes )=> {
    const order = Sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          jenis_sampah: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          hargaPerKg: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          berat_sampah: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          points: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          lokasi_pengepul: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lokasi_user: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          catatan: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          isPickedUp: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          waktu_order: {
            type: DataTypes.TIME,
            allowNull: false,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          updateAt: {
            type: DataTypes.DATE,
            allowNull: false,
          }
      }, {
        tableName:'order'
      });
      return order;
}