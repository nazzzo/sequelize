module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model {
      static createTable() {
        return this.init(
          {
            userid: {
              type: Sequelize.STRING(30),
              primaryKey: true,
            },
            userpw: {
              type: Sequelize.STRING(64),
              allowNull: false,
            },
            username: {
              type: Sequelize.STRING(20),
              allowNull: false,
            },
            provider: {
              type: Sequelize.ENUM("local", "kakao"),
              allowNull: false,
              defaultValue: "local",
            },
            snsId: {
              type: Sequelize.STRING(30),
              allowNull: true,
            }
          },
          {
            sequelize,
          }
        );
      }
      static associate(models) {
        this.hasMany(models.Board, {
          foreignKey: "userid",
        });
        this.hasMany(models.Comment, {
          foreignKey: "userid",
        })
        this.belongsToMany(models.Board, {
          through: "Liked",
          foreignKey: "userid",
        })
      }
    }
    User.createTable();
  
    return User;
  };
  