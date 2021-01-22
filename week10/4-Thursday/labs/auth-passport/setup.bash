
sequelize model:generate --name roles --attributes name:string,roleType:integer

sequelize model:generate --name users --attributes userName:string,email:string,password:string,roleID:integer