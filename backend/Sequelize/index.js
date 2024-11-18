import express from "express";
import bodyParser from "body-parser";
import userModel from "./userModel.js";
import sequelize from "./database.js";

const app = express();
const PORT = 3033;

app.use(bodyParser.json());

sequelize.sync();

app.post("/user", async (req, res) => {
  try {
    const username = "lnmhoa";
    const password =
      "$2y$10$GWfa.AjWo0cMylkNjPbhl.xBBexBY1GinfEv5B.ueXahkf69Vdcg.";
    const fullname = "Lê Nguyễn Minh Hòa";
    const address = "Cần Thơ";
    const sex = "Nam";
    const email = "lnmhoa";
    const role = 1;
    const newUser = await userModel.create({
      username,
      password,
      fullname,
      address,
      sex,
      email,
      role,
    });
    return res.status(201).json({
        message: "Thêm thành công",
        data: newUser,
    });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByPk(id);
    if (!user) {
      return res.status(400).json({
        message: "Người dùng không tồn tại",
      });
    }
    const delUser = await userModel.destroy({ where: { id } });
    if(delUser) {
        return res.status(200).json({
            message: "Xóa người dùng thành công",
        });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
