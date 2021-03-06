// 谱册内谱曲表
'use strict';
module.exports = app => {
    const {
        INTEGER,
    } = app.Sequelize;
    const hearExamModel = app.model.define('hearExam', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        hid: {
            type: INTEGER,
            allowNull: false,

        },
        eid: {
            type: INTEGER,
            allowNull: false,
        },

    }, {
        timestamps: false,
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });

    return hearExamModel;
};